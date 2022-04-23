if (localStorage){
    $(document).ready(function () {
        $('.save').click(function () {

            var name = $('#name').val();
            var email = $('#mail').val();
            var ph = $('#num').val();
            var pw = $('#pass').val();

            data = { name, email, ph, pw };

            if (validateForm()) {
                localStorage.setItem('userData', JSON.stringify(data));
                console.log(data);
                $('#submit-btm').disabled = true;
                alert('Login successful!');
            }

        })
    })
}

function validateForm() {
    let inputName = $('#name').val();
    let inputPassword = $('#pass').val();

    if (inputName.length == '' || inputName.length < 3) {
        alert('Name must contain atleast 3 characters');
        return false;
    }
    if (inputPassword.length == '' || inputPassword.length < 3) {
        alert('Password must contain atleast 3 characters!')
        return false;
    }
    return true;
}
