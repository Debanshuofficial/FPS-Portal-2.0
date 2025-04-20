let currentLoginType = '';
function showStudentLogin() {
    currentLoginType = 'student';
    document.getElementById('loginPrompt').style.display = 'block';
    document.getElementById('loginTitle').innerText = 'Student Login';
    document.getElementById('usernameInput').style.display = 'block';
}

function handleLogin() {
    const username = document.getElementById('usernameInput').value;
    const p = document.getElementById('pInput').value;
    const errorMessage = document.getElementById('errorMessage');

    if (currentLoginType === 'student') {
        const validStudents = {
            's1': '98dce83da57b0395e163467c9dae521b',
            's2': 'a5771bce93e200c36f7cd9dfd0e5deaa',
            's3': '33e75ff09dd601bbe69f351039152189',
            's4': '182be0c5cdcd5072bb1864cdee4d3d6e',
            's5': 'aab3238922bcc25a6f606eb525ffdc56'
        };

        const inputHash = CryptoJS.MD5(p).toString();

        if (validStudents[username] === inputHash) {
            const userIndex = ['s1', 's2', 's3', 's4', 's5'].indexOf(username);
            if (userIndex !== -1) {
                localStorage.setItem('i', userIndex);
                window.location.href = "showdata.html";
            } else {
                errorMessage.style.display = 'block';
            }
        } else {
            errorMessage.style.display = 'block';
        }
    }
}

function goBack() {
    document.getElementById('loginPrompt').style.display = 'none';
    document.getElementById('loginOptions').style.display = 'block';
    document.getElementById('usernameInput').value = '';
    document.getElementById('pInput').value = '';
}
