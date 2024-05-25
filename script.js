




function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var ramenType = document.getElementById("preferences").value;
  var error = false;

  var preferences = document.getElementsByName("preferences[]");
      var isChecked = false;

      for (var i = 0; i < preferences.length; i++) {
          if (preferences[i].checked) {
              isChecked = true;
              break;
          }
      }
      if (!isChecked) {
          document.getElementById("preferencesError").innerHTML = "User must agree to receive newsletter.";
          return false;
      }

  // Validasi Nama
  if (name === "") {
      document.getElementById("nameError").innerHTML = "Please insert Full Name";
      error = true;
  } else {
      document.getElementById("nameError").innerHTML = "";
  }

    //validasi message
  if (message === "") {
    document.getElementById("messageError").innerHTML = "please insert your message";
    error = true;
} else {
    document.getElementById("messageError").innerHTML = "";
}

//validasi ramen
if (ramenType !== "Ramen" && ramenType !== "Dry-Ramen") {
  alert("Pilihan ramen harus 'Ramen' atau 'Dry Ramen'");
  return false;
}

  // Validasi Email
  if (email === "") {
      document.getElementById("emailError").innerHTML = "Please insert Email";
      error = true;
  } else if (!validateEmail(email)) {
      document.getElementById("emailError").innerHTML = "Email is not valid";
      error = true;
  } else {
      document.getElementById("emailError").innerHTML = "";
  }

  // Validasi Nomor Telepon
  if (phone === "") {
      document.getElementById("phoneError").innerHTML = "Please insert phone number";
      error = true;
  } else if (!validatePhone(phone)) {
      document.getElementById("phoneError").innerHTML = "Phone number is not valid";
      error = true;
  } else {
      document.getElementById("phoneError").innerHTML = "";
  }

  if (error) {
      return false; 
  }
}

function validateEmail(email) {
  
  var re = /\S+@\S+.\S+/;
  return re.test(email);
  
}

function validatePhone(phone) {
  
  var re = /^\d{10,}$/;
  return re.test(phone);

}

