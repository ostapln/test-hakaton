import { NavLink } from "react-router-dom";

import Logo from '../assets/logo/logo.svg';

const Header = ( ) => {
 

  return (
<header className="text-gray h-24 sticky top-0 z-[9998]  flex w-full  ">
      <div className="flex flex-grow items-center justify-between py-4 px-4 md:px-6 2xl:px-11">
      
        <div>
      <NavLink to="/">
            <div className="w-290">
              <img src={Logo} alt="Logo" />
            </div>
          </NavLink>
        
          </div>
          
          <div className="flex flex-grow items-center justify-between py-4 px-4 md:px-6 2xl:px-11">
      
        <a href="/profileHelp" className="font-semibold  text-[24px] font-medium leading-[28.78px] text-left">Прохання</a>
        </div>
        <div className="flex flex-grow items-center justify-between py-4 px-20 md:px-6 2xl:px-11">
      
        <a href="/reg" className=" w-258 block w-full mx-4 px-3 py-2 bg-[#5BC0EB] border-[2px] border-[solid] border-[#FEFCF4]   rounded-[4px] text-center text-sm font-semibold text-white shadow-sm hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Зареєструватись</a>
        <a href="/log" className=" w-258 block w-full mx-4 px-3 py-2 bg-[#FEFCF4] border-[2px] border-[solid] border-[#5BC0EB]   rounded-[4px] font-semibold  text-sm   leading-[100%] text-center text-[#5BC0EB]  shadow-sm hover:bg-[#5BC0EB] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Увійти</a>
           
        </div>
      </div>
    </header>
  );
};

export default Header;
