import React from "react";
import nechro from "../video/spin.webm"

export default function Footer(){
    return (
        <footer className={"footer"}>
            <div className={"footer-container"}>
                <video className={"footer-container__right"} width={450} autoPlay muted loop>
                    <source  src={nechro} type={"video/webm"}/>
                </video>
                <h1 className={"footer-container__right"}>
                    Coming October 30th
                </h1>
            </div>
        </footer>
    )
}