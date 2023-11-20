import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseDate = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    props.onSaveExpenseData(expenseDate);
    props.onviewChangeHandler(false);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              name="enteredTitle"
              value={userInput.enteredTitle}
              onChange={userInputHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              name="enteredAmount"
              value={userInput.enteredAmount}
              min="0.01"
              step="0.01"
              onChange={userInputHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              name="enteredDate"
              value={userInput.enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={userInputHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button
              type="button"
              onClick={() => props.onviewChangeHandler(false)}
            >
              Cancle
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
