import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

// const GoogleMapComponent = compose(
// //     <iframe
// //     className="mt-2"
// //     width="100%" height="300px"
// //     src="https://maps.google.com/maps?hl=en&amp;q=-33.8714672,151.2080955&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
// //     frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
// // />
//     withProps({
//         /**
//          * Note: create and replace your own key in the Google console.
//          * https://console.developers.google.com/apis/dashboard
//          * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
//          */
//         googleMapURL:
//             "https://maps.google.com/maps?hl=en&amp;q=-33.8714672,151.2080955&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed\"",
//         loadingElement: <div style={{ height: `100%` }} />,
//         containerElement: <div style={{ height: `400px` }} />,
//         mapElement: <div style={{ height: `100%` }} />
//     }),
//     withScriptjs,
//     withGoogleMap
// )(props => (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//         {props.isMarkerShown && (
//             <Marker position={{ lat: -34.397, lng: 150.644 }} />
//         )}
//     </GoogleMap>
// ));

const GoogleMapComponent = () => (
    <iframe
        className="mt-2"
        width="100%" height="250px"
        src="https://maps.google.com/maps?hl=en&amp;q=-33.8714672,151.2080955&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
    />
);

export default GoogleMapComponent;