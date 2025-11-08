function createTable(data, elementId) {
let table =
"<table><tr><th>ID</th><th>Name</th><th>Department</th><th>Salary</th></tr
>";

data.forEach(emp => {
let highlight = emp.salary > 50000 ? "class='highlight'" : "";
table += `<tr
${highlight}><td>${emp.id}</td><td>${emp.name}</td><td>${emp.department}</
td><td>${emp.salary}</td></tr>`;
});
table += "</table>";
document.getElementById(elementId).innerHTML = table;
}
function populateDepartments(data) {
const deptSelect = document.getElementById("deptSelect");
const departments = [...new Set(data.map(emp => emp.department))];
departments.forEach(dept => {
deptSelect.innerHTML += `<option value="${dept}">${dept}</option>`;
});
}
fetch("employees.json")
.then(response => {
if (!response.ok) throw new Error("Error loading employees.json");
return response.json();
})
.then(data => {
console.table(data);
createTable(data, "fetchTable");
populateDepartments(data);
document.getElementById("deptSelect").addEventListener("change",
function () {
const selected = this.value;
const filtered = selected ? data.filter(emp => emp.department ===
selected) : data;
createTable(filtered, "fetchTable");
});
document.getElementById("showAllBtn").addEventListener("click", () =>
{

createTable(data, "fetchTable");
document.getElementById("deptSelect").value = "";
});
})
.catch(error => console.error(error));

$.getJSON("employees.json", function (data) {
console.table(data);
createTable(data, "jqueryTable");
});
