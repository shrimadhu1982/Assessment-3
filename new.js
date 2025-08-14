 const students = [
  { name: "Amit Sharma", age: 19, course: "B.Tech" },
  { name: "Priya Verma", age: 22, course: "MCA" },
  { name: "Rohit Gupta", age: 20, course: "BCA" },
  { name: "Neha Singh", age: 23, course: "B.Sc" },
  { name: "Karan Patel", age: 18, course: "B.Com" }
 ];

let isBlue = false;
let isVisible = true;

function createTable(data) {
  const container = document.getElementById("table-container");
  container.innerHTML = "";

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Name", "Age", "Course"];
  headers.forEach(text => {
    const th = document.createElement("th");
    th.innerText = text;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  data.forEach(student => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.innerText = student.name;
    const ageCell = document.createElement("td");
    ageCell.innerText = student.age;
    const courseCell = document.createElement("td");
    courseCell.innerText = student.course;

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(courseCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

function toggleBackground() {
  document.body.style.backgroundColor = isBlue ? "#f8f9fa" : "#e0f7fa";
  isBlue = !isBlue;
}

function toggleTable() {
  const container = document.getElementById("table-container");
  container.style.display = isVisible ? "none" : "block";
  isVisible = !isVisible;
}

function showAgeAbove20() {
  const filtered = students.filter(s => s.age > 20);
  createTable(filtered);
}

function resetTable() {
  createTable(students);
}

function sortByName() {
  const sorted = [...students].sort((a, b) => a.name.localeCompare(b.name));
  createTable(sorted);
}


createTable(students);
