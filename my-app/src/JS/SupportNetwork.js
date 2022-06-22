import React, { useEffect } from "react";

function SupportNetwork() {

        //needa know what page i'm on 
        useEffect(
            () => {
                console.log("This is the Support Network page")
            }
        );
    
        console.log("Component rendering");

    return (
        <p>I am Support Network</p>
    )
}

export default SupportNetwork; 