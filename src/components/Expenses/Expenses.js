import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
const Expenses = (props) => {

    const [filteredYear, setfilteredYear] = useState('2018');
    const updatefilteredYear = (year) => {
        console.log(year);
        setfilteredYear(year);
    }

    const filteredExpenses=props.items.filter(expense=>{

        return expense.date.getFullYear().toString()===filteredYear;
    });

    

    return (
        <li>
        <Card className="expenses">
            <ExpensesFilter sendYearParent={updatefilteredYear} />
            {/* The entire content in the opening and closing tags will be rendered when the card component is invoked i.e right here  */}
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses} />

        </Card>
        </li>
    )
}

export default Expenses;