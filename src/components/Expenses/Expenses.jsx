import React, { useState } from "react";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart.jsx";

function Expenses({ expenses }) {
  // dynamic year
  const defaultYear = new Date().getFullYear().toString();

  // states
  const [filteredYear, setFilteredYear] = useState(defaultYear);

  const onFilterExpense = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((item) => item.date.getFullYear().toString() === filteredYear)
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterExpense={onFilterExpense}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
