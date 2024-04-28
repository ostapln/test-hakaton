 
import Logo from '../../assets/logo/діти_фт.png';
import { useState } from 'react';
import LeftButton from '../../components/button/LeftButton';
import RightButton from '../../components/button/RightButton';


import Logo2 from '../../assets/logo/воїн_фт.png';
import Logo3 from '../../assets/logo/відновлення_фт.png';
 

const NeedsHelps =() =>{

    const handleLeftClick = () => {
        const newVisibleItems = [...visibleItems].slice(1); // Отримайте наступні 3 елементи
        setVisibleItems(newVisibleItems);
      };
      
      const handleRightClick = () => {
        const newVisibleItems = [...visibleItems, visibleItems[0]]; // Перемістіть перший елемент в кінець
        setVisibleItems(newVisibleItems);
      };
      


    const [visibleItems, setVisibleItems] = useState([1, 2, 3]); // Початкові видимі елементи

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Усі елементи
    
return(
    <>
    
    
    <div className="bg-white">
  <div className="  max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h1 className="text-2xl font-bold text-left tracking-tight text-black-900 text-[35px]">Потребують допомоги</h1>
  
    <div className="relative flex  w-[300px] ">
  <input
    type="search"
    className="relativem-0 block flex-auto my-4  rounded border border-solid border-black-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base  font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-black-500 focus:z-[3] focus:border-black focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-black/10 dark:text-black dark:placeholder:text-black-200 dark:autofill:shadow-autofill dark:focus:border-black"
    placeholder="Пошук"
    aria-label="Пошук"
    id="exampleFormControlInput2"
    aria-describedby="button-addon2" />
  <span
    className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-black [&>svg]:h-5 [&>svg]:w-5"
    id="button-addon2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  </span>
</div>
 
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      <div className="group relative shadow-lg rounded-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white-200  lg:aspect-none group-hover:opacity-75  group-hover:bg-green-200  lg:h-77">
          <img src={Logo} alt="Logo"   />
      <p className="text-[14px] font-medium ">Допомога дітям-сиротам з дитбудинку</p>

      
<div className="  my-4   mx-2  bg-gray-900 rounded-full h-1.5 mb-4 dark:bg-gray-100">
  <div className="bg-[#1ff543]   h-1.5 rounded-full dark:bg-[#1ff543] w-[45%]"  ></div>
</div>
        <div className="mt-4 my-4 mx-2 flex justify-between">
          <div>

            <h3 className="text-sm font-medium  text-gray-900">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Зібрано
              </a>
            </h3>
            <p className="mt-1 text-sm font-medium  text-gray-900">20000 грн</p>
          </div> <div> <h3 className="text-sm font-medium text-gray-900">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Залишилось зібрати
              </a>
            </h3>
          <p className="mt-1 text-sm font-medium text-gray-900">150 000 грн</p>
        </div> </div>
      </div>
        </div>
        <div className="group relative shadow-lg rounded-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white-200  lg:aspect-none group-hover:opacity-75 lg:h-77">
          <img src={Logo3} alt="Logo"  />
      <p className="text-[14px] font-medium ">Допомога на відновлення майна після обстрілів</p>

      
<div className="  my-4   mx-2  bg-gray-900 rounded-full h-1.5 mb-4 dark:bg-gray-100">
  <div className="bg-[#1ff543]   h-1.5 rounded-full dark:bg-[#1ff543] w-[85%]"  ></div>
</div>
        <div className="mt-4 my-4 mx-2 flex justify-between">
          <div>

            <h3 className="text-sm font-medium  text-gray-900">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Зібрано
              </a>
            </h3>
            <p className="mt-1 text-sm font-medium  text-gray-900">20000 грн</p>
          </div> <div> <h3 className="text-sm font-medium text-gray-900">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Залишилось зібрати
              </a>
            </h3>
          <p className="mt-1 text-sm font-medium text-gray-900">150 000 грн</p>
        </div> </div>
      </div>
        </div>
        
        <div className="group relative shadow-lg rounded-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white-200  lg:aspect-none group-hover:opacity-75 lg:h-77">
          <img src={Logo2} alt="Logo"  />
      <p className="text-[14px] font-medium ">Допомога воїну Михайленко Олексію Івановичу</p>

      
<div className="  my-4   mx-2  bg-gray-900 rounded-full h-1.5 mb-4 dark:bg-gray-100">
  <div className="bg-[#1ff543]   h-1.5 rounded-full dark:bg-[#1ff543] w-[25%]"  ></div>
</div>
        <div className="mt-4 my-4 mx-2 flex justify-between">
          <div>

            <h3 className="text-sm font-medium  text-gray-900">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Зібрано
              </a>
            </h3>
            <p className="mt-1 text-sm font-medium  text-gray-900">20000 грн</p>
          </div> <div> <h3 className="text-sm font-medium text-gray-900">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Залишилось зібрати
              </a>
            </h3>
          <p className="mt-1 text-sm font-medium text-gray-900">150 000 грн</p>
        </div> </div>
      </div>
        </div>
     
    </div> 
       <h1 className="text-2xl my-4 font-bold  tracking-tight text-black-900 text-[45px]">  Якщо ти потребуєш допомоги скажи про це!</h1>
       <div className="flex flex-grow items-center justify-between py-4 px-20 md:px-6 2xl:px-11">
      
      <a href="/add" className="   h-[Hug (72px)px] block  w-full mx-[250px]   py-5     bg-[#1FF542] border-[2px] border-[solid] border-[#FEFCF4]   rounded-[4px] text-center text-sm font-semibold text-black   hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[25px] ">мені потрібна допомога</p></a>
      </div>
       
  </div>
</div>
 

 
    </>
);



};
 export default NeedsHelps;