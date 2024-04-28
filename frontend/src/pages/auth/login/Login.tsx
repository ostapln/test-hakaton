
import Banner from '../../../assets/logo/reg.png';
import Google from '../../../assets/logo/devicon_google.svg';
import FaceBook from  '../../../assets/logo/logos_facebook.svg';
import { ILoginRequest, ILoginResult } from './types';
import { IAuthUser } from '../../../store/reducers/auth/types';
import { useFormik } from 'formik';
import { storeToken } from '../../../services/tokenService';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import http_api from '../../../services/http_api';
import { useNavigate } from 'react-router-dom';
const Login =()=>{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigator = useNavigate();
  
    const request: ILoginRequest = {
      email: '',
      password: '',
    };
  
   
   
    const {   isAuth } = useSelector((store: any) => store.auth as IAuthUser);
    const onFormSubmit = async (values: ILoginRequest) => {
      try {
        setIsLoading(() => true);
        const result = (
          await http_api.post<ILoginResult>('http://198.46.226.156/api/v1/users/signin/', values)
        ).data;
      
       
       
        storeToken(result.token);
        
        navigator('/');
      } catch (error) {
        // handleError(error);
      } finally {
        setIsLoading(() => false);
      }
    
    };
  
    const formik = useFormik({
      initialValues: request,
 
      onSubmit: onFormSubmit,
    });
    const { values, errors, handleSubmit, handleChange } = formik;
return(

<>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">

            <div>
                <div className="   w-[738px] h-[810px] left-0 top-0  ">
                    <img src={Banner} alt="Logo" />
                </div>
            </div>
            <div className="  w-full rounded-[40px] bg-[white]">

<h1 className="mt-[180px] text-black text-[33px]">Вхід</h1>

            <form className="my-5 max-w-md mx-auto">
         
  <div className="relative z-0 w-full mb-5 group">
      <input onChange={ handleChange}  type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
  <input onChange={ handleChange}  type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">  Пароль</label> </div>
  
  
   
  <button type="submit" className=" w-[301px] block    ml-24 px-2 py-2 bg-[#5BC0EB] border-[2px] border-[solid] border-[#FEFCF4]   rounded-[4px] text-center text-sm font-semibold text-white shadow-sm hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Увійти</button>

  <label htmlFor="terms" className="ms-2 my-4 text-sm font-medium text-gray-900 dark:text-gray-900">У вас є акаунт? <a href="/reg" className="text-blue-600 hover:underline dark:text-[#5BC0EB]">Зареєструватися</a> </label>
  

</form>
 
    
    
     


            </div>

        </div>
    </>



);


};
export default Login;