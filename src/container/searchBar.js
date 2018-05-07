import React, { Component } from 'react';
import { connect } from "react-redux"
import * as actionCreators from "../actions"
class SearchBar extends Component {
    state = {}
    
    

    onChange(e){
        this.props.filter(e.target.value)
    }
    render()
    {
        return (
            <div className="search-wrapper bg-light p-2">
                <input onChange={this.onChange.bind(this)}  className="form-control text-center"
                     placeholder="&#xf002; 搜尋"  />
            </div>    
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps,actionCreators)(SearchBar);