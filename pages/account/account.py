from flask import Blueprint, render_template
from app import login_required


# home blueprint definition
account = Blueprint(
    'account',
    __name__,
    static_folder='static',
    static_url_path='/account',
    template_folder='templates'
)


# Routes
@account.route('/account')
@login_required
def account_index():
    return render_template('account.html')