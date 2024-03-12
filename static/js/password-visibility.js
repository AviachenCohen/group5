// toggle password visibility
document.addEventListener('DOMContentLoaded', function() {
    var togglePasswordCheckbox = document.querySelector('.toggle-password-checkbox');

    togglePasswordCheckbox.addEventListener('change', function() {
        var passwordInputs = document.querySelectorAll('.password-input');
        var isChecked = this.checked;

        passwordInputs.forEach(function(input) {
            input.type = isChecked ? 'text' : 'password';
        });
    });
});