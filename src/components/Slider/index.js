import React from 'react';
import Slider from "react-animated-slider";
import { Link } from 'react-router-dom';
import { content } from './content';
import "react-animated-slider/build/horizontal.css";
import './slider-animations.css';
import "./styles.css";

export const Slid = () => {
    return (
        <div>
            <Slider className="slider-wrapper" autoplay={3000}>
                {content.map((item, index) => {
                    return(
                    <div
                        key={index}
                        className="slider-content"
                        style={{
                            background: `url('${item.image}') no-repeat center center`,
                        }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <Link to="/News"><button>{item.button}</button></Link>
                        </div>
                        <section>
                            <img src={item.userProfile} alt={item.user} />
                            <span>
                                Posté par <strong>{item.user}</strong>
                            </span>
                        </section>
                    </div>
                    )})}
            </Slider>
        </div>
    )
}