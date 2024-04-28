 import Banner from '../../assets/logo/home.png';
const HomePage = () => {
 

  return (
    <>
    <div className="relative z-10" role="dialog" aria-modal="true">
 
        <div className="flex flex-block min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
        <div className="  w-[1296px] h-[634px]  rounded-[12px]">
          <img src={Banner} alt="Logo" />
           <div className="absolute w-[828px] h-[106px] left-[120px] top-[150px]"> <p className="  font-semibold text-[40px] text-left leading-[53px] text-[#FEFCF4]">
              З Helmee ти можеш стати донором або подати заявку на допомогу
            </p>
            </div>
            <div className="absolute w-[828px] h-[106px] left-[190px] top-[360px]">

            <div className="flex flex-grow items-center justify-between py-4 px-20 md:px-6 2xl:px-11">
      
      <a href="/post" className="  h-[Hug (72px)px] block  w-full my-12 px-[25px]   py-5 bg-[#1FF542] border-[2px] border-[solid] border-[#FEFCF4]   rounded-[4px] text-center text-sm font-semibold text-black   hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[25px] ">мені потрібна допомога</p></a>
    <a href="/needs" className="  h-[Hug (72px)px] block  w-full mx-4  py-5 bg-[#5BC0EB] border-[2px] border-[solid] border-[#FEFCF4]   rounded-[4px] text-center text-sm font-semibold  text-black-900   hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB] ocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[25px] ">я хочу допомогти</p></a>
        </div>
            </div>

          </div>


        </div>
      </div>

    </>
  );
};

export default HomePage;
