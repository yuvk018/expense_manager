import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import IncomeItem from "../IncomeItem/IncomeItem";

function Transactions() {
  const {
    incomes,
    expenses,
    getIncomes,
    getExpenses,
    deleteIncome,
    deleteExpense,
  } = useGlobalContext();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch incomes and expenses on component mount
    getIncomes();
    getExpenses();
  }, []);

  useEffect(() => {
    // Combine incomes and expenses, and sort them by date
    const combinedTransactions = [...incomes, ...expenses].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setTransactions(combinedTransactions);
  }, [incomes, expenses]);

  const handleDelete = (id, type) => {
    if (type === "income") {
      deleteIncome(id);
    } else if (type === "expense") {
      deleteExpense(id);
    }

    // Update the transactions list by removing the deleted transaction
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction._id !== id)
    );
  };

  const handleUpdate = (id, updatedData) => {
    // Logic to update the transaction item, e.g., call an API to update the backend
    // After the update, you can also update the state to reflect the new data
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction._id === id
          ? { ...transaction, ...updatedData }
          : transaction
      )
    );
  };


  return (
    <div className="container mx-auto p-6 h-full border-white border-2 overflow-auto bg-[#4B5267]">
      <h1 className="text-3xl text-center mb-8 font-bold text-[#C0BCB5]">
        All Transactions
      </h1>
      {transactions.length > 0 ? (
        transactions.map((transaction) => {
          const { _id, title, amount, date, category, description, type } =
            transaction;
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
              titleColor={
                type === "expense" ? "text-red-500" : "text-green-500"
              }
              indicatorColor={
                type === "expense" ? "text-red-500" : "text-green-500"
              }
              deleteItem={() => handleDelete(_id, type)}
              updateItem={handleUpdate} // Pass the delete handler
            />
          );
        })
      ) : (
        <p className="text-center text-gray-500">No transactions found</p>
      )}
    </div>
  );
}

export default Transactions;
