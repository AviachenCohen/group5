# Import necessary modules
from flask import Blueprint, render_template, session
from db_connector import *

# home blueprint definition
myskincare = Blueprint(
    'myskincare',
    __name__,
    static_folder='static',
    static_url_path='/myskincare',
    template_folder='templates'
)


# Routes
@myskincare.route('/myskincare')
def myskincare_index():
    user_skin_type = session.get('Skin Type')  # Retrieve user's skin type from session

    # Define the query to fetch products based on user's skin type
    query = {
        '$or': [
            {'Skin_Type': user_skin_type},  # Filter by user's skin type
            {'Skin_Type': 'All'}  # Include products suitable for all skin types
        ]
    }

    # Query MongoDB to fetch products based on the defined query
    products = get_list_of_products(query)

    return render_template('myskincare.html', products=products)
