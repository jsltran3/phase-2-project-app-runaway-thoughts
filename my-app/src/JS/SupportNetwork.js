import React, { useEffect, useState } from "react";

function SupportNetwork() {
    //rename the variables to make sure it's clear
    //(be sure to be specific with your variables)
    //at some point i'll have to create tags, create the state, the the filter, and event/onclick
    //then use all three in conjunction wtih the new array, push that into the new array, and then rerender using set
    const [helperPerson, setHelperPerson] = useState();
    const [helperPersontType, setHelperPersonType] = useState("All");

    

    // let allCategories = helperPerson.filter(e => e.type === "All")
    // let importantHelper = helperPerson.filter(e => e.type === "Important Person")
    // let emergencyHelper = helperPerson.filter(e => e.type === "Emergency Person")
    // let emotionalHelper = helperPerson.filter(e => e.type === "Emotional Person")

    function handleShowAll() {
        setHelperPersonType(helperPersontType)
    }

    // function handleImportant() {
    //     setHelperPerson(importantHelper)
    // }

    // function handleShowEmergency() {
    //     setHelperPerson(emergencyHelper)
    // }

    // function handleShowEmotional() {
    //     setHelperPerson(emotionalHelper)
    // }

    function handleSupportCategoryChange() {
        setHelperPersonType(helperPersontType)
    }

    // const helpersToDisplay = SupportNetwork.filter((helper => {
    //     if (handleSupportCategoryChange === "All") return true;

    //     return helper.setHelperPersonType === handleSupportCategoryChange;
    // }));

    // const tasksToDisplay = tasks.filter((task => {
    //     if (handleCategoryChange === "All") return true;

    //     return task.selectedCategory === handleCategoryChange;
    // }));


    //needa know what page i'm on 
    useEffect(() => {
        fetch("http://localhost:3000/supportnetworks")
            .then((resp) => resp.json())
            // .then((helperPerson) => setHelperPerson(helperPerson));
            // .then((data) => console.log(data))
            .then((helperPerson) => setHelperPerson(helperPerson))
        }, []);

    console.log("Component rendering");

    function handleUpdateHelpers(updatedHelper) {
        const updatedHelpers = helperPerson.map((helper) => {
            if (helper.id === updatedHelper.id) {
                return updatedHelpers;
            } else {
                return helper;
            }
        });
        setHelperPerson(updatedHelpers);
    }

    return (
        <div>
            <p>I am Support Network</p>
                {/* <button name="helpercat" value={helperPersontType} onChange={(e) => handleShowAll(e.target.type)}>Filter by all</button>
                <button value="all">All</button>
                <button value="important">Important</button>
                <button value="emergency">Emergency</button>
                <button value="emotional">Emotional</button> */}
                <button value="all">All</button>
                <button value="important">Important</button>
                <button value="emergency">Emergency</button>
                <button value="emotional">Emotional</button>
                <p>Helper Cards</p>
                    {/* {helperPerson.map((helper) => {
                        console.log({helper})
                        return (
                            <div>
                            <p>hello</p>
                            </div>
                        )
                    })} */}
         
            
        </div>
    )
}

export default SupportNetwork; 