import React, { useEffect } from 'react';
import "./HomePage.css";
import MotorcycleShab from "../images/Motorcycle shab.svg";
import StandingShab from "../images/Standing shab.svg";
import FlyingShab from "../images/Flying shab.svg";
import lax from "lax.js";

const HomePage = () => {

    useEffect(() => {
        window.onload = function () {
            document.getElementById("home").classList.add("loaded");
            lax.init()

            // Add a driver that we use to control our animations
            lax.addDriver('scrollY', function () {
                return window.scrollY
            })

            // Add animation bindings to elements
            lax.addElements('.title', {
                scrollY: {
                    rotate: [
                        [0, 1e9],
                        [0, 1e9]
                    ]
                }
            })

            // Add a driver that we use to control our animations
            lax.addDriver('translateX', function () {
                return window.scrollY
            })

            // Add animation bindings to elements
            lax.addElements('.moto', {
                scrollY: {
                    translateX: [
                        ["elInY", "elCenterY", "elOutY"],
                        [0, 'screenWidth/2', 'screenWidth'],
                    ]
                }
            })
        }
    }, []);

    return (
        <>
            <div className="home_container" id="home">
                <section>
                    <header>
                        <h3>Shabeb delivery</h3>
                        <h1 className="title" >Welcome to shabeb</h1>
                        <p>BY ACCESSING AND USING SHABEB AND ITS RELATED SERVICES IN
                            ANY FORM, YOU ACCEPT AND AGREE TO BE BOUND BY AND ABIDE
                            BY THE TERMS AND PROVISION OF THIS AGREEMENT.
                            IN ADDITION, WHEN USING THESE PARTICULAR SERVICES,
                            YOU SHALL BE SUBJECT TO ANY POSTED GUIDELINES OR
                            RULES APPLICABLE TO THESE SERVICES.</p>
                    </header>
                </section>
                <div className="img">
                    <img src={MotorcycleShab} alt="MotorcycleShab" className="moto" />
                    <img src={StandingShab} alt="StandingShab" />
                    <img src={FlyingShab} alt="FlyingShab" />
                </div>
                <section>
                    <header className="first_part">
                        <h1>Keep scrolling to apply</h1>
                        <p>BY ACCESSING AND USING SHABEB AND ITS RELATED SERVICES IN
                            ANY FORM, YOU ACCEPT AND AGREE TO BE BOUND BY AND ABIDE
                            BY THE TERMS AND PROVISION OF THIS AGREEMENT.
                            IN ADDITION, WHEN USING THESE PARTICULAR SERVICES,
                            YOU SHALL BE SUBJECT TO ANY POSTED GUIDELINES OR
                            RULES APPLICABLE TO THESE SERVICES.</p>
                        <div className="box"></div>
                    </header>
                </section>
                <section className="third_part">
                    <h1>Do you wanna know more</h1>
                    <div className="ball one"></div>
                    <div className="ball two"></div>
                    <div className="ball three"></div>
                    <p>It's awesome right?</p>
                </section>
            </div>
        </>
    )
}

export default HomePage
