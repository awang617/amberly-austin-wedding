import React from "react";
import schedule from "../assets/schedule.jpg"
import church from "../assets/church.png";
import champagne from "../assets/champagne.png";

function Schedule() {
    return(
        <div>
            <h2 className="font-alegreya text-center">Schedule</h2>
            <img
                src={schedule}
                title="Uwa!! So ROMANTICS!! &#9835;"
                alt=""
            />
            <div className="content-container">
                <div className="grid md:grid-cols-5 mt-10">
                    <div className="md:text-center">
                        <img src={church} title="&#9835; We're going to the chapel, and we're gonna get maaaarried &#9835;" alt="Church icon" className="w-20 md:mx-auto"/>
                        <p className="font-alegreya font-bold hidden md:block">3:00 - 4:00pm</p>
                    </div>

                    <div className="md:col-span-4">
                        <h3 className="font-abhaya mt-0">Ceremony</h3><span className="font-alegreya font-bold md:hidden">3:00 - 4:00pm</span>
                        <p>Join us for our nupital mass! Doors will open at 2:30pm. There is plenty of parking behind the church. Please plan to arrive around 2:45pm, as mass will begin promptly.</p>
                        <p><b>Location:</b> Five Wounds Church, 1375 E Santa Clara St, San Jose, CA</p>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12686.807924506886!2d-121.8639297!3d37.3495636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e2f414e72eeb249!2sFive%20Wounds%20Portuguese%20National%20Parish!5e0!3m2!1sen!2sus!4v1663711808673!5m2!1sen!2sus"
                            className="w-full h-[360px] md:h-[400px]"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="ceremony map"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-5 mt-10">
                    <div className="md:text-center">
                        <img src={champagne} title="*clink" alt="Champagne glasses clinking" className="w-20 md:mx-auto"/>
                        <p className="font-alegreya font-bold hidden md:block">5:00 - 10:00:pm</p>
                    </div>

                    <div className="md:col-span-4">
                        <h3 className="font-abhaya mt-0">Reception</h3><span className="font-alegreya font-bold md:hidden">5:00 - 10:00pm</span>
                        <p>Now that we are officially Mr. and Mrs., here&apos;s where the fun begins! Our reception venue is located but ten minutes away, so you have plenty of time to make it over before cocktail hour at 5:00pm. We will have passed appetizers and drinks on the rooftop. Dinner will begin at 6:00pm. Look forward to a family style dinner, dessert, and lots of dancing!</p>
                        <p><b>Location:</b> Blanco, Urban Venue, 12 N San Pedro St, San Jose, CA</p>
                        <p><b>Parking:</b> The closest parking structure is right next to the venue at Market &amp; San Pedro Square Parking Garage. (Please note there is a fee for weekend parking.)</p>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.294250351845!2d-121.89504168445947!3d37.33554187984175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcd7f5c23503f%3A0xd2fd4e8ecb3ecf05!2sBlanco%20Urban%20Venue!5e0!3m2!1sen!2sus!4v1663712171265!5m2!1sen!2sus"
                            className="w-full h-[360px] md:h-[400px]"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="reception map"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;