import React from "react";
import GoogleMapReact from 'google-map-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '100%',
    height: '250px'
};

class GoogleMapComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            bounds: new this.props.google.maps.LatLngBounds(),
            location: {
                lat: 37.778519,
                lng: -122.405640,
            }
        }
    }

    componentDidMount() {
        this.setState((prevState)=>({
            bounds: prevState.bounds.extend(prevState.location)
        }));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.lat !== prevState.location.lat || this.props.lon !== prevState.location.lng) {
            this.setState((prevState)=>({
                bounds: prevState.bounds.extend({
                    lat: this.props.lat,
                    lng: this.props.lon
                }),
                location: {
                    lat: this.props.lat,
                    lng: this.props.lon
                }
            }));
        }
    }

    onMapClicked = (event) => {
        console.log(event);
    };


    render() {
        return (
            <div style={{height: '250px', width: '100%'}}>
                <Map google={this.props.google}
                     style={style}
                     initialCenter={{lat: 37.778519, lng: -122.405640}}
                     zoom={8}
                     onClick={this.onMapClicked}
                     bounds={this.state.bounds}
                >
                    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        position={{lat: 37.778519, lng: -122.405640}}/>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDwCk7q9AVI9DvQjsFUTN69jnYXqqX8HZs')
})(GoogleMapComponent)