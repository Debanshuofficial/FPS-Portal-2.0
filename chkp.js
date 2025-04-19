// Function to check the password
function checkPassword() {
    const pi = document.getElementById('pi').value;
    const errorMessage = document.getElementById('errorMessage');
    const blurLayer = document.getElementById('blurLayer');

    const cp = '*** ';

    if (pi === cp) {
        blurLayer.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
}