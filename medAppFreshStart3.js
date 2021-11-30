//const button = document.getElementById('new prescription');

function newPatient() {
  const addPatient = document.getElementById('newPtDemographics');
  addPatient.style.display = 'block';
}

function findPatient() {
  let name = document.getElementById(search);
  name = name.innerText;
  console.log(name);
}

const button1 = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
  const name = document.getElementById('search').value;
  //console.log(name);
  let patients = localStorage.getItem('patients');
  patients = JSON.parse(patients);
  let patient = patients[name];
  nameDisplay = document.getElementById('nameDisplay');
  ageDisplay = document.getElementById('ageDisplay');

  nameDisplay.innerHTML = 'Name: ' + patient[key];
  ageDisplay.innerHTML = 'Age' = patient.age;

  //console.log(patient);
  //patients = JSON.parse(patients);
});
function createPatient() {
  let patients = localStorage.getItem('patients');
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  if (patients !== null) {
    //instead of parsing here can just append array with new patient if it already exists.
    //Will need to parse to retrieve data to fill patient details when select new patient or
    //reopen broswer.
    patients = JSON.parse(patients);
  } else {
    patients = {};
  }
  patients[name] = { age: age };
  //patients.push({ [name]: { age: age } });
  localStorage.setItem('patients', JSON.stringify(patients));
  //console.log(patients[name]);
}
function addPrescription() {
  const addPrescription = document.getElementById('addPrescription');
  addPrescription.style.display = 'block';
}

function createPrescription() {
  const div = document.getElementById('prescriptions');

  const newPrescription = document.createElement('div');
  newPrescription.classList.add('prescription');
  const name = document.getElementById('name').value;
  console.log(name);
  //var patient = JSON.parse(localStorage.getItem('patients.[name]'));
  //newPrescription.innerHTML = patient;
  //div.appendChild(newPrescription);
  //console.log('testing');
  //console.log(patient);
  //console.log('testing');
  /*
  newPrescription.innerHTML =
    'Drug: ' +
    document.getElementById('prescriptionForm').Drug.value +
    ' Dosage: ' +
    document.getElementById('prescriptionForm').Dosage.value +
    ' ' +
    document.getElementById('prescriptionForm').measurement.value;
  div.appendChild(newPrescription);
  */
}
function createNote() {
  let noteForm = document.getElementById('noteForm');
  let formData = new FormData(noteForm);
  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var note = JSON.stringify(object);
}
function noteModal() {
  const noteModal = document.getElementById('noteModal');
  noteModal.style.display = 'block';
}
function addProblem() {
  const addProblem = document.getElementById('addProblem');
  addProblem.style.display = 'block';
}
function closeProblem() {
  const addProblem = document.getElementById('addProblem');
  addProblem.style.display = 'none';
}
function closeNote() {
  const noteModal = document.getElementById('noteModal');
  noteModal.style.display = 'none';
}

function closePrescription() {
  const addPrescription = document.getElementById('addPrescription');
  addPrescription.style.display = 'none';
}
function closeDemo() {
  const addPatient = document.getElementById('newPtDemographics');
  addPatient.style.display = 'none';
}

//button.addEventListener('click', () => {});

/*function AddPre() {
  var pre = document.createElement('pre');
  pre.innerHTML =
    '<pre>\n\
Drug:               Dosage:           Instructions: \r\n\
</pre>';
  var container1 = document.getElementById('container1');
  container1.appendChild('pre');
}
*/
