import React from "react";
import travel from "../assets/travel.jpg";
import airplane from "../assets/airplane.png";

function Travel() {
    return(
        <div>
            <h2 className="font-alegreya text-center">Travel</h2>
            <img
                src={travel}
                title="Her: I wonder if he's thinking about other girls... Him: I wonder how everyone's planning to get to the wedding..."
                alt="Amberly stands slightly in front of Austin facing the left. Austin is standing against a wall and looking towards the left."
                className="md:w-1/2 mx-auto"
            />
            <div className="content-container">
                <div className="grid md:grid-cols-5 mt-10">
                    <div className="flex">
                        <img src={airplane} title="This is a plane." alt="This is an airplane icon" className="w-20 mx-auto my-auto"/>
                    </div>
                    <div className="md:col-span-4">
                        <p className="my-0">If you are from out of town, we highly recommend flying into San Jose International Airport (SJC), which is about 10-15 minutes from our venues downtown. For more flight options, you may also look at flights into San Francisco International Airport (SFO), though you will have to drive for about 40 minutes.</p>
                    </div>
                </div>
            </div>
            
            <div>
                <h3 className="font-abhaya text-center">Accommodations</h3>
                <div className="">
                    <div>
                        <h4 className="font-alegreya text-center">Hotel 1</h4>
                    </div>
                    <div>
                        <h4 className="font-alegreya text-center">Hotel 2</h4>
                    </div>
                    <div className="text-center">
                        <h4 className="font-alegreya text-center">Airbnb</h4>
                        <p>For more options, you may like to book an Airbnb for the weekend.</p>
                        <button className="btn primary">
                            <a
                                href="https://www.airbnb.com/s/San-Jose--California--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=2&query=San%20Jose%2C%20CA&place_id=ChIJ9T_5iuTKj4ARe3GfygqMnbk&date_picker_type=calendar&checkin=2023-11-10&checkout=2023-11-12&adults=2&source=structured_search_input_header&search_type=user_map_move&ne_lat=37.37473382535534&ne_lng=-121.80487559637987&sw_lat=37.26401866788477&sw_lng=-121.97379039130175&zoom=13&search_by_map=true"
                                target="_blank"
                                rel="noreferrer">
                                See Airbnbs listings in San Jose
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="content-container">
                <h3 className="font-abhaya text-center">What can I do here?</h3>
                <div>
                    <h4 className="font-alegreya text-center">Food</h4>
                </div>
                <div>
                    <h4 className="font-alegreya text-center">Shopping</h4>
                    <p>Santana Row</p>
                </div>
                <div>
                    <h4 className="font-alegreya text-center">Sightseeing</h4>
                    <p>Museums</p>
                </div>
            </div>
        </div>
    )
}

export default Travel;