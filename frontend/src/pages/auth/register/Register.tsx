
import Banner from '../../../assets/logo/reg.png';
import Google from '../../../assets/logo/devicon_google.svg';
import FaceBook from  '../../../assets/logo/logos_facebook.svg';
import { storeToken } from '../../../services/tokenService';
import { IRegistrationRequest, IRegistrationResult } from './types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import http_api from '../../../services/http_api';
const Register =()=>{


    const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigator = useNavigate();

  const request: IRegistrationRequest = {
      email: '',
      password_1: '',
      password_2: '',
      username: '',
      type: 'recipients',
  
  };

//   const requestSchema = yup.object({
//     email: yup.string().required(t('auth.signUp.yourEmail')).email(t('auth.signUp.emailValidation')),
//     password: yup.string().required(t('auth.signUp.yourPassword')).min(8, t('auth.signUp.passwordMinLength')),
//     passwordConfirm: yup
//       .string()
//       .required(t('auth.signUp.repeatPassword'))
//       .test('equal', t('auth.signUp.passwordMismatch'), (v) => {
//         return v === values.password;
//       }),
//     firstName: yup.string().required(t('auth.signUp.yourFirstName')).min(2),
//     lastName: yup.string().required(t('auth.signUp.yourLastName')).min(2),
//     channelPhoto: yup.mixed().required(t('auth.signUp.imageError')),
//   });

  const onFormSubmit = async (values: IRegistrationRequest) => {
    try {
        console.log(values);
      setIsLoading(() => true);
      const result = await http_api.post<IRegistrationResult>('http://198.46.226.156/api/v1/users/signup/', values, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { token, verificationToken } = result.data;
      storeToken(token);

      localStorage.setItem('verificationToken', verificationToken);

     
      navigator('/');
    } catch (error) {
     
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

                <h1 className="mt-[120px] text-black text-[33px]">Реєстрація</h1>

            <form onSubmit={handleSubmit} className="my-5 max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                        <input              onChange={ handleChange}  type="username" name="username" id="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_fullname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Повне ім'я</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input    onChange={ handleChange} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input       onChange={ handleChange}  type="password " name="password_1" id="password_1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">  Пароль</label> </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input     onChange={ handleChange}  type="password" name="password_2" id="password_2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Повторіть Пароль</label>
                    </div>

                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input  onChange={ handleChange}  id="terms" type="checkbox"   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Реєструючись, згоден(-а) з угодою користувача   </label>
                    </div>
                    <button type="submit" className=" w-[301px] block    ml-24 px-2 py-2 bg-[#5BC0EB] border-[2px] border-[solid] border-[#FEFCF4]   rounded-[4px] text-center text-sm font-semibold text-white shadow-sm hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB]   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Зареєструватися</button>

                    <label htmlFor="terms" className="ms-2 my-4 text-sm font-medium text-gray-900 dark:text-gray-900">У вас є акаунт? <a href="/log" className="text-blue-600 hover:underline dark:text-[#5BC0EB]">Увійти</a> </label>


                </form>

                 


            </div>

        </div>
    </>



);


};
export default Register;