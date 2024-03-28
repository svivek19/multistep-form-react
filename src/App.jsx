import React, { useState } from "react";

const App = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    number: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 0) {
      if (formData.firstname && formData.lastname && formData.age) {
        setStep(step + 1);
      } else {
        alert("Please fill in all fields.");
      }
    } else {
      setSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  const { firstname, lastname, age, number, email } = formData;

  return (
    <div>
      {!submitted ? (
        <div>
          {step === 0 && (
            <>
              <h3>Personal Information</h3>

              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your First name.."
                value={firstname}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your Last name.."
                value={lastname}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age.."
                value={age}
                onChange={handleChange}
              />
              <br />
              <br />
            </>
          )}
          {step === 1 && (
            <>
              <h3>Contact Information</h3>
              <label htmlFor="no">Mobile Number</label>
              <input
                type="number"
                name="number"
                placeholder="Enter your number.."
                value={number}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email.."
                value={email}
                onChange={handleChange}
              />
              <br />
              <br />
            </>
          )}

          <button onClick={handleSubmit}>
            {step === 0 ? "Next" : "Submit"}
          </button>
        </div>
      ) : (
        <>
          {submitted && (
            <div>
              <h3>Submitted Details:</h3>
              <p>First Name: {firstname}</p>
              <p>Last Name: {lastname}</p>
              <p>Age: {age}</p>
              <p>Mobile Number: {number}</p>
              <p>Email: {email}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
