import React, { useState } from "react";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore"; 
import db from "./firebase";

function LockScreen (props) {
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    signInAnonymously(auth)
    .then(() => {
        // Signed in..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    });
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
        event.preventDefault();
        if (password === "") {
            return;
        }
        const hash = await fetchPassword();
        if (bcrypt.compareSync(password, hash)) {
            signInAnonymously(auth)
            .then(() => {
                console.log("signed in");
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                      // User is signed in, see docs for a list of available properties
                      // https://firebase.google.com/docs/reference/js/firebase.User
                      const uid = user.uid;
                      props.setUser(user);
                      // ...
                    } else {
                      // User is signed out
                      // ...
                    }
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });
            // props.setLock(false);
            // navigate("/");
        } else {
            setShowError(true);
        }
    }

    return (
        <div>
            {props.lock ? (
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
                        <p className={`${showError ? "" : "hidden"}`}>Password was incorrect.</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default LockScreen;