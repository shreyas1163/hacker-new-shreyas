import {GET_NEWS,GET_NEWS_SUCESS } from './constants'

export const getNews= (pageNumber)=>{
    return { type: GET_NEWS ,pageNumber};
}

export function getNewsSucess(result) {
    return {type: GET_NEWS_SUCESS, result };
  }
