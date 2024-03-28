import React from "react";

const Personal = () => {
  return (
    <div>
      <div>
        <h3>Personal Information</h3>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" placeholder="Enter your First name.." />
        <br />
        <br />
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" placeholder="Enter your Last name.." />
        <br />
        <br />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" placeholder="Enter your age.." />
        <br />
        <br />
        <button>Next</button>
      </div>
    </div>
  );
};

export default Personal;
