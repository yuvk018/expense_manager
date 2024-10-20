import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

function ExpenseForm() {
  const { addExpense, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <form className="flex flex-col gap-5 w-[20rem] " onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Expense Title"
          onChange={handleInput("title")}
          className="w-full p-2 border-2 rounded-md  text-white bg-slate-600"
        />
      </div>
      <div className="input-control">
        <input
          value={amount}
          type="text"
          name="amount"
          placeholder="Expense Amount"
          onChange={handleInput("amount")}
          className="w-full p-2 border-2 rounded-md  text-white bg-slate-600"
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date });
          }}
          className=" p-2 border-2 rounded-md w-[20rem] text-white bg-slate-600"
        />
      </div>
      <div className="selects input-control flex justify-end text-slate-400">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
          className="w-full p-2 border-2 rounded-md  text-white bg-slate-600"
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="education">Education</option>
          <option value="groceries">Groceries</option>
          <option value="health">Health</option>
          <option value="subscriptions">Subscriptions</option>
          <option value="takeaways">Takeaways</option>
          <option value="clothing">Clothing</option>
          <option value="travelling">Travelling</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
          className="w-full p-2 border-2 rounded-md  text-white bg-slate-600"
        ></textarea>
      </div>
      <div className="submit-btn bg-slate-600 rounded-xl w-[10rem] border-black border-[1px] ml-[5rem]">
        <Button
          name="Add Expense"
          icon={plus}
          bPad="py-2 px-4"
          bRad="rounded-full"
          color="text-white"
        />
      </div>
    </form>
  );
}

export default ExpenseForm;
