import {useState} from 'react';
function Change(){
    
    const user = {
        name: "anshul",
        age: 21,
        city: "Indore",
        state: "MP"
    }

    const [data, setData] = useState(user);

    function changeData(newData, newValue){
        setData((previousData) => {
            return {...previousData, [newData]: newValue}
        });
    }

    return(
        // <div>
        //     <p>Name: {data.name}</p>
        //     <button onClick={() => {setData({...data, name: "Aviraj Bhaliya"})}}>Change Name</button>

        //     <p>Age: {data.age}</p>
        //     <button onClick={() => {setData({ ...data, age: 22 })}}>Change Age</button>

        //     <p>City: {data.city}</p>
        //     <button onClick={() => {setData({ ...data, city: "Kashi" })}}>Change City</button>

        //     <p>State: {data.state}</p>
        //     <button onClick={() => {setData({...data, state:"UP"})}}>Change State</button>
        // </div>
        <div>
            <p>Name: {data.name}</p>
            <button onClick={() => {changeData("name", "Aviraj")}}>Change Name</button>

            <p>Age: {data.age}</p>
            <button onClick={() => {changeData("age", 22)}}>Change Age</button>

            <p>City: {data.city}</p>
            <button onClick={() => {changeData("city", "Bhopal")}}>Change City</button>

            <p>State: {data.state}</p>
            <button onClick={() => {changeData("state", "UP")}}>Change State</button>
        </div>
    )

}

export default Change;