
const initialState = {
    newUser: '',
}

export const signupReducer = (state = initialState, action: {type: string, payload:{name: string, email: string, password: string}})=>{
 
      switch(action.type){
          default:
              return state;
      }
}