import React from "react";

const ToDoLists = (props) => {

    const Update = () => {
        
        console.log("Update");

        // return (
        //     <>
        //     <input type="text" placeholder="Update a Items"
        //      value={inputList}
        //      onChange={itemEvent} 

        //     />
        //     <button  >Update</button>
        //     </>
        // )
    }

    return (
    <>
        <div className="todo_style">
        <i 
            className="fas fa-times" 
            onClick={() => {
                props.onSelect(props.id);
            }}></i>
         <li> {props.text} </li>
         {/* <i className="fa-solid fa-pen-to-square"></i> */}
         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" class="svg-inline--fa fa-pen-to-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={Update}><path fill="currentColor" d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z"></path></svg>
        </div>
    </>
    )
};

export default ToDoLists;