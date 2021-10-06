import React, {useEffect, useContext} from "react"
import NechromaticFinder from "../apis/NechromaticFinder";
import {NechromaticsContext} from "../context/NechromaticsContext";
import img from "../images/nechromatic.jpeg"

export default function NechromaticsList() {

    const {nechromatics, setNechromatics} = useContext(NechromaticsContext)

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
    },[])

    return (
        <section className={"nechro-display"}>
            <div className={"nechro-query-container"}>
                {nechromatics.map(nechromatic => {
                    return (
                        <div className={"nechromatic-card__container"}>
                            <div className={"nechromatic-card"} key={nechromatic.id}>
                                <img className={"nechromatic-card__img"} src={img} height={320} />
                                <h4 className={"nechromatic-card__txt"}>Id: {nechromatic.id}</h4>
                                <h4 className={"nechromatic-card__txt"}>Price: {nechromatic.price}</h4>
                                <h4 className={"nechromatic-card__txt"}>Color: {nechromatic.color}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}