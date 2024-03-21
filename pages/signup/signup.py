from flask import Blueprint, render_template, request, jsonify
from db_connector import *
from app import logout_required

# home blueprint definition
signup = Blueprint(
    'signup',
    __name__,
    static_folder='static',
    static_url_path='/signup',
    template_folder='templates'
)


# Routes
@signup.route('/signup', methods=['GET', 'POST'])
@logout_required
def signup_index():
    if request.method == 'POST':
        # Process the form data and sign up the user
        data = request.json  # Extract JSON data from the request body
        email = data.get('emailInput')
        phone = data.get('phoneInput')
        first_name = data.get('firstNameInput')
        last_name = data.get('LastNameInput')
        birth_date = data.get('BirthDateInput')
        skin_type = data.get('SkinType')
        password = data.get('password')
        topical_medication = data.get('topical-medication')
        medication_name = data.get('medication-name')

        # Check if the email already exists in the database
        existing_user = check_if_user_exist(email)
        if existing_user:
            return jsonify(success=False, error='Email already exists')

        # Insert the new user into the database
        new_user = {
            "Mail address": email,
            "Phone Number": phone,
            "First name": first_name,
            "Last name": last_name,
            "Date Of Birth": birth_date,
            "Skin Type": skin_type,
            "Password": password,
            "Topical Medication": topical_medication,
            "Medication Name": medication_name
        }
        insert_a_customer(new_user)
        return jsonify(success=True)
    else:
        # If it's a GET request, just render the signup form
        return render_template('signup.html')
