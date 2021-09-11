import React, {useState, useEffect} from "react"
import randomColor from "./randomcolor"

export default function Example() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");

    useEffect(() => {
        setColor(randomColor);
    }, [count])

    return(
        <div style={{borderTop: `10px solid ${color}`}}>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}