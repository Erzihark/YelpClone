import React, {useEffect, useContext} from "react"
import NechromaticFinder from "../apis/NechromaticFinder";
import {NechromaticsContext} from "../context/NechromaticsContext";

export default function NechromaticsList(props) {

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
                    <div className={"nechromatic-card"}>
                        <div>Id: {nechromatic.id}</div>
                        <div>Price: {nechromatic.price}</div>
                        <div>Color: {nechromatic.color}</div>
                    </div>
                    )
            })}
        </div>
    )
}
/*
<tr key={nechromatic.id}>
                        <td>{nechromatic.id}</td>
                        <td>{nechromatic.price}</td>
                        <td>{nechromatic.color}</td>
                    </tr> */