const form = document.getElementById('patientForm');
const tableBody = document.getElementById('tableBody');
function addPatient() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const motherName = document.getElementById('motherName').value;
    const fatherName = document.getElementById('fatherName').value;
    const disease = document.getElementById('disease').value;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
        <td>${motherName}</td>
        <td>${fatherName}</td>
        <td>${disease}</td>
    `;
    tableBody.appendChild(newRow);
    form.reset();
}


  