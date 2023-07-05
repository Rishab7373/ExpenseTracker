 import "./ExpenseItem.css"
 import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import { useState } from "react";
 
 const ExpenseItem=(props)=>{
    
    // const [title ,setTitle]=useState(props.title);

    // const clickHandler=()=>{
    //     setTitle('RADHE💗SHYAM');
    //     console.log('clicked');
        
    // }
    console.log(props.title);

    return (
    <Card className="expense-item">
        
        <ExpenseDate date={props.date}/>  
        
        
        
        <div className="{expense-item__description}">
            <h2>{props.title}</h2> 
        </div>
        
        <div>
            <div className="expense-item__price">${props.amount}</div>
            {/* <button onClick={clickHandler}>CLick</button> */}
        </div>
    </Card>
 );
 }

 export default ExpenseItem;