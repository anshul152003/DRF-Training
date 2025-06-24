import React, { useState } from 'react'
import './NavBar.css'

function Navbar({ getValueFromNavbar, setData, data, copydata }) {
    const [searchItem, setSearchItem] = useState();
    function manegeSearchItem(event) {
        let ans=event.target.value.toLowerCase()
        let newItems = data.filter((data) => {
            return data.toLowerCase().includes(ans)
        })
        console.log("item which is search", newItems)
        setData(newItems)
       if(event.target.value===""){
        setData(copydata)
         
       }
    }

    // function storeItem(event) {
    //     event.preventDefault()
    //     getValueFromNavbar(searchItem)
    // }

    return (
       <div className="navbar">
            <input
                type="search"
                className="search-input"
                placeholder="Search items..."
                value={searchItem}
                onChange={manegeSearchItem}
            />
        </div>
    )
}

export default Navbar