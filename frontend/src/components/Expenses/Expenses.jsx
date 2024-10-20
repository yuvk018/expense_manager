import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import ExpenseForm from "./ExpenseForm";
import IncomeItem from "../IncomeItem/IncomeItem";

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpenses, updateExpense } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="overflow-hidden p-6 bg-[#4B5267] border-2 border-white h-full">
      <div className="w-full px-4 py-2 ">
        <h1 className="text-2xl font-bold text-[#C0BCB5]">Expenses</h1>
        <h2 className="my-4 p-4 border-2 border-white rounded-xl flex justify-center items-center text-xl bg-[#4B5267] text-[#C0BCB5]">
          Total Expense:{" "}
          <span className="ml-2 text-3xl font-extrabold text-red-500">
            ₹{totalExpenses()}
          </span>
        </h2>
        <div className="flex space-x-10">
          <ExpenseForm />
          <div className="expenses flex-1 h-[500px] overflow-y-auto">
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description, type } =
                expense;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="bg-green-500"
                  deleteItem={deleteExpense}
                  updateItem={updateExpense} // Pass the update function here
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
