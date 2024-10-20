import React, { useState} from "react";


import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Income/Income";
import Expenses from "./components/Expenses/Expenses";
import Transactions from "./components/Transactions/Transactions";

function App() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transactions />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

 

  return (
    <div className="h-screen bg-cover relative">
      <div className="flex h-full bg-[#4B5267]  p-4 space-x-5 p-10">
        <Navigation active={active} setActive={setActive} />
        <main className="flex-1   backdrop-blur-xl  overflow-hidden">
          {displayData()}
        </main>
      </div>
    </div>
  );
}

export default App;
