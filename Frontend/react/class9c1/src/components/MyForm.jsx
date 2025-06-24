import React, { useState } from 'react';
import './MyForm.css';

function MyForm() {
  const [pragRamming_Lang, setProgrammingLanguage] = useState([]);
  const [myFormData, setMyFormData] = useState({
    userName: "Anshul",
    age: 27,
    pass: "xyz123",
    date: "2025-06-24",
    email: "anshul@gmail.com",
    city: "katni",
    gender: "",
  });

  function handleChangleFormData(event) {
    setMyFormData((initialData) => {
      return { ...initialData, [event.target.name]: event.target.value };
    });
  }

  function formData(event) {
    event.preventDefault();
    console.log("user name value : ", myFormData);
    console.log("Prog Array => ", pragRamming_Lang);
  }

  function setCheckBoxValue(event) {
    if (event.target.checked) {
      setProgrammingLanguage([...pragRamming_Lang, event.target.value]);
    } else {
      let newskill = pragRamming_Lang.filter((item) => item !== event.target.value);
      setProgrammingLanguage(newskill);
    }
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Best Form Approach</h1>
      <form onSubmit={formData} className="my-form">
        <div className="form-group">
          <label htmlFor="uName">User Name:</label>
          <input type="text" id="uName" name="userName" placeholder="Enter User Name" value={myFormData.userName} onChange={handleChangleFormData} />
        </div>

        <div className="form-group">
          <label htmlFor="uAge">User Age:</label>
          <input type="text" id="uAge" name="age" placeholder="Enter User Age" value={myFormData.age} onChange={handleChangleFormData} />
        </div>

        <div className="form-group">
          <label htmlFor="uPass">User Password:</label>
          <input type="text" id="uPass" name="pass" placeholder="Enter User Password" value={myFormData.pass} onChange={handleChangleFormData} />
        </div>

        <div className="form-group">
          <label htmlFor="uMail">User Email:</label>
          <input type="text" id="uMail" name="email" placeholder="Enter User Mail" value={myFormData.email} onChange={handleChangleFormData} />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={myFormData.date} onChange={handleChangleFormData} />
        </div>

        <div className="form-group">
          <span>Gender:</span>
          <div className="radio-group">
            <label><input type="radio" name="gender" value="male" onChange={handleChangleFormData} /> Male</label>
            <label><input type="radio" name="gender" value="female" onChange={handleChangleFormData} /> Female</label>
            <label><input type="radio" name="gender" value="other" onChange={handleChangleFormData} /> Other</label>
          </div>
        </div>

        <div className="form-group">
          <span>Programming Languages:</span>
          <div className="checkbox-group">
            <label><input type="checkbox" name="pragRamming_Lang" value="C++" onChange={setCheckBoxValue} /> C++</label>
            <label><input type="checkbox" name="pragRamming_Lang" value="Java" onChange={setCheckBoxValue} /> Java</label>
            <label><input type="checkbox" name="pragRamming_Lang" value="Python" onChange={setCheckBoxValue} /> Python</label>
          </div>
        </div>

        <div className="form-group">
          <label>Select City:</label>
          <select name="city" value={myFormData.city} onChange={handleChangleFormData}>
            <option value="Katni">Katni</option>
            <option value="Jabalpur">Jabalpur</option>
            <option value="Indore">Indore</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
