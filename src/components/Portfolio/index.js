import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json';
import cv1 from '../../Assest/image/cv1.png'
import cv2 from '../../Assest/image/2.png'
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }); 


   

    const [model , setModel] = useState(false);
    const [tempImgSrc , setTempImgSrc] = useState('');
    const getImg = (image) =>{

        console.warn(image);
    setTempImgSrc(image);
    setModel(true);
    }
    const getotherImg = () => {
        if(tempImgSrc === cv1){
            setTempImgSrc(cv2);
        }
        else{
            setTempImgSrc(cv1);
        }
    }

    return (
        <div>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div onClick={()=> getImg(cv1)} className="imdiv">
                <img src={cv1} alt="Software Engineering Student"></img>
                </div>
                <div onClick={()=> getImg(cv2)} className="imdiv">
                <img src={cv2} alt="Software Engineering Student"></img>
                </div>
                <div className={model ? "model open" : "model"}>
                    <img alt="im" src={tempImgSrc}/>
                    <CloseIcon className="close" onClick={() => setModel(false)}/>
                    <ArrowForwardIosIcon className="forward" onClick={()=> getotherImg()}/>
                    <ArrowBackIosIcon className="back" onClick={()=> getotherImg()}/>

                </div>
                
            </div>
            <Loader type="pacman" />
        </div>
    );
}

export default Portfolio;