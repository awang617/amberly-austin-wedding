import React from "react";
import travel from "../../assets/travel.jpg";
import airplane from "../../assets/airplane.png";
import hotel from "../../assets/hotel.png";
import airbnb from "../../assets/airbnb.png";
import burger from "../../assets/burger.png";
import hiking from "../../assets/hiking.png";
import museum from "../../assets/museum-art.png";
import shop from "../../assets/shopaholic.png";
import { MapPinIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

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
                        <img src={airplane} title="This is a plane." alt="Black outline of an airplane" className="w-20 mx-auto my-auto"/>
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-alegreya">Flights</h4>
                        <p className="my-0">If you are coming from out of town, we highly recommend flying into San Jose International Airport (SJC), which is about 10-15 minutes from our venues downtown. For more flight options, you may also look at flights into San Francisco International Airport (SFO), though you will have to drive for about 40 minutes.</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-10">
                <h3 className="font-abhaya text-center">Accommodations</h3>
                <div className="content-container">
                    <div className="grid md:grid-cols-5">
                        <div className="flex">
                            <img src={hotel} title="This is a hotel" alt="Black outline of a hotel building with a star on the top" className="w-20 mx-auto my-auto" />
                        </div>
                        <div className="md:col-span-4">
                            <h4 className="font-alegreya">Signia by Hilton</h4>
                            <p>
                                Located all but fifteen minutes away from Five Wounds Church and a less than five minute walk away from the reception! We have a room block rate of $209 per night. This block will be active until October 11, 2023. If you are interested in staying here, please&nbsp;
                                <a
                                    href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=SJCSMSA&groupCode=WANGWD&arrivaldate=2023-11-10&departuredate=2023-11-12&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT"
                                    className="underline">
                                        click here
                                </a>
                                &nbsp;to make your reservation!
                            </p>
                            <div>
                                <a href="https://goo.gl/maps/is9ZLvdtJFqLbv8m9" className="underline" target="_blank" rel="noreferrer">
                                    <MapPinIcon className="w-6 h-6 inline mr-2"/>170 S Market St, San Jose, CA
                                </a>
                            </div>
                            <div>
                                <a href="https://www.hilton.com/en/hotels/sjcsmsa-signia-san-jose/?SEO_id=GMB-AMER-SA-SJCSMSA&y_source=1_MjkxMDY1OTktNzE1LWxvY2F0aW9uLndlYnNpdGU%3D" className="underline" target="_blank" rel="noreferrer">
                                    <PaperAirplaneIcon className="w-6 h-6 inline mr-2"/>Signia by Hilton website
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <h4 className="font-alegreya text-center">Hotel 2</h4>
                    </div> */}
                    <div className="text-center">
                        <h4 className="font-alegreya text-center">Airbnb</h4>
                        <p>For more options, you may like to book an Airbnb for the weekend.</p>
                        <img
                            src={airbnb}
                            title="This is an Airbnb(?)"
                            alt="Black outline of a bedroom with a bed on the left and a nightstand and lamp on the right"
                            className="w-20 mx-auto my-auto"
                        />
                        <button className="btn primary mt-5">
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

            <div className="content-container mt-10">
                <h3 className="font-abhaya text-center">What can I do here?</h3>
                <p>If you're traveling here for the weekend (or longer) and want to do some sightseeing on your own, these are our recommendations from trusted sources! Please be aware that pickpocketing and break-ins have become very common, so make sure to keep your belongings with you wherever you go!</p>

                <div className="grid md:grid-cols-5">
                    <div className="flex">
                        <img src={burger} title="Did you know our favorite food is sushi?" alt="Black outline of a burger" className="w-20 mx-auto my-auto" />
                    </div>
                    <div className="md:col-span-4">
                    <h4 className="font-alegreya">Places to eat</h4>
                        <ul className="list-disc pl-5">
                            <li>
                                <a href="https://goo.gl/maps/6Veq3bdcLk9Xc5iq5" className="underline" target="_blank" rel="noreferrer">San Pedro Square Market</a> &mdash; Food hall featuring all kinds of food and drink.
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/Tj4CVbCFgRNwv4x16" className="underline" target="_blank" rel="noreferrer">Pho Ha noi</a> &mdash; Classic Vietnamese cuisine.
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/3ahPHnLyR3TJhqQC8" className="underline" target="_blank" rel="noreferrer">Duc Huong Sandwiches</a> &mdash; Vietnamese sandwiches, snacks, meal loaf, plus pastries.
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/7USWj38rZi2YGZZv5" className="underline" target="_blank" rel="noreferrer">Paesano Ristorante Italiano</a> &mdash; Contemporary Italian eatery.
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/T3EFicCqiKv6CHxC9" className="underline" target="_blank" rel="noreferrer">La Victoria Taqueria</a> &mdash;
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/MGLWkYZwNKsckpiF8" className="underline" target="_blank" rel="noreferrer">Sushi Maru</a> &mdash; All-purpose Japanese standby for sushi
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/x9vGYV91wfxSBuuGA" className="underline" target="_blank" rel="noreferrer">Gombei</a> &mdash; Relaxed eatery with udon, teriyaki and rice bowls.
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/NWjT6UdKbc1sxC5f9" className="underline" target="_blank" rel="noreferrer">CA Bakehouse</a> &mdash; Asian inspired pastries and cakes, known for their pandan "green" waffle.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-5 mt-7">
                    <div className="flex">
                        <img src={shop} title="Shop till you drop!" alt="Black outline of three shopping bags with a heart above them" className="w-20 mx-auto my-auto" />
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-alegreya">Shopping</h4>
                        <ul className="list-disc pl-5">
                            <li>
                                <a href="https://goo.gl/maps/A1LWW3pZZRaKGBPm7" className="underline" target="_blank" rel="noreferrer">Santana Row and Valley Fair Mall</a> &mdash; If you're a big shopper, you'll love it here.
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/gaPgnYEUaabvrGSq9" className="underline" target="_blank" rel="noreferrer">Stanford Shopping Center</a> &mdash; Another upscale outdoor mall located near Stanford University.
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/Xqe2vKoR4AqohvYr5" className="underline" target="_blank" rel="noreferrer">Great Mall</a> &mdash; If you're looking for more discounts, this outlet mall is a good pick.
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/75d8R6gLJgB3VJyW6" className="underline" target="_blank" rel="noreferrer">Downtown Campbell</a> &mdash; Historic downtown area with a variety of shops and restaurants. Great if you want to check out more local businesses.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-5 mt-7">
                    <div className="flex">
                            <img src={museum} title="Amberly's brother is actually a master in museum studies" alt="Black outline of a museum building" className="w-20 mx-auto my-auto" />
                        </div>
                    <div className="md:col-span-4">
                        <h4 className="font-alegreya">Museums and Sightseeing</h4>
                        <ul className="list-disc pl-5">
                            <li><a href="https://goo.gl/maps/DYf1hsztpWi5FZdd8" className="underline" target="_blank" rel="noreferrer">Cantor Arts Center</a> &mdash; Classic and contemporary art museum located in Stanford University. A great stop if you want to visit the campus.</li>
                            <li><a href="https://goo.gl/maps/5uH8anXNxGGCrZV49" className="underline" target="_blank" rel="noreferrer">Palace of Fine Arts</a> &mdash; Greco-Roman palace and architectural attraction in San Francisco. A popular destination for photos!</li>
                            <li><a href="https://goo.gl/maps/NFGi6i9952Fgvy228" className="underline" target="_blank" rel="noreferrer">Golden Gate Park Museums</a> &mdash; Location of De Young Museum and California Academy of Sciences.</li>
                            <li><a href="https://goo.gl/maps/sgX8APvTBAjcN8hs9" className="underline" target="_blank" rel="noreferrer">Oakland Museum of California</a> &mdash; If you're interested in visiting the East Bay, this is another great museum to visit.</li>
                            <li><a href="https://goo.gl/maps/QdsZ3voAUKZZC38e6" className="underline" target="_blank" rel="noreferrer">Coit Tower</a> &mdash; A historical landmark in San Francisco, you can see a view of the entire city from the top.</li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-5 mt-7">
                    <div className="flex">
                        <img src={hiking} title="Touch grass" alt="Black outline of two mountains and a dotted path leading to them" className="w-20 mx-auto my-auto" />
                    </div>
                    <div className="md:col-span-4">
                        <h4 className="font-alegreya">Outdoors and hiking</h4>
                        <ul className="list-disc pl-5">
                            <li><a href="https://goo.gl/maps/8jD9sQLWCxUYMBbr8" className="underline" target="_blank" rel="noreferrer">Arastradero Preserve Loop</a> &mdash; Palo Alto, open preserve with amazing views.</li>
                            <li><a href="https://goo.gl/maps/Qr7GvFuNLAik995B8" className="underline" target="_blank" rel="noreferrer">Foothills Preserve</a> &mdash; Los Altos, nature preserve with an uphill trail leading to bay vistas.</li>
                            <li><a href="https://goo.gl/maps/4uAWF3zeZAMtDYn67" className="underline" target="_blank" rel="noreferrer">Coyote Valley Open Space</a> &mdash; Morgan Hill, moderate hike with fairytale views.</li>
                            <li><a href="https://goo.gl/maps/PmpCZ1fY9K4bhKdP6" className="underline" target="_blank" rel="noreferrer">Russian Ridge</a> &mdash; Redwood city, there are a number of trails in this space.</li>
                            <li><a href="https://goo.gl/maps/JuDqjnzfcW5YDHej6" className="underline" target="_blank" rel="noreferrer">Half Moon Bay</a> &mdash; See the sunset from this famous Northern Califonia beach!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel;