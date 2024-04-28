import Banner from '../../assets/logo/home.png';
const PostNeeds = () => {


    return (
        <>
            <div className="relative z-10" role="dialog" aria-modal="true">

                <div className="flex flex-block min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className="  w-[1296px] h-[634px]  rounded-[12px]">
                        <img src={Banner} alt="Logo" />
                        <div className="absolute w-[828px] h-[106px]  top-[30rem] mx-[3%]  "> <p className="  font-semibold text-[40px] text-left leading-[53px] text-[#FEFCF4]">
                            Допомога з продуктами на місяць
                        </p>
                        </div>
                    </div></div>

                <div className="relation h-20 ">
                   <div className="ml-[3%] mr-[33%]"> <div className="  my-4   mx-2  bg-gray-900 rounded-full h-1.5 mb-4 dark:bg-gray-100">
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
                <div className="flex flex-grow w-[30rem] left-[65%] relative bottom-36 items-center justify-end py-4 px-20 md:px-6 2xl:px-11">

                    <a href="/edit" className="  h-[Hug (72px)px] block  w-full my-12 px-[25px]   py-5 bg-[#1FF542] border-[2px] border-[solid] border-[#FEFCF4]   rounded-[4px] text-center text-sm font-semibold text-black   hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[25px] "> допомога</p></a>
                </div>
            </div>
            
            <div className="mx-10  grid grid-cols-2 md:grid-cols-2 gap-4">
<div>
<h1 className="text-[2rem] text-left my-10"> Про потребу</h1>
<p className="text-left my-5">Lorem ipsum dolor sit amet consectetur. Consectetur dui donec enim ultrices egestas id. Cras praesent mi faucibus ultricies diam. In augue fermentum ac gravida justo in vitae volutpat. Volutpat viverra ultrices orci porta. Amet lorem a auctor netus leo tortor nunc convallis. At ornare bibendum tortor urna sit nec. Amet duis elit id donec quis augue porta varius ornare. Nibh bibendum pellentesque eu nisi est sed semper. Metus nunc lacus enim gravida risus justo purus elementum pharetra.</p>
       <p  className="text-left my-5">Velit sit amet porttitor tellus congue eu mauris tortor. Vitae congue mollis magna in sit ipsum non nunc. Sagittis sapien arcu velit tincidunt. Nunc at augue eu tempor quisque sociis. Facilisi neque nibh velit laoreet libero facilisi. Pellentesque eu id quam vitae tempor et nullam arcu. Nisl duis eget posuere interdum at pellentesque eget. Iaculis faucibus id quisque donec.</p>      

</div>

<div className="border-[#1ff534] border-2 rounded-md">
<h1 className="text-[2rem] text-left my-10 mx-5"> Підтримали</h1>
<ul role="list" className="divide-y divide-gray-100 w-[90%] mx-12">
  <li className="flex justify-between gap-x-6 py-2">
    <div className="flex min-w-0 gap-x-4">
    <div className="relative   -ml-[18%] bg-[#5BC0EB] w-8 h-8 rounded-full   dark:bg-primary  mr-3" />
                          <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Анонімний користувач</p>
                          </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">+200$</p>
       </div>
  </li>
  <li className="flex justify-between gap-x-6 py-2">
    <div className="flex min-w-0 gap-x-4">
    <div className="relative   -ml-[18%] bg-[#5BC0EB] w-8 h-8 rounded-full   dark:bg-primary  mr-3" />
                          <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">Анонімний користувач</p>
        
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">+700$</p>
           </div>
  </li>
  <li className="flex justify-between gap-x-6 py-2">
    <div className="flex min-w-0 gap-x-4">
    <div className="relative  -ml-[18%] bg-[#5BC0EB] w-8 h-8 rounded-full   dark:bg-primary  mr-3" />
                          <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Анонімний користувач</p>  </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">+200$</p>
      </div>
  </li>
  <li className="flex justify-between gap-x-6 py-2">
    <div className="flex min-w-0 gap-x-4">
    <div className="relative   -ml-[18%] bg-[#5BC0EB] w-8 h-8 rounded-full   dark:bg-primary  mr-3" />
                          <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">Анонімний користувач</p>   </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">+600$</p>
         </div>
  </li>
 
</ul>
<h1>Усі донори </h1>


</div>


         </div>
            
            </div>
        </>
    );
};

export default PostNeeds;
