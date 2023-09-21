const addStudentForm = document.getElementById('add-student-form');
const studentList = document.getElementById('student-list');

addStudentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(addStudentForm);
  const studentData = {};
  formData.forEach((value, key) => {
    studentData[key] = value;
  });

  const response = await fetch('/add-student', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  });

  if (response.ok) {
    addStudentForm.reset();
    fetchStudents();
  }
});

async function fetchStudents() {
  const response = await fetch('/list-students');
  if (response.ok) {
    const students = await response.json();
    studentList.innerHTML = '';
    students.forEach((student) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${student.name}, College Roll No: ${student.collegeRollNo}, University Roll No: ${student.universityRollNo}, University Reg No: ${student.universityRegNo}, Contact Number: ${student.contactNumber}`;
      studentList.appendChild(listItem);
    });
  }
}

fetchStudents();
