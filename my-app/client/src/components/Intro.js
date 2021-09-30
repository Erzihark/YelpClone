import React from "react";
import banner from "../images/banner.jpeg"

export default function Intro(){
    return (
        <header className={"intro"}>
            <div className={"intro-img-container"}>
                <p className={"intro-text"}>
                    Pls just buy our nft we live in a 3rd world wasteland and need money to barely survive
                </p>
                <img src={banner} alt={"header image"}/>
            </div>
        </header>
    )
}