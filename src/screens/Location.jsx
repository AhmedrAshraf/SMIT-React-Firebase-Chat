import React from "react";
import GoogleMapReact from 'google-map-react';
import Navbar from "../components/navbar";

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 24.925729,
            lng: 67.090001
        },
        zoom: 25
    };

    return (
        <div className="bg-neutral-700 h-[100vh]">
            <Navbar />
            <div className="h-[80vh] w-11/12 mx-auto ">
                <GoogleMapReact
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                </GoogleMapReact>
            </div>
        </div>
    );
}
