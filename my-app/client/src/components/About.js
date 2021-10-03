import React from "react"
import nechromatic from "../images/nechromatic.jpeg"

export default function About() {
    return (
        <div>
            <section className={"about"} id={"about-project"}>
                <img className={"about-img"} src={nechromatic} alt={"about image"}/>
                <h2 className={"about-text"}>
                    Nechromatics is a NFT on the Cardano network
                    agaerga
                    asergarg ggggggggggg gggggggg ggggggg
                    ggggggg gggggggggg ggggggggggg gggggggg gggggggg
                    gggggggg ggggggggggg ggggggggggg ggggggg gggggg
                </h2>
            </section>
        </div>
    )
}