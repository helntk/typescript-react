
const initialState = {
    user:{
    name: '',
    id: 0
    } ,
    isLogged: false
}

export const loginReducer = (state = initialState, action: {type: String, payload:{user: {name: string, id: number}}})=>{
 
      switch(action.type){
          default:
              return state;
      }
}