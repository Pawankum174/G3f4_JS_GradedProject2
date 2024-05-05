function validateCredentials() {

    const username = document.getElementById('user-entered-value').value;
    const password = document.getElementById('password-entered').value;
    window.localStorage.setItem('Pawan', username);
    window.localStorage.setItem('gl@g3f4', password);


    function checkAndMatch() {
        if (username === 'Pawan' && password === 'gl@g3f4') {
            window.location = 'resume.html';
        } else {
            document.getElementById('user-entered-value').value = ''
            document.getElementById('password-entered').value = '';
            document.getElementById('invalid-scenario').style.display = 'block';
        };
    }
    checkAndMatch();

}

window.history.forward();
function noBack() {
    window.history.forward();
}
noBack();