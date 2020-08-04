import {GET_NEWS_SUCESS,GET_NEWS } from '../actions/constants'


const initState = {
  pageNumber : 1,
  newsList:[],
}
const newsReducer= (state = initState,action)=>{
  let newState={...state};
  switch (action.type) {
    case GET_NEWS_SUCESS:
      newState["newsList"]=action.result;
      return newState;
    case GET_NEWS:
      console.log("hello==>",action.pageNumber);
     newState["pageNumber"]=action.pageNumber;
      return newState;
    default:
      return state;
  }
}

    

export default newsReducer