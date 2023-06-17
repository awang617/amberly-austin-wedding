import React from "react";
import registry from "../../assets/registry.jpg";

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
                <div className="text-center">
                    <p>Thank you so much for considering a gift! Anything you would like to contribute is a blessing to us. Our wedding registry is through Zola and you can check it out here!</p>
                    <div>
                        <button className="btn primary mt-5 text-center">
                            <a
                                href="https://www.zola.com/registry/austinandamberly"
                                target="_blank"
                                rel="noreferrer">
                                Our Registry
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registry;