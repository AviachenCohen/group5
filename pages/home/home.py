from flask import Blueprint, render_template

# home blueprint definition
home = Blueprint(
    'home',
    __name__,
    static_folder='static',
    static_url_path='/home',
    template_folder='templates'
)


# Routes
@home.route('/')
def home_index():
    return render_template('home.html')