import React from "react";
import GoogleMapReact from 'google-map-react';


class GoogleMapComponent extends React.PureComponent {
    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyDwCk7q9AVI9DvQjsFUTN69jnYXqqX8HZs',
                }}
                {...this.props}
            />
        );
    }
}

export default GoogleMapComponent