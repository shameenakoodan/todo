import { useState } from "react";
import List from "../../components/List/List";
import { useRef } from 'react';

const MainContainer = ()=>{
    const [inputValue,setInputValue] = useState("");
    const [listItems,setListItems] = useState([]);
    const ref = useRef(null);

    //const listArray = [];
    const handleChange = (event) =>{
        setInputValue(event.target.value);
        console.log(inputValue);
    }
    const handleAddButtonClick = (event)=>{
        setListItems(current => [...current, inputValue]);
        ref.current.value="Enter here ...";
        console.log(listItems);
    }
    const handleDelete = (event)=>{
        const id = event.target.id;
        const result = listItems.filter(item=>item != id);
        setListItems(result);
    }
    const setNull = (event)=>{
        ref.current.value="";
    }
    return (
        <>
            <input type="text" default = "Enter here ..." onChange={handleChange} ref={ref} onFocus={setNull}/>
            <button id = "+" onClick={handleAddButtonClick}>+</button>
            <List listItems ={listItems} handleDelete={handleDelete}/>
        </>
    )
}
export default MainContainer;