import React from "react";
import GoogleMapReact from 'google-map-react';
import { useSelector } from "react-redux";
import { FaMapPin } from 'react-icons/fa';
import '../styles/MapView.css'
// import { ReactBingmaps } from "react-bingmaps";

function MapView() {

    const camps = useSelector(state => state.CampListReducer);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyCjXYAz7J_-950JDpthR0k2F2FS3r6zjnw" }} defaultCenter={{lat: 28.65195, lng: 77.23149}} defaultZoom={0} >
            {
                camps.camp_list.map((item, index) => {
                    return <FaMapPin key={index} className="pin" lat={item["_host_coordinates"]["latitude"]} lng={item["_host_coordinates"]["longitude"]} text={item["title"]["rendered"]}/>
                })
            }
        </GoogleMapReact>
        </div>
    );
}

export default MapView;
