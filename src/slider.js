import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import pillow from './pillow.png'
import green from './green.png'
import teal from './teal.png'
import  blue from './blue.png'
function slider() {
    const AutoPlaySlider=withAutoplay(AwesomeSlider);
    const slider1=()=>{
        <AutoPlaySlider 
        play={true}
        cancelOnINteraction={false}
        interval={6000}
        >
            <div data-src={pillow}/>
            <div data-src={green}/>
            <div data-src={teal}/>
            <div data-src={blue}/>
        </AutoPlaySlider>
    }
    return (
        slider1()
    )
}

export default slider;
    
