let currentLoginType = '';

    function showAdminLogin() {
        currentLoginType = 'admin';
        document.getElementById('loginOptions').style.display = 'none';
        document.getElementById('loginPrompt').style.display = 'block';
        document.getElementById('loginTitle').innerText = 'Admin Login';
        document.getElementById('usernameInput').style.display = 'none';
    }

    function showStudentLogin() {
        currentLoginType = 'student';
        document.getElementById('loginOptions').style.display = 'none';
        document.getElementById('loginPrompt').style.display = 'block';
        document.getElementById('loginTitle').innerText = 'Student Login';
        document.getElementById('usernameInput').style.display = 'block';
    }

    function handleLogin() {
        const username = document.getElementById('usernameInput').value;
        const p = document.getElementById('pInput').value;
        const errorMessage = document.getElementById('errorMessage');

        if (currentLoginType === 'admin') {
            const ap = '*** ';
            if (p === ap) {
                window.location.href = 'index2.html'; 
            } else {
                errorMessage.style.display = 'block';
            }
        } else if (currentLoginType === 'student') {
            const validStudents = {
                'std1': 'p1',
                'std2': 'p2',
                'std3': 'p3',
                'std4': 'p4',       
                'std5': 'p5'
            };

            if (validStudents[username] === p) {
                const userIndex = ['std1', 'std2', 'std3', 'std4', 'std5'].indexOf(username);
                if (userIndex !== -1) {
                    window.location.href = "showdata.html";
                    localStorage.setItem('i', userIndex);
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