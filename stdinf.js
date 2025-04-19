const sidt = localStorage.getItem('i');
const sidts = parseInt(sidt, 10); // Convert to integer
// Initialize the page
function initializePage() {
    const student = students.find(s => s.id === sidts);
    if (student) {
        showStudentDetails(student);
    } else {
        console.error("Student not found with ID:", sidts);
    }
}

// Show student details
function showStudentDetails(student) {
    document.getElementById('studentDetails').style.display = 'block';

    // Update student info
    document.getElementById('wname').textContent = "Welcome "+ student.name;
    document.getElementById('detailClass').textContent = student.class;
    document.getElementById('detailAdmission').textContent = student.admissionDate;

    renderFeesTable(student);
}

// Render fees table
function renderFeesTable(student) {
    const tbody = document.getElementById('feesTableBody');
    tbody.innerHTML = '';

    student.fees.forEach((fee, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${fee.month}</td>
            <td class="status-${fee.status}">${fee.status}</td>
            <td>${fee.paymentDate || '-'}</td>
            <td>
                <input type="text" class="notes-input" value="${fee.notes}" 
                    onchange="updateNotes(student, ${index}, this.value)" >
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Update notes
function updateNotes(student, index, newNote) {
    student.fees[index].notes = newNote;
}

// Initialize the page when loaded
document.addEventListener('DOMContentLoaded', initializePage);
