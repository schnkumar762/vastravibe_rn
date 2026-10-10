import API_ROUTES from "@/constants/apiRoutes";
import { RN_PUBLIC_API } from "./client";

interface IuserLoginAPIParamsType {
    email:string;
    password:string;
}

interface IuserSignupAPIParamsType {
    firstName:string;
    email:string;
    phone:string;
    password:string;

}

interface IuserLogoutAPIParamsType {
    userId:String | null;

}


const userLogin = (params:IuserLoginAPIParamsType)=>{
    const {email,password} = params;
    try {
        return RN_PUBLIC_API.post(API_ROUTES.AUTH.USER.LOGIN,{email,password});

    } catch(error){
        console.warn(error);
        return {data:null,error}

    }
};
const userSignup = (params:IuserSignupAPIParamsType) =>{
    const {email,firstName,password,phone} = params;
     try {
        return RN_PUBLIC_API.post(API_ROUTES.AUTH.USER.SIGNUP,{firstName,email,phone,password});

    } catch(error){
        console.warn(error);
        return {data:null,error}

    }

};
const userLogout = (params:IuserLogoutAPIParamsType)=>{
    const {userId} = params;
    try {
        return RN_PUBLIC_API.post(API_ROUTES.AUTH.USER.LOGOUT,{userId});
    } catch(error){
        console.warn(error);
        return {data:null,error};
    };
};

const USER_AUTH_API = {userLogin,userSignup,userLogout};

export default USER_AUTH_API;