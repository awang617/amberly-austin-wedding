import React, { useState, useEffect } from 'react';
import {
    // Routes,
    // Route,
    Link,
    useLocation
} from "react-router-dom";
// import Faqs from './pages/Faqs';
// import Home from './pages/Home';
// import OurStory from './pages/OurStory';
// import Registry from './pages/Registry';
// import Rsvp from './pages/Rsvp';
// import Schedule from './pages/Schedule';
// import Travel from './pages/Travel';
// import WeddingParty from './pages/WeddingParty/WeddingParty';
// import PageNotFound from './pages/PageNotFound';

function Navigation(props) {

    const [showNav, setShowNav] = useState(false);
    const location = useLocation();
    const getIsMobile = () => window.innerWidth <= 767;
    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
        setShowNav(false);
    }, [location]);

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
            setShowNav()
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    
    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <div>
            <div>
                <div id="navigation">
                    {/* <h1 className="text-center font-windsong pt-20 pb-5 no-hover">
                        <Link to="/" className="no-hover">Amberly &amp; Austin</Link>
                    </h1> */}
                    <div className="text-center">
                        <button onClick={toggleNav} className="md:hidden link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${showNav ? "hidden" : ""} w-6 h-6`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${showNav ? "" : "hidden"} w-6 h-6`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                        <ul className={`${showNav || !isMobile ? "" : "hidden"} font-alegreya`}>
                            <li className='md:inline md:mx-4 lg:mx-2 2xl:mx-4'><a href="/">Home</a></li>
                            <li className='md:inline md:mx-4 lg:mx-2 2xl:mx-4'><a href="/rsvp">Rsvp</a></li>
                            <li className='md:inline md:mx-4 lg:mx-2 2xl:mx-4'><a href="/our-story">Our Story</a></li>
                            <li className='md:inline md:mx-4 lg:mx-2 2xl:mx-4'><a href="/wedding-party">Wedding Party</a></li>
                            <li className='md:inline md:mx-4 lg:mx-2 2xl:mx-4'><a href="/schedule">Schedule</a></li>
                            <li className='md:inline md:mx-4 lg:mx-2 2xl:mx-4'><a href="/travel">Travel</a></li>
                            <li className='md:inline md:mx-4 lg:mx-2 2xl:mx-4'><a href="/registry">Registry</a></li>
                            <li className='md:inline md:mx-4 lg:mx-2 2xl:mx-4'><a href="/faqs">FAQs</a></li>
                        </ul>
                    </div>

                    <hr />
                </div>
                {/* <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/rsvp" element={<Rsvp />} />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route path="/wedding-party" element={<WeddingParty />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/travel" element={<Travel />} />
                    <Route path="/registry" element={<Registry />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes> */}
            </div>
        </div>
    )
}

export default Navigation;