import React from "react";
import funphoto from "../assets/fun-one.jpg";

function Faqs() {
    return(
        <div>
            <h2 className="font-alegreya text-center">Frequently Asked Questions</h2>
            <img 
                src={funphoto}
                title="Have questions? We got answers for you!"
                alt="Austin has a Turtwig plush on his head. Amberly is holding a Treecko and Isabelle plush in each hand and squishing them on either side of her face."
            />
            <div className="content-container mt-10">
                <div>
                    <p className="question">When is the RSVP deadline?</p>
                    Please RVSP by August 2023. You can RSVP <a href="/rsvp" className="underline">here.</a>
                </div>
                <div>
                    <p className="question">Can I bring a plus one?</p>
                    Please check your invitation for any additional named guests.
                </div>
                <div>
                    <p className="question">Are my kids welcome?</p>
                    Due to a limited amount of space, we can only invite children of extended family members. If your baby won't need a seat, contact us to discuss options. If this will affect your attendance, please feel free to stay home and we can celebrate another time!
                </div>
                <div>
                    <p className="question">What is the dress code?</p>
                    Formal attire. For example: cocktail knee-length dress to floor-length gown, suit and tie. 
                </div>
                <div>
                    <p className="question">What are your wedding colors?</p>
                    Blue and green, with pink accents. 
                </div>
                <div>
                    <p className="question">When should I arrive for the ceremony?</p>
                    Plan to arrive 15 minutes before the mass begins. Schedule details can also be found <a href="/schedule" className="underline"> here.</a>
                </div>
                <div>
                    <p className="question">Is the wedding indoors or outdoors?</p>
                    Our ceremony and reception are indoors. Cocktail hour will be outside, weather permitting.
                </div>
                <div>
                    <p className="question">Can I take pictures during the ceremony with my phone or camera?</p>
                    We hired a very talented photographer we are very excited about! As such, please refrain from taking photos during the mass and the exchange of vows.
                </div>
                <div>
                    <p className="question">What should I do if I have dietary restrictions (allergies, intolerances, etc.)?</p>
                    Please indicate if you have any dietary restrictions on your RSVP. Our reception dinner will be family style and we will be sure to note any potential allergens as well.
                </div>
                <div>
                    <p className="question">Will there be an open bar?</p>
                </div>
                <div>
                    <p className="question">I am coming from out of town, where should I stay?</p>
                    Check out our <a href="/travel" className="underline">Travel page</a> for accomodations and recommended food/shopping locations!
                </div>
            </div>
        </div>
    )
}

export default Faqs;