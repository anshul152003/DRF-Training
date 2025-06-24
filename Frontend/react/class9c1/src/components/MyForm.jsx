import React, { useState } from 'react'

function MyForm() {
    const [pragRamming_Lang, setProgrammingLanguage] = useState([])
    const [myFormData,setMyFormData] = useState({
        userName: "Anshul",
        age: 27,
        pass: "xyz123",
        date: "2025-06-24",
        email: "anshul@gmail.com",
        city: "katni",
        gender: "",
    });

    function handleChangleFormData(event){
        setMyFormData((initialData)=>{
           return {...initialData, [event.target.name] : event.target.value}
        })
    }

    function formData(event){
        event.preventDefault();
        console.log("user name value : ", myFormData);
        console.log("Prog Array=> ", pragRamming_Lang)
    }

    function setCheckBoxValue(event) {
        console.log("our targetting tag",event.target.checked)
        if (event.target.checked) {
           setProgrammingLanguage([...pragRamming_Lang, event.target.value])
        }else{
            let newskill= pragRamming_Lang.filter((item)=>{
                return (item!==event.target.value)
            })
            setProgrammingLanguage(newskill);
        }
    }

  return (
    <div>
      <h1>Best Form Approach</h1>
      <form onSubmit={formData}>
        <div>
            <label htmlFor="uName">User Name :</label>
            <input type='text' id='uName' name='userName' placeholder='Enter User Name' value={myFormData.userName} onChange={(event) => {
                handleChangleFormData(event)
            }} />
        </div>
        <div>
            <label htmlFor="uAge">User Age :</label>
            <input type='text' id='uAge' name='age' placeholder='Enter User Age' value={myFormData.age} onChange={(event) => {
                handleChangleFormData(event)
            }} />
        </div>
        <div>
            <label htmlFor="uPass">User Password :</label>
            <input type='text' id='uPass' name='pass' placeholder='Enter User Password' value={myFormData.pass} onChange={(event) => {
                handleChangleFormData(event)
            }} />
        </div>
        <div>
            <label htmlFor="uMail">User Email :</label>
            <input type='text' id='uMail' name='email' placeholder='Enter User Mail' value={myFormData.email} onChange={(event) => {
                handleChangleFormData(event)
            }} />
        </div>
        <div>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" placeholder="Enter User Name" value={myFormData?.date} onChange={(event) => {
                handleChangleFormData(event)
             }} />
        </div>

        <div>
            <span>Gender: &nbsp;</span>
            <label htmlFor="genc">Male</label>
            <input type="radio" id="genc" name="gender" value="male" onChange={(event) => {
                handleChangleFormData(event)
                }} />
            <label htmlFor="genc1">FeMale</label>
            <input type="radio" id="genc1" name="gender" value="female" onChange={(event) => {
                handleChangleFormData(event)
                }} />
            <label htmlFor="genc2">Others</label>
            <input type="radio" id="genc2" name="gender" value="other" onChange={(event) => {
                handleChangleFormData(event)
                }} />
        </div>
        <div>
            <span>User may know PG: &nbsp;</span>
            <label htmlFor="prog1">C++</label>
            <input type="checkbox" id="prog1" name="pragRamming_Lang" value="C++" onChange={(event) => {
                setCheckBoxValue(event)
                }} />
            <label htmlFor="prog2">Java</label>
            <input type="checkbox" id="prog2" name="pragRamming_Lang" value="Java" onChange={(event) => {
                setCheckBoxValue(event)
                }} />
            <label htmlFor="prog3">Python</label>
            <input type="checkbox" id="prog3" name="pragRamming_Lang" value="Python" onChange={(event) => {
                setCheckBoxValue(event)
            }} />
        </div>
        <div>
            <p>Select city:</p>
            <select name="city" onChange={(event) => {
                handleChangleFormData(event)
            }}>
                <option value="Katni">Katni</option>
                <option value="Jabalpur">Jabalpur</option>
                <option value="Indore">Indore</option>
            </select>
        </div>
        <div>
            <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default MyForm
