let category = document.getElementById("category");
console.log(category.value);
let college = document.getElementById("college");
let school = document.getElementById("school");
let vary = document.getElementById("vary");

let parOrGaur = document.getElementById("par-or-gaurd");
let forParents = document.getElementById("for-parents");
let forGaurdian = document.getElementById("for-gaurdian");
let vary2 = document.getElementById("vary2");

removeNode(category.value);
removeNodeForParentsGaurd(parOrGaur.value);

category.onchange = function (e) {
 
  removeNode(e.target.value);
};
parOrGaur.onchange = function (e) {
  removeNodeForParentsGaurd(e.target.value);
};

function removeNode(category) {
  if (category === "school") {
    college.remove();
    vary.append(school);
  } else {
    school.remove();
    vary.append(college);
  }
}
function removeNodeForParentsGaurd(category) {
  if (category === "Parent") {
    forGaurdian.remove();
    vary2.append(forParents);
  } else {
    forParents.remove();
    vary2.append(forGaurdian);
  }
}

function dobToAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const nameRegx = /^[a-zA-Z ]+$/;
const emailRegx =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const mobileRegx = /^(0|91)?[6-9][0-9]{9}$/;

const clgRlNoRegx = /^\d{9}$/;

document.getElementById("dob").onchange = () => {
  document.forms["inq-form"]["age"].value = dobToAge(
    document.forms["inq-form"]["dob"].value
  );
};

function validateForm() {
  let name = document.forms["inq-form"]["fullname"].value;
  let email = document.forms["inq-form"]["email"].value;
  if (!nameRegx.test(name)) {
    alert("Name must be proper no Special charecters");
    return false;
  }
  console.log("is match", emailRegx.test(email));
  if (!emailRegx.test(email)) {
    alert("enter a valid email id");
    return false;
  }
  console.log(document.forms["inq-form"]["contact"].value);
  console.log(document.forms["inq-form"]["email"].value);
  console.log(mobileRegx.test(document.forms["inq-form"]["contact"].value));
  if (!mobileRegx.test(document.forms["inq-form"]["contact"].value)) {
    alert("enter a valid mobile number");
    return false;
  }
  try {
    if (!mobileRegx.test(document.getElementById("GMobile").value)) {
      alert("enter a valid mobile number (Gaurdian Number)");
      return false;
    }
    if (!nameRegx.test(document.getElementById("GName").value)) {
      alert("Gaurdian Name must be proper \n No Special charecters");
      return false;
    }
  } catch (err) {
    console.error(err);
  }
  try {
    if (!mobileRegx.test(document.getElementById("PMobile").value)) {
      alert("enter a valid mobile number (Parent Number)");
      return false;
    }

    if (!nameRegx.test(document.getElementById("PName").value)) {
      alert("Parent Name must be proper \n No Special charecters");
      return false;
    }
  } catch (err) {
    console.error(err);
  }
  try {
    if (
      !clgRlNoRegx.test(document.getElementById("college-roll-number").value)
    ) {
      alert("Enter a valid college rollnumber");
      return false;
    }
  } catch (err) {
    console.error(err);
  }

  if (document.getElementById("gender").value === "gender select") {
    alert("Choose Gender");
    return false;
  }
  if (document.getElementById("category").value === "Styding At select") {
    alert("Choose where you are stduying");
    return false;
  }
}

function formSubmit(e) {
  e.preventDefault();
  validateForm();
  return false;
}
