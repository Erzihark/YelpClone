import React from "react";
import nechro from "../gifs/nechrogif.gif"

export default function Footer(){
    return (
        <footer className={"footer"}>
            <div className={"footer-container"}>
                <img src={nechro} className={"footer-container__left"} alt={"spinning nechro"}/>
                {/*<h2 className={"footer-container__left"}>
                    Solana
                </h2>*/}
                <h1 className={"footer-container__right"}>
                    Coming October 30
                </h1>
            </div>
        </footer>
    )
}