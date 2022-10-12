import { useState } from "react";
import List from "../../components/List/List";
import { useRef } from 'react';
import './MainContainer.scss';

const MainContainer = () => {
    const [inputValue, setInputValue] = useState("");
    const [listItems, setListItems] = useState([]);
    const ref = useRef(null);

    //const listArray = [];
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    const handleAddButtonClick = (event) => {
        if (listItems.includes(inputValue)) {
            alert("Already Exists");
        } else {
            setListItems(current => [...current, inputValue]);
            ref.current.value = "Enter here ...";
        }

    }
    const handleDelete = (event) => {
        const id = event.target.id;
        const result = listItems.filter(item => item !== id);
        setListItems(result);
    }
    const setNull = (event) => {
        ref.current.value = "";
    }
    return (
        <div className="main">
            <div className="add-todo">
                <input type="text" default="Enter here ..." onChange={handleChange} ref={ref} onFocus={setNull} />
                <button id="add" onClick={handleAddButtonClick}>Add</button>
            </div>

            <List listItems={listItems} handleDelete={handleDelete} />
        </div>
    )
}
export default MainContainer;