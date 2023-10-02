// buttons
const editButton = document.getElementById('editButton')
const editForm = document.getElementById('myForm')
const submitButton = document.getElementById('submitButton')


// form items
const formName = document.getElementById('formName')
const formRole = document.getElementById('formRole')
const formAvailability = document.getElementById('formAvailability')
const formAge = document.getElementById('formAge')
const formLocation = document.getElementById('formLocation')
const formYears = document.getElementById('formYears')
const formEmail = document.getElementById('formEmail')

// target items
const nameTarget = document.getElementById('nameTarget')
const RoleTarget = document.getElementById('RoleTarget')
const AvailabilityTarget = document.getElementById('AvailabilityTarget')
const AgeTarget = document.getElementById('AgeTarget')
const LocationTarget = document.getElementById('LocationTarget')
const YearsTarget = document.getElementById('YearsTarget')
const EmailTarget = document.getElementById('EmailTarget')

// assign function to edit button
editButton.addEventListener('click', toggleEditForm)
submitButton.addEventListener('click', mySubmitForm)


function toggleEditForm (event) {
  editForm.classList.toggle('hide-content')
}
function mySubmitForm (event) {
  submitButton.classList.toggle('hide-content')
}

function mySubmitForm(event) {
  // prevent event bubbling JS
  event.preventDefault()
  // get all values
  const currentName = formName.value
  const currentRole = formRole.value
  const currentAvailability = formAvailability.value
  const currentAge = formAge.value
  const currentLocation = formLocation.value
  const currentYears = formYears.value
  const currentEmail = formEmail.value

  // set name to target
  nameTarget.innerHTML = currentName
  RoleTarget.innerHTML = currentRole
  AvailabilityTarget.innerHTML = currentAvailability
  AgeTarget.innerHTML = currentAge
  LocationTarget.innerHTML = currentLocation
  YearsTarget.innerHTML = currentYears
  EmailTarget.innerHTML = currentEmail
  

  // set file to target
  // cek if file exist
  if(currentRole) {
    // bikin instance file reader
    const reader = new FileReader()

    // set function onload nya, pas filereader nya beres, itu mau ngapain
    reader.onload = function (e) {
      imageTarget.src = e.target.result
    }

    // pass the file to file reader
    reader.readAsDataURL(currentFile);

    // log debugging
    console.log(currentFile)
    console.log('file ada')
  }
  
  // hide form nya lagi
  mySubmitForm()
}

// event bubbling javascript

/**
 * get all items (target, form, buttons)
 * fuction toggle
 * toggle class yang punya display none
 * function submit
 * ambil value (nama, tinggi, image)
 * set value ke target
 * image > FileReader > readAsDatURL> onload
 * toggle si form biar hidden lagi
 */

// ref : https://developer.mozilla.org/en-US/docs/Web/API/FileReader
// ref : https://www.freecodecamp.org/news/event-bubbling-in-javascript/