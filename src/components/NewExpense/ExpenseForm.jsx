import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onSaveExpense, setAddExpense }) {
  // dynamic todays date for input max value
  const today = new Date().toLocaleDateString("en-ca");

  // hold entered states
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  // setStates
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setUserInput((prev) => {
        return { ...prev, title: value };
      });
    } else if (identifier === "amount") {
      setUserInput((prev) => {
        return { ...prev, amount: value };
      });
    } else if (identifier === "date") {
      setUserInput((prev) => {
        return { ...prev, date: value };
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };

    // lifting datas up
    onSaveExpense(expenseData);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={userInput.title}
            onChange={(e) => inputChangeHandler("title", e.target.value)}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            value={userInput.amount}
            onChange={(e) => inputChangeHandler("amount", e.target.value)}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={today}
            id="date"
            value={userInput.date}
            onChange={(e) => inputChangeHandler("date", e.target.value)}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={() => setAddExpense(false)}>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
