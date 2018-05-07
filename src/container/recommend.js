import React, { Component } from 'react';
import { RecommendBox}  from "../components"
import { connect } from "react-redux"
import * as actionCreators from "../actions"
import loading from "../loading.svg"

class Recommend extends Component {
    state = {
        hasLoad: false
    }
    async componentWillMount(){
        await this.props.loadData()
        this.setState({
            hasLoad : true
        })
        
    }

    
    
    renderRecommendList(){
        if(this.props.recommendList && this.props.recommendList.length > 0){
            return this.props.recommendList.map( (p,i) =>(
                <RecommendBox 
                    key ={i}
                    title = {p["im:name"].label}
                    cate = {p.category.attributes.label}
                    image = {p["im:image"][2].label}
                /> 
            ))
        }
        if(!this.state.hasLoad)
            return (<div className="w-100 text-center"> <img src={loading}  alt="loading..." /></div>)
        return ( <div>找不到相關應用</div>)
        
    }
    
    render()
    {
        
        return (
            <div className="section-recommend p-2 pb-4">        
                <h4 className="py-2">推介</h4>
                <div className="d-flex boxs">
                    {this.renderRecommendList()}
                </div>
            </div>    
        )
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps,actionCreators)(Recommend);