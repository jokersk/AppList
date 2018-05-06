import {getRecommedHttp, filter, getAppListHttp,fetchAppData, fetchMoreData} from "./functions"
let defaultState = {
    perPage : 10,
    startIndex : 0,
    endIndex : 10,
    showingAppList : [],
    originalRecommendData : [],
    originalAppListData : []
}


const mainReducer = (state = defaultState ,action) =>{
    let result = {}
    switch (action.type){
        case "GET_RECOMMEND_HTTP" :
            result =  getRecommedHttp(state,action)
        break
        case 'FILTER' : 
            result = filter(state,action,defaultState)
        break;
        case 'GET_APPLIST_HTTP' :
            result = getAppListHttp(state,action)
        break;
        case "FETCH_APP_DATA" :
            result = fetchAppData(state)
        break;
        case 'FETCH_MORE_DATA' :
            result = fetchMoreData(state)
        break;
        default : 
            result = { ...state }
    }
    return result;
}
export default mainReducer;