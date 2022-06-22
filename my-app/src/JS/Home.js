import React, { useEffect } from "react";

function Home() {

    //needa know what page i'm on 
    useEffect(
        () => {
            console.log("This is the home page")
        }
    );

    console.log("Component rendering");
    return (
        <div>
            <h1>Runaway Thoughts</h1>
            <h2>Just ADHD Things...</h2>
            <p>I am Home!</p>
        </div>

    )
}

export default Home; 