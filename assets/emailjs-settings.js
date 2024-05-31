const RegexPatterns = {
  number: /^\d{2}$/,
  phone: /^\+?[0-9\s-]{8,}$/,
  email: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
};

window.onload = function () {
  const guestlistSignupForm = document.getElementById("guestlistSignupForm");
  const loader = document.getElementById("loader");
  loader.style.display = "none";

  guestlistSignupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const customTests = (data) => {
      return {
        firstName: {
          test: data.firstName !== "",
          error: "Error: A first name is required. Please enter one",
        },
        lastName: {
          test: data.lastName !== "",
          error: "Error: A last name is required. Please enter one",
        },
        reservationDate: {
          test: data.reservationDate !== "",
          error: "Error: A date is required. Please enter one",
        },
        venue: {
          test: data.venue !== "",
          error: "Error: The venue is required. Please enter one",
        },
        men: {
          test: data.men !== "" && RegexPatterns.number.test(data.men),
          error:
            data.men !== ""
              ? "Please enter a valid number"
              : "Error: A number of men is required. Please enter one",
        },
        women: {
          test: data.women !== "" && RegexPatterns.number.test(data.women),
          error:
            data.women !== ""
              ? "Please enter a valid number"
              : "Error: A number of women is required. Please enter one",
        },
        phone: {
          test: data.Phone !== "" && RegexPatterns.phone.test(data.Phone),
          error: data.Phone
            ? "Please enter a valid phone number"
            : "Error: A phone number is required. Please enter one",
        },
        email: {
          test: data.email !== "" && RegexPatterns.email.test(data.email),
          error:
            data.email !== ""
              ? "The email seems to be incorrect. Please check again."
              : "Error: An email address is required. Please enter one",
        },
      };
    };

    const formData = new FormData(guestlistSignupForm);
    const guestlistSignupFormData = Object.fromEntries(formData.entries());

    const showErrors = (tests) => {
      Object.entries(tests).forEach(([fieldName, { test, error }]) => {
        const errorElement = document.getElementById(`${fieldName}Error`);

        if (!test) {
          errorElement.textContent = error;
        } else {
          errorElement.textContent = "";
        }
      });
    };

    const tests = customTests(guestlistSignupFormData);
    showErrors(tests);
    const isFormValid = Object.values(tests).every((field) => field.test);

    if (isFormValid) {
      const submitButton = document.getElementById("submit-button");
      submitButton.textContent = "Submitting Your Request...";
      submitButton.disabled = true;
      loader.style.display = "block";
      // Using EmailJS to send the form data
      emailjs.sendForm("service_xirpfuk", "template_m8jmn8f", this).then(
        (response) => {
          window.location.href = "thank-you.html"; // Redirect to a thank you page on success
          console.log("SUCCESS!", response.status, response.text);
          alert("SUCCESS!");
        },
        (error) => {
          alert(
            "We apologize. There was an error. Please reload the page and try signing up again."
          );
          console.log("FAILED...", error);
          submitButton.textContent = "JOIN THE GUEST LIST";
          submitButton.disabled = false;
          loader.style.display = "none";
        }
      );
    }
  });
};
