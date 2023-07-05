import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense=(props)=>{
    
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            /* this enteredExpenseData is an array present in ExpenseForm and we are copying it here*/
            id:Math.random().toString()
        }; 
        props.onAddExpense(expenseData);   
        console.log(expenseData);
        };
    
return (
    <div className="new-expense">

        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
);
};

export default NewExpense;