import React, { useState } from 'react'

function MyForm() {
    const [myFormData,setMyFormData] = useState({
        userName: "Anshul",
        age: 27,
        pass: "xyz123",
        date: "2025-06-24",
        email: "anshul@gmail.com",
        city: "katni"
    });

    function handleChangleFormData(event){
        setMyFormData((initialData)=>{
           return {...initialData, [event.target.name] : event.target.value}
        })
    }

    function formData(event){
        event.preventDefault();
        console.log("user name value : ", myFormData);
    }
  return (
    <div>
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
