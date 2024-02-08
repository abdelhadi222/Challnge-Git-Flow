
import { ADDIMAGE, ADDUSER, ADDFAV } from "../actions/Types";



export const AppRe = (state = {users:[],Images:[]} , action)=>{
    console.log("******");
    console.log('st' , state);
     console.log('st1' , action);
    switch(action.type) {
         case ADDUSER : return {...state , users:[...state.users,{
            name:action.name,
            email:action.email,
            password:action.password,
            token:action.token,
            Fav:action.Fav
         }]}


         case ADDIMAGE : return {...state , Images:[...state.Images,{
            image:action.image,
            idImage:action.idImage,
            tokeUser:action.tokenUser
         }]}


         case ADDFAV : {
            let getUser = state.users.filter((user)=> user.token == action.tokeUser)
            let chek = getUser[0].Fav.findIndex((e)=> e == action.tokeUser)

            if(chek){
                for (let i = 0; i < state.users.length; i++) {
                    if(state.users[i].token == action.tokeUser){
                       for (let j = 0; j < state.users[i].Fav.length; j++) {
                         if(state.users[i].Fav[j] == action.tokeUser){
                            state.users[i].Fav[j].splice(j,1)
                         }
                       }
                    }
                     
                }
                return {...state , users:[...state.users ]}
            }

            for (let i = 0; i < state.users.length; i++) {
                if(state.users[i].token == action.tokeUser){
                    state.users[i].Fav.push(action.tokeUser)
                }
                
            }
            return {...state , users:[...state.users ]}
         }
    }
 
}