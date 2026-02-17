// Create unique symptom list
const symptomSet = new Set();

diseases.forEach(d => {
    d.symptoms.forEach(s => symptomSet.add(s));
});

const symptomListDiv = document.getElementById("symptomList");

symptomSet.forEach(symptom => {
    const label = document.createElement("label");
    label.innerHTML = `
        <input type="checkbox" value="${symptom}">
        ${symptom}
    `;
    symptomListDiv.appendChild(label);
    symptomListDiv.appendChild(document.createElement("br"));
});

function checkDisease() {
    const selectedSymptoms = [];
    document.querySelectorAll("input[type=checkbox]:checked")
        .forEach(cb => selectedSymptoms.push(cb.value));

    let found = false;
    let resultHTML = "";

    diseases.forEach(disease => {
        let matchCount = disease.symptoms.filter(s =>
            selectedSymptoms.includes(s)
        ).length;

        if (matchCount >= 2) { // minimum 2 matches
            found = true;

            resultHTML += `
                <h3>Disease: ${disease.name}</h3>
                <p><strong>Cause:</strong> ${disease.cause}</p>
                <p><strong>Medicine:</strong> ${disease.medicine}</p>
                <p><strong>Food to Eat:</strong> ${disease.foodEat}</p>
                <p><strong>Food to Avoid:</strong> ${disease.foodAvoid}</p>
                <hr>
            `;
        }
    });

    if (!found) {
        resultHTML = "No matching disease found. Please consult a doctor.";
    }

    document.getElementById("result").innerHTML = resultHTML;
}
