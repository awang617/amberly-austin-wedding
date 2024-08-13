import React, { useEffect, useState } from "react";
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Footer from "../navigation/Footer";
import '../../index.css';
import Faqs from '../pages/Faqs';
import Home from '../pages/Home';
import OurStory from '../pages/OurStory';
import Registry from '../pages/Registry';
import Rsvp from '../pages/Rsvp';
import Schedule from '../pages/Schedule';
import Travel from '../pages/Travel';
import WeddingParty from '../pages/WeddingParty/WeddingParty';
import PageNotFound from '../pages/PageNotFound';
import LockScreen from "./LockScreen";

function App() {
	const [lock, setLock] = useState(false);
	const [showNav, setShowNav] = useState(true);

	useEffect(() => {
		if (document.cookie !== "" && document.cookie.includes("authSession")) {
			setLock(false);
		}
	}, []);

  	return (
		<div className="bg-white/80 lg:w-3/4 lg:mx-auto lg:px-20 xl:w-3/5">
			{!lock && 
				<h1 className="text-center font-windsong pt-20 pb-5 no-hover">
					<Link to="/" className="no-hover">Amberly &amp; Austin</Link>
				</h1>
			}
			{lock && <LockScreen lock={lock} setLock={setLock}/> }
			{showNav && !lock ? <Navigation lock={lock}/> : null}
			{!lock &&
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/rsvp" element={<Rsvp />} />
					<Route path="/our-story" element={<OurStory />} />
					<Route path="/wedding-party" element={<WeddingParty />} />
					<Route path="/schedule" element={<Schedule />} />
					<Route path="/travel" element={<Travel />} />
					<Route path="/registry" element={<Registry />} />
					<Route path="/faqs" element={<Faqs />} />
					<Route path="*" element={<PageNotFound setShowNav={setShowNav}/>} />
				</Routes>
			}
			{showNav && !lock ? <Footer lock={lock}/> : null}
		</div>
	);
}

export default App;