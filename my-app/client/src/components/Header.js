import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTwitter)

export default function Header(){
    return(
        <div>
            <div className={"header"}>
                <h1>Nechromatics</h1>
            </div>
            <div className={"navbar"}>
                <a href={"#"} className={"active"}>Home</a>
                <a href={"#"} >About</a>
                <a href={"https://twitter.com/Erzihark"} className={"right"}>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
            </div>
        </div>

    )
}