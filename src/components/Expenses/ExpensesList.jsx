import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
  return (
    <ul className="expenses-list">
      {expenses.length > 0 ? (
        expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      ) : (
        <div className="expenses-list__fallback">Please add your expenses!</div>
      )}
    </ul>
  );
}

export default ExpensesList;
