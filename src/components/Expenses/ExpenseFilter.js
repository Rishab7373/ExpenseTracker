
import React,{useState} from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
   const [yearValue,setYearValue]=useState('2023');
   const onChangeHandler=(event)=>{
    // console.dir(event.target.value);
    props.sendYearParent(event.target.value);
   }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <h2>Filter by year</h2>
                <select onChange={onChangeHandler}>
                    <option value='---'>---</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>

                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;