import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  const [addExpense, setAddExpense] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {addExpense ? (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          setAddExpense={setAddExpense}
        />
      ) : (
        <button onClick={() => setAddExpense(true)}>Add Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
