from flask import Flask, session, flash, render_template
from functools import wraps


# App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')


# Define requirements for myskincare/account pages
def login_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if 'email' not in session:
            flash('You need to log in first.', 'error')
            return render_template('login.html')
        return func(*args, **kwargs)
    return wrapper


# Define requirements for login/signup pages
def logout_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if 'email' in session:
            flash('You are already logged in.', 'error')
            return render_template('myskincare.html')
        return func(*args, **kwargs)
    return wrapper


# Pages
# Home
from pages.home.home import home

app.register_blueprint(home)


# About Us
from pages.aboutus.aboutus import aboutus

app.register_blueprint(aboutus)


# Account
from pages.account.account import account

app.register_blueprint(account)


# Log In
from pages.login.login import login

app.register_blueprint(login)


# My Skin Care
from pages.myskincare.myskincare import myskincare

app.register_blueprint(myskincare)


# Sign Up
from pages.signup.signup import signup

app.register_blueprint(signup)


# Components
# header
from components.header.header import header

app.register_blueprint(header)

if __name__ == '__main__':
    app.run(debug=True)
