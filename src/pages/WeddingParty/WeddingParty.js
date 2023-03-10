import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore"; 
import db from "../../firebase";
import WeddingPartyMember from "./WeddingPartyMember";
import WeddingPartyModal from "./WeddingPartyModal";

function WeddingParty() {
    const [isLoading, setLoading] = useState(false);
    const [bridalParty, setBridalParty] = useState([]);
    const [groomsmen, setGroomsmen] = useState([]);
    const [open, setOpen] = useState(false);
    const [modalDetails, setModalDetails] = useState("");

    async function fetchWeddingParty() {
        if (isLoading) {
            return;
        }
        setLoading(true);
        const weddingPartyRef = collection(db, "weddingParty");
        const weddingPartyQuery = query(weddingPartyRef, orderBy("order"));
        const weddingPartySnapshot = await getDocs(weddingPartyQuery);
        const weddingPartyList = weddingPartySnapshot.docs.map(doc => doc.data());
        const bridalPartyList = weddingPartyList.filter(member => member.side === "bride");
        const groomsmenList = weddingPartyList.filter(member => member.side === "groom");
        setBridalParty(bridalPartyList);
        setGroomsmen(groomsmenList);
        setLoading(false);
    };

    function openModal(details) {
        setOpen(true);
        setModalDetails(details);
    };

    function closeModal() {
        setOpen(false);
    };

    useEffect (() => {
        fetchWeddingParty();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return(
        <div>
            <h2 className="header-text">The Wedding Party</h2>
            <p className="font-alegreya text-center mb-0">
                Meet the wedding party!
            </p>
            <p className="font-alegreya text-center mt-0">
                <span className="lg:hidden">Tap</span><span className="hidden lg:inline">Click</span> each person's picture to see more!
            </p>
        {isLoading ?
        (
            <div className="flex justify-center place-items-center h-screen25">
                <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
        ) : (
            <div className="grid sm:grid-cols-2">
                <div>
                    {bridalParty.length > 0  && (
                        bridalParty.map(m => (
                            <WeddingPartyMember
                                openModal={openModal}
                                key={m.name}
                                {...m}/>
                        ))
                    )}
                </div>
                <div className="mt-6 sm:mt-0">
                    {groomsmen.length > 0  && (
                        groomsmen.map(m => (
                            <WeddingPartyMember
                                openModal={openModal}
                                key={m.name}
                                {...m}/>
                        ))
                    )}
                </div>
                <WeddingPartyModal
                    open={open}
                    setOpen={setOpen}
                    closeModal={closeModal}
                    modalDetails={modalDetails}/>
            </div>
            )
        }
        </div>
    );
}

export default WeddingParty;