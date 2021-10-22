import React, {useEffect, useContext} from "react"
import NechromaticFinder from "../apis/NechromaticFinder";
import {NechromaticsContext} from "../context/NechromaticsContext";
import t1 from "../images/t1.webp"
import t2 from "../images/t2.webp"
import t3 from "../images/t3.webp"
import t4 from "../images/t4.webp"
import t5 from "../images/t5.webp"

export default function NechromaticsList() {

    /*const {nechromatics, setNechromatics} = useContext(NechromaticsContext)

    //we set data retrieval inside a function to prevent
    //errors caused by useEffect not being able to return anything
    useEffect(()=> {

        async function fetchData(){
            try {
                const response = await NechromaticFinder.get("/")
                setNechromatics(response.data.data.nechromatics)
            } catch (error){
                console.log(error);
            }
        };

        fetchData();
    },[])*/

    return (
        <section className={"nechro-display"}> <h2>What will you get?</h2>
            <div className={"nechro-query-container"}>
                <div className={"nechromatic-card__container"}>
                    <div className={"nechromatic-card"} >
                        <img className={"nechromatic-card__img"} src={t1} alt={"tier1"} height={320} />
                        <div className={"nechromatic-card__txt-container"}>
                            <h4 className={"nechromatic-card__txt"}>Common</h4>
                        </div>
                    </div>
                </div>
                <div className={"nechromatic-card__container"}>
                    <div className={"nechromatic-card"} >
                        <img className={"nechromatic-card__img"} src={t2} alt={"tier2"} height={320} />
                        <div className={"nechromatic-card__txt-container"}>
                            <h4 className={"nechromatic-card__txt t2"}>Uncommon</h4>
                        </div>
                    </div>
                </div>
                <div className={"nechromatic-card__container"}>
                    <div className={"nechromatic-card"} >
                        <img className={"nechromatic-card__img"} src={t3} alt={"tier3"} height={320} />
                        <div className={"nechromatic-card__txt-container"}>
                            <h4 className={"nechromatic-card__txt t3"}>Rare</h4>
                        </div>
                    </div>
                </div>
                <div className={"nechromatic-card__container"} >
                    <div className={"nechromatic-card"} >
                        <img className={"nechromatic-card__img"} src={t4} alt={"tier4"} height={320} />
                        <div className={"nechromatic-card__txt-container"}>
                            <h4 className={"nechromatic-card__txt t4"}>Epic</h4>
                        </div>
                    </div>
                </div>
                <div className={"nechromatic-card__container"}>
                    <div className={"nechromatic-card"} >
                        <img className={"nechromatic-card__img"} src={t5} alt={"tier5"} height={320} />
                        <div className={"nechromatic-card__txt-container"}>
                            <h4 className={"nechromatic-card__txt t5"}>Legendary</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}