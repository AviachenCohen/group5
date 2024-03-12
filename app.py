from flask import Flask

# App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

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
