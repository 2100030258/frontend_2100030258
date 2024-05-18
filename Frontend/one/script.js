const form = document.getElementById('user-form');
const submissionsTable = document.getElementById('submissions-table');

let submissions = []; // Array to store submitted data

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const college = document.getElementById('college').value;
  const year = document.querySelector('input[name="year"]:checked').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const skills = [];
  const skillCheckboxes = document.querySelectorAll('input[name="skills[]"]:checked');
  for (const checkbox of skillCheckboxes) {
    skills.push(checkbox.value);
  }

  const newSubmission = {
    name,
    email,
    college,
    year,
    gender,
    skills,
  };

  submissions.push(newSubmission); // Add new submission to array

  // Update the submissions table
  updateSubmissionsTable();

  // Clear the form after submission (optional)
  form.reset();
});

function updateSubmissionsTable() {
  const tableHtml = `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>College</th>
          <th>Year</th>
          <th>Gender</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        ${submissions.map(submission => `
          <tr>
            <td>${submission.name}</td>
            <td>${submission.email}</td>
            <td>${submission.college}</td>
            <td>${submission.year}</td>
            <td>${submission.gender}</td>
            <td>${submission.skills.join(', ')}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  submissionsTable.innerHTML = tableHtml;
}
