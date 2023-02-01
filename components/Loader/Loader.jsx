import React from "react";

const Loader = () => {
    return (
        <>
            <div className="container mx-auto justify-center items-center flex">
                <div className="spinner" style={{ fontSize: '18px' }}>
                    <div className="head"></div>
                </div>
            </div>
        </>
    )
}

export default Loader;