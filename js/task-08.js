const form = document.querySelector(".login-form");
form.addEventListener("submit", checkForm);
function checkForm(event) {
  event.preventDefault();

  let email = form.elements.email;
  let password = form.elements.password;

  email = email.value.trim();
  password = password.value.trim();

  if (email && password) {
    const formData = {
      email,
      password,
    };

    console.log(formData);
    form.reset();
  } else {
    alert("Всі поля повинні бути заповнені");
  }
}
