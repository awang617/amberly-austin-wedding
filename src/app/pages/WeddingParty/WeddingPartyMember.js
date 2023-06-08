import React, { useEffect, useState } from "react";

function WeddingPartyMember(props) {
    const [mouseoverText, setMouseOverText] = useState("");
    const [altText, setAltText] = useState("");

    useEffect(() => {
        setMouseOverText("Click to see " + props.name + "'s bio");
        setAltText("This is " + props.name);
    }, [props]);

    function handleClick() {
        const details = {};
        details.name = props.name;
        details.role = props.role;
        details.image = props.image;
        details.bio = props.bio;
        props.openModal(details)
    }
    return (
        <div key={props.name} className="mx-8 md:mx-16 lg:mx-18 mb-20 lg:mb-8 link" onClick={handleClick}>
            <h3 className="font-abhaya text-center mb-0">{props.name}</h3>
            <h4 className="header-text mt-0">{props.role}</h4>
            {props.image ?
                <img className="rounded-full w-full mx-auto" src={props.image} title={mouseoverText} alt={altText}/>
                : null
            }
        </div>
    )
}

export default WeddingPartyMember;