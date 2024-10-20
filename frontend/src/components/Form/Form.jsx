import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

function Form() {
  const { addIncome, error, setError } = useGlobalContext();
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
    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <form className="flex flex-col gap-5 w-[20rem]" onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Income Title"
          onChange={handleInput("title")}
          className="w-full p-2 border-2 rounded-md text-white bg-slate-600"
        />
      </div>
      <div className="input-control">
        <input
          value={amount}
          type="text"
          name="amount"
          placeholder="Income Amount"
          onChange={handleInput("amount")}
          className="w-full p-2 border-2 rounded-md  text-white bg-slate-600 "
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
          className="w-[20rem] p-2 border-2 rounded-md  text-white bg-slate-600"
        />
      </div>
      <div className="selects input-control flex justify-end text-slate-400">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
          className="p-2 border-2 rounded-md w-full  text-white bg-slate-600"
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">YouTube</option>
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
      <div className="submit-btn border-[1px] border-black rounded-xl w-[10rem] ml-[5rem] items-center bg-slate-600">
        <Button
          name="Add Income"
          icon={plus}
          bPad="py-2 px-4"
          bRad="rounded-full"
          // bg="bg-white"
          color="text-white"
        />
      </div>
    </form>
  );
}

export default Form;
