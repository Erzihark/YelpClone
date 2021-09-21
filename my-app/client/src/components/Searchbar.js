import React from "react";

export default function Searchbar() {
    return (
        <div className={"topNav"}>
            <input type={"text"} placeholder={"Search..."} />
            <button type={"submit"}>Search</button>
        </div>
    )
}
