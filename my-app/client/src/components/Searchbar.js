import React, {useState} from "react";

export default function Searchbar() {
    const [idInput, setIdInput] = useState('')
    return (
        <div className={"topNav"}>
            <label htmlFor={"search-bar"}>
                <span className={"visually-hidden"}>Search for nechromatics</span>
            </label>

            <span>Search for nechromatics</span>

            <input name={"filter-id"}
                   type={"number"}
                   className={"search-bar"}
                   placeholder={"Id"}
                   value={idInput}
                   onInput={e => setIdInput(e.target.value)}
            />

            <select name={"filter-color"} className={"search-bar"}>
                <option value="none" selected disabled hidden>
                    Color
                </option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
            </select>

            <button type={"submit"}>Search</button>
        </div>
    )
}
