import React from "react";
import "./ExpensesFilter.css";

function ExpensesFilter({ selected, onFilterExpense }) {
  // getting dynamic years with a function
  const newYears = () => {
    const year = new Date().getFullYear();
    let newYears = [];
    for (let i = 2018; i < year; i++) {
      newYears.push(i + 1);
    }
    return newYears;
  };

  const handleChange = (e) => {
    onFilterExpense(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={selected ? selected : "2019"}
          onChange={handleChange}
        >
          {newYears().map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
