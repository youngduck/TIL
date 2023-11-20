import React,{useState} from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense=(props)=>{

    const [view,setView]=useState(false)

    const viewChangeHandler=(state)=>{
        setView(state)
    }
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

     
    return(
        <>
        <div className="new-expense">
            {!view&&<button onClick={()=>viewChangeHandler(true)}>Add New Expense</button>}
            {view&&<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onviewChangeHandler={viewChangeHandler}/>}
        </div>
        </>
    )
}

export default NewExpense