import { ADDFAV, ADDIMAGE, ADDUSER } from "./Types"


export const AddUser = (email,password,name,token)=>{
    console.log('email' , email);
    console.log('name' , name);
    console.log('password' , password);
    return {
        type:ADDUSER,
        email:email,
        password:password,
        name:name,
        token:token,
        Fav:[]
    }
}
export const AddImage = (image,idImage,tokenUser)=>{
   return {
     type:ADDIMAGE,
     tokenUser:tokenUser,
     idImage:idImage,
     image:image
   }
}

export const  AddFav = (idImage,tokenUser)=>{
   return {
    type:ADDFAV,
    tokenUser:tokenUser,
    idImage:idImage
   }
}