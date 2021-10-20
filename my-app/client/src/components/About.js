import React from "react"
import nechromatic from "../gifs/display.gif"

export default function About() {
    return (
        <div>
            <section className={"about"} id={"about-project"}>
                <div className={"about-text"}>
                    <h1 className={"about-text__title"}>
                        <strong>100</strong> stylish skeletons
                    </h1>
                    <br/>
                    <h3>Nechromatics are a collection of hand-drawn NFT's on
                    the Solana blockchain.
                    All are unique and carefully designed by our digital artist.</h3>
                </div>
                <img className={"about-img"} src={nechromatic} alt={"about"}/>
            </section>
        </div>
    )
}