import React from "react";
import registry from "../assets/registry.jpg";

function Registry() {
    return(
        <div>
            <h2 className="font-alegreya text-center">Registry</h2>
            <img
                src={registry}
                className="md:w-1/2 mx-auto"
                title="Our smiles of gratitude for your generosity :)"
                alt="Amberly and Austin are holding hands and standing with their faces close to each other. Their eyes are close and they are smiling very excitedly."
            />
            <div className="content-container">
                <div>
                    <p>Thank you so much for considering a gift! We haven't registered anywhere yet but please check back closer to the wedding date!</p>
                </div>
            </div>
        </div>
    )
}

export default Registry;