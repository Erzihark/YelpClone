import React from "react"
import nechromatic from "../gifs/nechrogif.gif"

export default function About() {
    return (
        <div>
            <section className={"about"} id={"about-project"}>
                <img className={"about-img"} src={nechromatic} alt={"about image"}/>
                <div className={"about-text"}>
                    <h2 className={"about-text__title"}>
                        <strong>100 stylish undead</strong>
                    </h2>
                    <br/>
                    <h3>Nechromatics are a colletction of hand-drawn NFT's on
                    the Solana blockchain. <br/>
                    All are unique and carefully crafted by our digital artist</h3>
                </div>
            </section>
        </div>
    )
}