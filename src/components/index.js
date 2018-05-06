import React from 'react';


import StarRatings from 'react-star-ratings';

import "../style/animate.css"


    


const List = ({title,cate,image,rate,rateUser}) => {
    
    
    return (
        <div className="media list-row py-3 zoomIn animated">
            <RoundImage className="mr-3">
                <img src={image}  alt=""/>
            </RoundImage>
            <div className="media-body">
                <h5 className="mt-0">{title}</h5>
                <div className="text-secondary">{cate}</div>
                <div className="d-flex">
                <StarRatings
                rating={rate}
                starRatedColor="#ffe300"
                numberOfStars={5}
                starDimension="15px"
                starSpacing="2px"
                />
                    <span className="text-secondary ml-1">( {rateUser} )</span>
                </div>
               
            </div>
        </div>
         
    )
}

const RoundImage  = ({className,children}) => {
    return (
        <div className={`roundImage ${className}`}  >
            {children}
        </div>    
    )
}

const RecommendBox = ({image,title,cate}) => {
    return (
        <div className="box bounceIn animated">
            <RoundImage>
                <img src={image} alt="" />
            </RoundImage>
            <div className="title my-1">{title}</div>
            <div className="tag">{cate}</div>
        </div>  
    )
}



export  { List , RoundImage, RecommendBox }