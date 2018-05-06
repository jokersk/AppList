import React, { Component } from 'react';
import { List } from  "../components"
import { connect } from "react-redux"
import * as actionCreators from "../actions"
import InfiniteScroll from "react-infinite-scroll-component";
import loading from "../loading.svg"

class AppList extends Component {
    
    state = {
        hasLoad: false
    }

    async componentWillMount(){
        await this.props.loadAppListData()
        this.setState({ hasLoad : true })
        
        
    }

    

    renderAppList(){
            
        if(this.props.showingAppList && this.props.showingAppList.length > 0){
           return  this.props.showingAppList.map( (p, index) => {
                
                return (<List 
                    key={index}
                    title={p['im:name'].label}
                    cate={p.category.attributes.label}
                    image = {p["im:image"][2].label}
                    rate = {p.rate}
                    rateUser = {p.rateUser}
                />)
            })
        }
        
        
        
    }

    fetchMoreData(){
        this.props.fetchMoreData()
    }

    render()
    {
        if(this.props.showingAppList && this.props.showingAppList.length > 0){
            return (
            <div className="px-3 section-listing">
                <InfiniteScroll
                    dataLength={this.props.showingAppList.length}
                    next={this.fetchMoreData.bind(this)}
                    hasMore={true}
                   
                    >
                    {this.renderAppList()}
                </InfiniteScroll>
            </div>    
        )
        }
        if(!this.state.hasLoad)
            return (<div className="w-100 text-center" > <img src={loading}  alt="loading..." /></div>)
        return ( <div>找不到沒有相關應用</div>)

        
    }
}


const mapStateToProps = state =>{
    return  state;
}

export default connect(mapStateToProps,actionCreators)(AppList);