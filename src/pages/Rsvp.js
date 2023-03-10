import React from "react";
import rsvp from "../assets/rsvp.jpg";
import { PopupButton } from "@typeform/embed-react";

function Rsvp() {
    return(
        <div>
            <h2 className="font-alegreya text-center">Rsvp</h2>
            <img
                src={rsvp}
                title="Come witness this love in person! See you at the wedding (we hope)!"
                alt="Austin and Amberly are standing next to one another, with Amberly facing him. Austin is holding Amberly with one arm while her hands rest on his shoulder. They are gazing at each other, romantically."
                className="md:w-1/2 mx-auto"
            />
            <div className="content-container">
                <div className="md:text-center">
                    <h3 className="font-abhaya text-center">Meet us at 11.11.</h3>
                    <p>We are still working on the RSVP form! Please check back when you receive your invitation!</p>
                    <p>Ready to party? RSVP so we can count you in our celebrations!</p>
                    <p> 
                        Please note, our RSVP deadline is August 1, 2023 and this form will no longer be open after that date. If you have any questions, check our FAQ page. If you still have questions, you may contact our wedding planner.
                    </p>
                    <PopupButton id="https://mtrwvx63bj1.typeform.com/to/WQ5VxMVD" style={{ fontSize: 16 }} size={80} className="btn primary">
                        Click here to RSVP
                    </PopupButton>
                </div>
            </div>
        </div>
    )
}

export default Rsvp;