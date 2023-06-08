import React, { useState } from "react";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query } from "firebase/firestore"; 
import db from "../../firebase";

function LockScreen (props) {
    const [submitting, setSubmitting] = useState(false);
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const auth = getAuth();
    var bcrypt = require('bcryptjs');

    async function fetchPassword() {
        const passwordRef = collection(db, "password");
        const passwordQuery = query(passwordRef);
        const passwordSnapshot = await getDocs(passwordQuery);
        const passwordList = passwordSnapshot.docs.map(doc => doc.data());
        const passwordHash = passwordList[0].password;
        return passwordHash;
    };

    const handleChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        setSubmitting(true);
        event.preventDefault();
        if (password === "") {
            return;
        }
        const hash = await fetchPassword();
        if (bcrypt.compareSync(password, hash)) {
            signInAnonymously(auth)
                .then(() => {
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            // User is signed in
                            const uid = user.uid;
                            document.cookie = `authSession=${uid}; SameSite=strict; Secure`
                            props.setLock(false);
                        } else {
                            setErrorMessage("There was a problem logging in, please try again later.")
                        }
                    });
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        } else {
            setErrorMessage("Password was incorrect.")
            setShowError(true);
            setSubmitting(false);
        }
    }

    return (
        <div>
            {!submitting ? (
                <div className="flex justify-center items-center text-center h-screen">
                    <div className="flex flex-col">
                        <h1 className="text-center font-windsong">Amberly &amp; Austin</h1>
                        <h4 className="font-alegreya">Please enter the event password.</h4>
                        <p className="m-0">See your invitation for the event password. If you have lost your invitation, please contact us.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="w-1/2 mx-auto my-5">
                                <input
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={password}
                                    onChange={handleChange}
                                    required/>
                            </div>
                            <button
                                className="max-w-md mx-auto btn primary"
                                type="submit">
                                Enter website
                            </button>
                        </form>
                        <p className={`${showError ? "" : "hidden"}`}>{errorMessage}</p>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center place-items-center h-screen">
                    <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            )}
        </div>
    );
}

export default LockScreen;