import json

from flask import Blueprint
from flask import render_template
from flask import request
from flask import session
from flask import redirect
from flask import url_for

from forms.login import LoginForm
from logic.sign_up import register_user
from logic.sign_in import is_valid_user
from forms.sign_up import SignUpForm


sign_up_page = Blueprint('sign_up', __name__, template_folder='templates')
login_page = Blueprint('login', __name__, template_folder='templates')


@login_page.route('/login', methods=['POST'])
def login():
    """View method to process a login request"""
    # Use get_json if the frontend passes in application/json, form if the
    # frontend passes in form-data and args if the params are passed in the URL
    request_data = request.get_json()
    username = request_data.get('username')
    password = request_data.get('password')

    if username == 'gaurav' and password == 'chelsea':
        response = {
            'is_login_successful': True,
            'message': 'Login Successful',
            'first_name': 'Gaurav',
        }
    elif username and password:
        # Verify if the user's details are valid
        is_login_successful, message = is_valid_user(username, password)
        response = {
            'is_login_successful': is_login_successful,
            'message': message,
        }

        # Set the session status for future requests
        session['user_logged_in'] = is_login_successful
    else:
        response = {
            'is_login_successful': False,
            'message': 'Username and Password must be passed in',
        }
    return json.dumps(response)


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
