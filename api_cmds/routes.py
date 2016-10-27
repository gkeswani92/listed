from flask import render_template, Blueprint, request, session, redirect, url_for

from forms.sign_up import SignUpForm
from forms.login import LoginForm
from logic.sign_up import register_user
from logic.sign_in import is_valid_user


index_page = Blueprint('index', __name__, template_folder='templates')
about_page = Blueprint('about', __name__, template_folder='templates')
sign_up_page = Blueprint('sign_up', __name__, template_folder='templates')
home_page = Blueprint('home', __name__, template_folder='templates')
login_page = Blueprint('login', __name__, template_folder='templates')
sign_out_page = Blueprint('sign_out', __name__, template_folder='templates')


@index_page.route('/')
def index():
    return render_template('index.html')


@about_page.route('/about')
def about():
    return render_template('about.html')


@sign_up_page.route('/signup', methods=['GET', 'POST'])
def sign_up():

    # Authorization to make sure logged in user cannot see sign up page
    if 'email' in session:
        return redirect(url_for('home.home'))

    form = SignUpForm()

    # If the request method is POST, it means that the request has come from the clicking of the submit button
    if request.method == 'POST':

        # If the form data was invalid, render the form again with error messages
        if form.validate() is False:
            return render_template('sign_up.html', form=form)

        else:
            first_name = form.first_name.data
            last_name = form.last_name.data
            email = form.email.data
            password = form.password.data
            register_user(first_name, last_name, email, password)

            session['email'] = email
            return redirect(url_for('home.home'))

    # Get request means this is a fresh request and is not coming from clicking the submit button
    return render_template('sign_up.html', form=form)


@home_page.route('/home')
def home():
    
    # Authorization to make sure only logged in users can see the home page
    if 'email' not in session:
        return redirect(url_for('login.login'))
    return render_template('home.html')


@sign_out_page.route('/sign_out')
def sign_out():
    session.pop('email', None)
    return redirect('/')


@login_page.route('/login', methods=['GET', 'POST'])
def login():

    # Authorization to make sure logged in user cannot see sign up page
    if 'email' in session:
        return redirect(url_for('home.home'))

    form = LoginForm()

    if request.method == 'POST':
        if form.validate() is False:
            return render_template('login.html', form=form)
        else:
            email = form.email.data
            password = form.password.data
            login_successful, message = is_valid_user(email, password)

            if login_successful:
                session['email'] = email
                return redirect(url_for('home.home'))
            else:
                return render_template('login.html', form=form, error=message)

    else:
        return render_template('login.html', form=form)
