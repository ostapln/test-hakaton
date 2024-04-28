 const EditNeeds = () => {

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
  <div className="w-full px-[5%]">
        <h1 className="text-[2rem] my-5 text-left ">Створити прохання</h1>
        <hr className="w-full my-0  border-t-4 rounded  " />
        <form action="#" method="POST" className="  mt-[3rem]   ">
          <div className="grid grid-cols-1 gap-x-24 gap-y-20 sm:grid-cols-2">

            <div className="sm:col-span-2">
              <label htmlFor="name" className="text-left block text-sm font-semibold leading-6 text-gray-900">Назва прохання *</label>
              <div className="mt-2.5">
                <input type="name" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="text" className="text-left block text-sm font-semibold leading-6 text-gray-900">Мета (сума, яку ви хочете зібрати) *</label>
              <div className="mt-2.5">
                <input type="text" name="text" id="text" autoComplete="text" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-left block text-sm font-semibold leading-6 text-gray-900">Опис прохання</label>
              <div className="mt-2.5">
                <textarea name="message" id="message" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>

          </div>

        </form><div className="absolute  container  -ml-20  my-10  bg-[#5BC0EB] w-[25rem] h-[25rem] rounded-full   dark:bg-primary   "></div>
           <div className="relative  my-20">
                <h1 className="text-[2rem] my-5 text-left ">Контактна інформація</h1>
        <hr className="w-full my-0  border-t-4 rounded  " />
        <form action="#" method="POST" className="  mt-[3rem] mb-[10rem]   ">
          <div className="grid grid-cols-1 gap-x-24 gap-y-20 sm:grid-cols-2">


            <div className="sm:col-span-2">
              <label htmlFor="email" className="text-left block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div className="mt-2.5">
                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="text-left block text-sm font-semibold leading-6 text-gray-900">Номер телефону або нік в телеграмі *</label>
              <div className="mt-2.5">
                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

          </div>

        </form>    </div>
      </div>

<div>
<div className="flex flex-grow items-center justify-end  ">

<a href="#" className="  block  w-40 mx-4   border-[2px] border-[solid] border-black   rounded-[4px] text-center text-sm font-semibold text-black   hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[13px] ">Скасувати</p></a>
<a href="#" className="  block  w-40  bg-[#5ff543] border-[2px] border-[solid] border-black   rounded-[4px] text-center text-sm font-semibold  text-black-900   hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB] ocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><p className="text-[13px] ">Зберегти</p></a>
</div>
<div className="col-span-full my-20">
          <label htmlFor="cover-photo" className="text-left text-[200%] block text-sm font-medium leading-6 text-gray-900">Завантажте фото *</label>
          <div className="mt-20 flex justify-center  rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <svg className="  h-48 w-40  text-gray-300 inline" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div className="mt-4  flex text-sm leading-6 text-gray-600">
                <label htmlFor="file-upload" className="bg-blue-600 flex flex-grow items-center justify-end  relative mx-10 cursor-pointer rounded-full   font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <p className="text-white  text-center items-center mx-4   ">Вибрати фото </p>
                  <p className="text-white text-[2rem] text-center  my-1 pr-2 mb-2">+</p>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                </label>
                
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>


          <div className="absolute  container  ml-[30rem]  my-10  bg-[#5BC0EB] w-[15rem] h-[15rem] rounded-full   dark:bg-primary   "></div>
           
          <div className="relative  my-20">
                <h1 className="text-[2rem] my-5 text-left ">Інформація про збір</h1>
        <hr className="w-full my-0  border-t-4 rounded  " />
        <form action="#" method="POST" className="  mt-[3rem] mb-[10rem]   ">
          <div className="grid grid-cols-1 gap-x-24 gap-y-20 sm:grid-cols-2">


            <div className="sm:col-span-2">
              <label htmlFor="email" className="text-left block text-sm font-semibold leading-6 text-gray-900">Вже зібрано (коштів)</label>
              <div className="mt-2.5">
                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="text-left block text-sm font-semibold leading-6 text-gray-900"> Посилання на банку для збору *</label>
              <div className="mt-2.5">
                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

          </div>

        </form>    </div>


        </div>
    
 
</div>



      </div>






    </>
  );



}; export default EditNeeds;