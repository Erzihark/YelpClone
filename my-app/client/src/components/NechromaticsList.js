import React, {useEffect, useContext} from "react"
import NechromaticFinder from "../apis/NechromaticFinder";
import {NechromaticsContext} from "../context/NechromaticsContext";

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
        <div className={"nechro-query-container"}>
            {nechromatics.map(nechromatic => {
                return (
                    <div>
                        <div className={"nechromatic-card"} key={nechromatic.id}>
                            <div>Id: {nechromatic.id}</div>
                            <div>Price: {nechromatic.price}</div>
                            <div>Color: {nechromatic.color}</div>
                        </div>
                        <div className={"nechromatic-card"} key={nechromatic.id}>
                            <div>Id: {nechromatic.id}</div>
                            <div>Price: {nechromatic.price}</div>
                            <div>Color: {nechromatic.color}</div>
                        </div>
                        <div className={"nechromatic-card"} key={nechromatic.id}>
                            <div>Id: {nechromatic.id}</div>
                            <div>Price: {nechromatic.price}</div>
                            <div>Color: {nechromatic.color}</div>
                        </div>
                    </div>
                    )
            })}
        </div>
    )
}