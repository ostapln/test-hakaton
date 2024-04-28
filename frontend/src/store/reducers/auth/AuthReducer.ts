 
import { IAuthUser, IUser, AuthUserActionType } from './types';

const initState: IAuthUser = {
  isAuth: false,
  user: undefined,
};


 
export const AuthReducer = (state = initState, action: any): IAuthUser => {
  switch (action.type) {
    case AuthUserActionType.LOGIN_USER: {
      const user = action.payload as IUser;
      return {
        isAuth: true,
        user,
      };
    }
    case AuthUserActionType.LOGOUT_USER: {
      return {
        isAuth: false,
      };
    }
 
  }
 
   
  
   
  
  return state;
};
