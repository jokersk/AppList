export function getRecommedHttp(state,action){
    return  {
        ...state,
        recommendList : action.data,
        originalRecommendData : action.data
    }
}

export function filter(state,action,defaultState)
{
    const rgxp = new RegExp(action.value, "g");
    const newRecommendList = state.originalRecommendData.filter(p => filterEle(p, rgxp))
    const newAppList = state.originalAppListData.filter(p => filterEle(p, rgxp))

    return {
        ...state,
        AppList : newAppList,
        startIndex : defaultState.startIndex,
        endIndex : defaultState.endIndex,
        showingAppList : newAppList.slice( defaultState.startIndex, defaultState.endIndex),
        recommendList : newRecommendList,
        
    }
}

export function getAppListHttp(state,action){
    return {
        ...state,
        AppList : action.data,
        originalAppListData : action.data
    }
}

export function fetchAppData(state){
    return {
        ...state,
        showingAppList : state.showingAppList.concat(
            state.AppList.slice(state.startIndex, state.endIndex)
        )
    }
}

export function fetchMoreData(state){
    return {
        ...state,
        startIndex : state.startIndex += state.perPage,
        endIndex : state.endIndex += state.perPage,
        showingAppList : state.showingAppList.concat(
            state.AppList.slice(state.startIndex, state.endIndex)
        )
    }
}

function filterEle(p, rgxp){
    return (
        p["im:name"].label.match(rgxp) 
        || p.category.attributes.label.match(rgxp) 
        || p.summary.label.match(rgxp)
        || p['im:artist'].label.match(rgxp)
    )
}