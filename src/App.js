import React, { useState } from "react";
import {
    Routes,
    Route,
    Link,
    // useLocation
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navigation from "./Navigation";
import Footer from "./Footer";
import './index.css';
import Faqs from './pages/Faqs';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Registry from './pages/Registry';
import Rsvp from './pages/Rsvp';
import Schedule from './pages/Schedule';
import Travel from './pages/Travel';
import WeddingParty from './pages/WeddingParty/WeddingParty';
import PageNotFound from './pages/PageNotFound';
import LockScreen from "./LockScreen";

function App() {
	const [lock, setLock] = useState(true);
	const [showNav, setShowNav] = useState(true);
	const [user, setUser] = useState(null);
	const auth = getAuth();

	// onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/firebase.User
    //       const uid = user.uid;
    //       console.log("user??");
	// 	  setUser(user);
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //     }
    // });
	
  	return (
		<div className="bg-white/80 lg:w-3/4 lg:mx-auto lg:px-20 xl:w-3/5">
			{user !== null && 
				<h1 className="text-center font-windsong pt-20 pb-5 no-hover">
					<Link to="/" className="no-hover">Amberly &amp; Austin</Link>
				</h1>
			}
			{user === null && <LockScreen lock={lock} setLock={setLock} setUser={setUser}/> }
			{showNav && user !== null ? <Navigation lock={lock}/> : null}
			{user !== null &&
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
			{showNav && user !== null ? <Footer lock={lock}/> : null}
		</div>
	);
}

export default App;