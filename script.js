    // Current selected student
    let selectedStudent = null;

    // Initialize the page
    function initializePage() {
        renderStudentList();
    }

    // Render the list of students
    function renderStudentList() {
        const studentCards = document.getElementById('studentCards');
        studentCards.innerHTML = '';

        students.forEach(student => {
            const card = document.createElement('div');
            card.className = 'student-card';
            card.innerHTML = `
                <h3>${student.name}</h3>
                <p>Class: ${student.class}</p>
            `;
            card.onclick = () => showStudentDetails(student);
            studentCards.appendChild(card);
        });
    }

    // Show student details
    function showStudentDetails(student) {
        selectedStudent = student;
        document.getElementById('studentList').style.display = 'none';
        document.getElementById('studentDetails').style.display = 'block';

        // Update student info
        document.getElementById('detailName').textContent = student.name;
        document.getElementById('detailClass').textContent = student.class;
        document.getElementById('detailAdmission').textContent = student.admissionDate;

        renderFeesTable();
    }

    // Show student list
    function showStudentList() {
        document.getElementById('studentDetails').style.display = 'none';
        document.getElementById('studentList').style.display = 'block';
        selectedStudent = null;
    }

    // Render fees table
    function renderFeesTable() {
        const tbody = document.getElementById('feesTableBody');
        tbody.innerHTML = '';

        selectedStudent.fees.forEach((fee, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${fee.month}</td>
                <td class="status-${fee.status}">${fee.status}</td>
                <td>${fee.paymentDate || '-'}</td>
                <td>
                    <input type="text" class="notes-input" value="${fee.notes}" 
                        onchange="updateNotes(${index}, this.value)" >
                </td>

            `;
            tbody.appendChild(tr);
        });
    }


    // Initialize the page when loaded
    document.addEventListener('DOMContentLoaded', initializePage);
        