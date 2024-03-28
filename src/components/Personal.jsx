import React, { useState } from "react";

const Personal = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const { firstname, lastname, age } = formData;

  return (
    <div>
      <div>
        <h3>Personal Information</h3>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Personal;
