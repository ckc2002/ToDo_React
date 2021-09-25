import React from "react";
import { useState } from "react/cjs/react.development";
import ToDoLists from "./ToDoLists";

const ToDo = () => {

    const [inputList,setInputList] = useState("")
    const [items,setItem] = useState([])

    const itemEvent = (event) => {
        setInputList(event.target.value)
    }

    const listOfItems = () => {
        setItem((oldItems) => {
            return [...oldItems,inputList];
        })
        setInputList("")
    }

    const deleteItem = (id) => {
        console.log("Delete");
        setItem((oldItems) => {
            return oldItems.filter((arrElem,index) => {
                    return index !== id;
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>What's is your Today Plan 🙂</h1>
                    <br />
                    <input type="text" placeholder="Add a Items"
                     value={inputList}
                     onChange={itemEvent} />
                    <button onClick={listOfItems} > Add ToDo </button>

                    <ol>
                        {/* <li> {inputList}</li> */}
                        {items.map((itemval,index) => {
                            return <ToDoLists 
                            key={index}
                            id={index}
                            text= {itemval} 
                            onSelect = {deleteItem}    
                            />
                        })}
                    </ol>
                </div> 
            </div>
        </>
    )
}

export default ToDo;