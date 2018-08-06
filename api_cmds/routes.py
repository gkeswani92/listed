from flask import Blueprint
from flask import render_template
from flask import request
from flask import session
from flask import redirect
from flask import url_for

from forms.nearby import NearbySearchForm
from logic.google_places.nearby import NearbySearchGoogle
from util.nearby import address_to_latlng


index_page = Blueprint('index', __name__, template_folder='templates')
about_page = Blueprint('about', __name__, template_folder='templates')
home_page = Blueprint('home', __name__, template_folder='templates')


@index_page.route('/')
def index():
    return render_template('index.html')


@about_page.route('/about')
def about():
    return render_template('about.html')


@home_page.route('/home', methods=['GET', 'POST'])
def home():
    # Authorization to make sure only logged in users can see the home page
    if 'email' not in session:
        return redirect(url_for('login.login'))

    form = NearbySearchForm()

    if request.method == 'POST':
        if form.validate() is False:
            return render_template('home.html', form=form)
        else:
            address = form.address.data
            keyword_search = form.keyword_search.data
            google_search = NearbySearchGoogle()
            nearby_places = google_search.find_nearby_places(keyword_search, address)
            return render_template('home.html', form=form, places=nearby_places)

    else:
        nearby_places = []
        return render_template('home.html', form=form, places=nearby_places)
