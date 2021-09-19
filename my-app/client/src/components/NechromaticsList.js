import React, {useEffect, useContext, createContext} from "react"
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
        <div className={"list-group"}>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th>Nechromatic</th>
                    </tr>
                </thead>
                <tbody>
                {nechromatics.map(nechromatic => {
                    return (
                        <tr>
                            <td>{nechromatic.id}</td>
                            <td>{nechromatic.price}</td>
                            <td>{nechromatic.color}</td>
                        </tr>
                        )
                })}
                </tbody>
            </table>
        </div>
    )
}