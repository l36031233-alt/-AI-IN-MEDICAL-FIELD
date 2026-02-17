
const symptomSet = new Set();

diseases.forEach(d => {
    d.symptoms.forEach(s => symptomSet.add(s));
});

const div = document.getElementById("symptomList");

symptomSet.forEach(symptom => {
    div.innerHTML += `
    <label>
    <input type="checkbox" value="${symptom}"> ${symptom}
    </label>
    `;
});

function checkDisease() {

const selected = [];
document.querySelectorAll("input:checked")
.forEach(cb => selected.push(cb.value));

let resultHTML = "";

diseases.forEach(disease => {

let match = disease.symptoms.filter(s =>
selected.includes(s)).length;

if(match >= 2){
resultHTML += `
<h3>${disease.name}</h3>

<button class="main-btn"
onclick="openDetails('${disease.name}','medicine')">
Medicine
</button>

<button class="main-btn"
onclick="openDetails('${disease.name}','cause')">
Causing Agent
</button>

<button class="main-btn"
onclick="openDetails('${disease.name}','food')">
Food to Avoid
</button>

<button class="main-btn"
onclick="openDetails('${disease.name}','home')">
Home Remedies
</button>

<hr>
`;
}

});

if(resultHTML === "")
resultHTML = "No matching disease found.";

document.getElementById("result").innerHTML = resultHTML;
}

function openDetails(name, section){
window.location.href =
`details.html?disease=${encodeURIComponent(name)}&section=${section}`;
}
