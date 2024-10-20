import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

function Income() {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome ,updateIncome} =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="overflow-auto p-6 bg-[#4B5267] border-2 border-white h-full">
      <div className="w-full px-4 py-2">
        <h1 className="text-2xl font-bold text-[#C0BCB5]">Incomes</h1>
        <h2 className="flex justify-center items-center bg-[#4B5267] border-2 border-white rounded-xl p-4 my-4 text-xl gap-2 text-[#C0BCB5]">
          Total Income:{" "}
          <span className="text-green-500 text-3xl font-extrabold">
            ₹{totalIncome()}
          </span>
        </h2>
        <div className="income-content flex gap-8">
          <Form />
          <div className="incomes flex-1">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
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
                  deleteItem={deleteIncome}
                  updateItem={updateIncome}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Income;
