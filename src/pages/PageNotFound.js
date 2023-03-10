import React, { useEffect } from "react";

function PageNotFound(props) {
    useEffect(() => {
        props.setShowNav(false);
    });
    return(
        <div className="h-screen">
            <hr />
            Oops! Looks like there's nothing here.
        </div>
    )
}

export default PageNotFound;