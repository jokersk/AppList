import axios from "axios"

export  function loadData(){
    return async (dispatch)=>{
        const res = await axios.get('https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json')    
        dispatch(getRecommendData(res.data.feed.entry))
    }
}

export function getRecommendData(data){
    return {
        type:"GET_RECOMMEND_HTTP",
        data
    }
}

export  function loadAppListData(){
    return async(dispatch)=>{
        const res = await axios.get('https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json')
        const items = await Promise.all( 
            res.data.feed.entry.map(async (item)  => {
                const r = await axios.get(`https://itunes.apple.com/hk/lookup?id=${item.id.attributes['im:id']}`)
                return {
                    ...item,
                    rate : r.data.results[0].averageUserRating || 0,
                    rateUser : r.data.results[0].userRatingCount || 0
                }
        }));
        
        dispatch(getAppListData(items))
        dispatch(fetchAppData())
        
    }
}
export function getAppListData(data){
    return {
        type:"GET_APPLIST_HTTP",
        data
    }
}




export function filter(value){
    return {
        type:"FILTER",
        value
    }
}

export function fetchMoreData(){
    return {
        type: "FETCH_MORE_DATA"
    }
}
export function fetchAppData(){
    return {
        type: "FETCH_APP_DATA"
    }
}


