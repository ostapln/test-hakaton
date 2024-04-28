 import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logo/home.png'; 
const ProfileWho = () => {
  
  return (
    <>
 

          <div className="  py-4 px-20 md:px-6 2xl:px-11">
              {/* channel photo */}
              <h1 className="text-[2rem] mr-[58rem]">Обліковий запис</h1>
              <div className="flex flex-grow items-center justify-flex-start py-4 px-20 md:px-6 2xl:px-11">

                  <a href="/profile" className="font-medium text-[20px] mx-4 text-black-600 underline dark:text-black-500 hover:no-underline">Налаштування</a>
                  <a href="/profile/history" className="font-medium text-[20px] text-black-600 underline dark:text-black-500 hover:no-underline">Історя моїх платежів</a>
                  <a href="#" className="font-medium text-[20px] mx-4 border-black  border-[2px] rounded-full px-5 text-black-600 underline dark:text-black-500 hover:no-underline">Допомогти</a>

              </div>
              <div className="relative -ml-[18%] bg-[#5BC0EB] w-[40rem] h-[40rem] rounded-full   dark:bg-primary  mr-3">
                  <div className="relative top-[70px] left-[47%]"> <img
                      className="rounded-full w-40 h-40"
                      src={Logo}
                      alt=""
                  />

                      {/* channel info */}
                      <div className="text">
                          {/* Channel title */}
                          <h1 className="text-black text-left font-bold my-8  text-3xl mb-2">Олександр Солти</h1>

                      </div>

                      <a    href='/profile/password' className=" w-[267px] block    mt-12 px-2 py-2 bg-black border-[2px] border-[#5BC0EB]    rounded-[4px] text-center text-sm font-semibold text-[#5BC0EB] shadow-sm hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Змінити пароль</a>

                      <p className="font-semibold mt-24  text-[24px] font-medium leading-[28.78px] text-left"  ><a href=""  className="font-medium text-[20px] mx-4 text-black-600 underline dark:text-black-500 hover:no-underline">Видалити профіль</a> </p>


                  </div>  
                  <div className="flex page mt-6 relative bottom-[31rem] left-[59rem] main-content">
                      <Outlet></Outlet>
                  </div>
              </div>


          </div>




    </>
  );
};

export { ProfileWho };
