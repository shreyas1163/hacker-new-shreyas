import {GET_NEWS_SUCESS } from '../actions/constants'


const initState = {
  pageNumber : 1,
  newsList:[],
}
const newsReducer= (state = initState,action)=>{
  switch (action.type) {
    case GET_NEWS_SUCESS:
      let newState={...state};
      newState["newsList"]=action.result;
      return newState;
    default:
      return state;
  }
}

    

export default newsReducer