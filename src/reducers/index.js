import {GET_NEWS_SUCESS } from '../actions/constants'


const initState = {
  pageNumber : 1,
  newsList:[],
}
const newsReducer= (state = initState,action)=>{
	let newState={...state};
  switch (action.type) {
    case GET_NEWS_SUCESS:
      let newState={...state};
      newState["newsList"]=action.result;
      return newState;
 		case GET_NEWS:
     newState["pageNumber"]=action.pageNumber;
      return newState;
    default:
      return state;
  }
}

    

export default newsReducer
