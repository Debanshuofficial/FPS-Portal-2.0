// Function to check the password
function checkPassword() {
    const pi = document.getElementById('pi').value;
    const errorMessage = document.getElementById('errorMessage');
    const blurLayer = document.getElementById('blurLayer');
    const cpHash = '31d3a52d8302bcb2e2ae7512ed8e2193';
    const piHash = CryptoJS.MD5(pi).toString();
    if (piHash === cpHash) {
        blurLayer.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
}

