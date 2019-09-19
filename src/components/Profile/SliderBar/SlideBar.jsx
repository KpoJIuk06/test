import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import s from './SlideBar.css';

const slider = (
    <AwesomeSlider cssModule={s.button}>
        <div data-src="/path/to/image-0.png" />
        <div data-src="/path/to/image-1.png" />
        <div data-src="/path/to/image-2.jpg" />
    </AwesomeSlider>
);

export default slider;