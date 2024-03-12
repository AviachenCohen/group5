from flask import Blueprint, render_template

# home blueprint definition
aboutus = Blueprint(
    'aboutus',
    __name__,
    static_folder='static',
    static_url_path='/aboutus',
    template_folder='templates'
)


# Routes
@aboutus.route('/aboutus')
def aboutus_index():
    return render_template('aboutus.html')