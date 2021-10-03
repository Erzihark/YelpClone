import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'
library.add(faTwitter)

export default function Header(){
    return(
        <div>
            <StickyNav length='20' >
                <a href={"#introduction"} className={"active"}>Home</a>
                <a href={"#about-project"} >About</a>
                <a href={"https://twitter.com/NechromaticsNFT"} className={"right"}>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
            </StickyNav>
        </div>
    )
}

