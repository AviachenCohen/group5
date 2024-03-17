# Import necessary modules
from flask import Blueprint, render_template, request, session, redirect, jsonify
from db_connector import customers_col

# Create a blueprint for the login routes
login = Blueprint(
    'login',
    __name__,
    static_folder='static',
    static_url_path='/login',
    template_folder='templates'
)


# Route for handling login requests
@login.route('/login', methods=['GET', 'POST'])
def login_index():
    if request.method == 'POST':
        data = request.json  # Extract JSON data from the request body
        email = data.get('emailInput')  # Extract email from JSON data
        password = data.get('password')  # Extract password from JSON data

        # Check if the email and password match a user in the database
        user = customers_col.find_one({'Mail address': email, 'Password': password})

        if user:
            # If a user is found, store the email in the session
            session['email'] = email
            session['Skin Type'] = user.get('Skin Type')
            return jsonify(success=True)  # Return a JSON response indicating success
        else:
            return jsonify(success=False,
                           error="Oops! It seems like there's no account associated with the email you provided, "
                                 "or your password is wrong. "
                                 "Please double-check your email or consider signing up if you're new here.")
            # Return a JSON response indicating failure and the error message

    # Render the login page template
    return render_template('login.html')


# Route for handling logout requests
@login.route('/logout')
def logout():
    # Remove the 'email' key from the session if it exists
    session.pop('email', None)
    # Redirect the user to the home page or any other appropriate page
    return redirect('/')
