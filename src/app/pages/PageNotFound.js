import React, { useEffect } from "react";

function PageNotFound(props) {
    useEffect(() => {
        props.setShowNav(false);
    });
    return(
        <div className="h-fit">
            <hr />
            <h3 className="font-alegreya text-center">Page not found</h3>
            <p className="text-center">
                Oops! Looks like there's nothing here.
            </p>
        </div>
    )
}

export default PageNotFound;