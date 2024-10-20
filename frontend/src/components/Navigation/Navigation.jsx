import React from "react";
import avatar from "../../img/avatar.png";
import { signout } from "../../utils/Icons";
import { menuItems } from "../../utils/menuItems";
import { useGlobalContext } from "../../context/globalContext";

function Navigation({ active, setActive }) {
  const { totalBalance } = useGlobalContext();
  return (
    <nav className="p-8 w-[300px] h-full bg-[#4B5267] border-4 border-white backdrop-blur-md rounded-2xl flex flex-col justify-between gap-8">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt=""
          className="w-[4rem] h-[4rem] rounded-full object-cover bg-slate-600 border-2 border-white p-1 shadow-md"
        />
        <div className="text">
          <h2 className="text-white text-2xl">Yuvraj Mehta</h2>
          <p className="text-white">₹ {totalBalance()}</p>
        </div>
      </div>

      <ul className="flex-1 flex flex-col">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`grid grid-cols-[40px_auto] items-center mb-2.5 font-medium cursor-pointer pl-4 relative transition-all duration-300 ${
                active === item.id
                  ? 'text-white before:content-[""] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-white before:rounded-r-lg'
                  : "text-white"
              }`}
            >
              <span
                className={`text-xl transition-all duration-300 ${
                  active === item.id ? "text-white" : "text-white"
                }`}
              >
                {item.icon}
              </span>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
