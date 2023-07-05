import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [visibility, setVisibility] = useState(false);
    //Why we pass empty string in Usestate? bcz By default, whenever you listen to the change event
    //for an input, if you read the value of that input element,
    //it'll always be a string.
    // Even if it stores a number
    // it will be a number as a string and the same for the date.

    const titleChanegHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountChanegHandler = (event) => {
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        }
        props.onSaveExpenseData(expenseData);
        setTitle('');//rernders the whole code
        setAmount('');//rernders the whole code
        setDate('');//rernders the whole code
    }
    const cancelHandler = () => {
        setVisibility(false);
    }
    const showHandler = () => {
        setVisibility(true);
    }
    if (visibility === false) {
        return (
            <div >
                <button onClick={showHandler}>AddExpense</button>
            </div>
        );
    }
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: ''
    //     , enteredAmount: ''
    //     , enteredDate: ''
    // })
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle: event.target.value, };
    //     });

    // }
    // const amountChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredAmount: event.target.value, };
    //     });
    //     setUserInput({ ...userInput, enteredTitle: '' }); 
    // }
    // const dateChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredDate: event.target.value, };
    //     });
    //     setUserInput({ ...userInput, enteredTitle: '' }); 
    // }

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     const expenseData = {
    //         title: userInput.enteredTitle,
    //         amount: userInput.enteredAmount,
    //         date: new Date(userInput.enteredDate),
    //     }
    //     console.log(expenseData);
    //     setUserInput({...userInput,enteredTitle:''});   
    // }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={title} onChange={titleChanegHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min='1' step='1' value={amount} onChange={amountChanegHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min='2018-01-01' max='2024-01-01' value={date} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={cancelHandler}>CANCEL</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>

    );

}

export default ExpenseForm;