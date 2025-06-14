import React, { useState } from 'react';
import Change from './Change';

function Form() {

    let name = "Anshul Gangrade";
    let age = 20;
    let qualification = "B.Tech in Computer Science";
    let cgpa = 8.4;

    const [stateName, setStateName] = useState(name);
    const [stateAge, setStateAge] = useState(age);
    const [stateQuali, setStateQuali] = useState(qualification);
    const [stateCgpa, setStateCgpa] = useState(cgpa);

    return (
        <div>
            <p>Sir Name: {stateName} </p>
            <button onClick = {() => { setStateName("Aviraj Bhaliya")}}> Change Name </button>

            <p>Age: { stateAge } </p>
            <button onClick = {() => { setStateAge("22") }}> Change Age </button>

            <p>Qualification: {stateQuali}</p>
            <button onClick = {() => { setStateQuali("Btech in CyberSecurity") }}> Change Qualification </button>

            <p>CGPA: { stateCgpa } </p>
            <button onClick = {() => { setStateCgpa("9.0") }}> Change CGPA </button>
        </div>
    )
}

export default Form;