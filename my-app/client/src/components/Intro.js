import React from "react";
import logo from "../images/logo.webp"

export default function Intro(){
    return (
        <section className={"intro"} id={"introduction"}>
            <div className={"intro__container"}>
                <img className={"intro-img"} src={logo} alt={"nechromatics logo"}/>
                <h3 className={"intro-text"}>
                    It's spooky season and the dead are roaming the land of the living...
                </h3>
            </div>
        </section>
    )
}