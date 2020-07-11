import React from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PropTypes from "prop-types";

import _isEqual from 'lodash/isEqual';

const style = {
    width: '100%',
    height: '250px',
    position: 'relative',
    marginTop: '10px',
};

class GoogleMapComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            markers: [
                {
                    name: "Current position",
                    position: {
                        lat: 37.77,
                        lng: -122.42
                    }
                }
            ]
        }
    }

    componentDidMount() {
        this.setState({
            markers: this.props.markers,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!_isEqual(this.props.markers, prevState.markers)) {
            this.setState({
                markers: this.props.markers,
            });
        }
    }

    onMapClicked = (event) => {
        console.log(event);
    };

    onMarkerDragEnd = (coord, index) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        const markers = [...this.state.markers];
        markers[index] = { ...markers[index], position: { lat, lng } };
        this.setState({
            markers,
        });
        this.props.changePos(markers[0]);
    };

    render() {
        return (
            <div style={style}>
                <Map google={this.props.google}
                     style={style}
                     zoom={17}
                     gestureHandling='cooperative'
                     street
                     onClick={this.onMapClicked}
                     center={this.state.markers[0].position}
                     streetViewControl={false}
                >
                    {this.state.markers.map((marker, index) => (
                        <Marker
                            key={marker.name}
                            position={marker.position}
                            draggable={true}
                            onDragend={(t, map, coord) => this.onMarkerDragEnd(coord, index)}
                            name={marker.name}
                        />
                    ))}
                </Map>
            </div>
        );
    }
}

GoogleMapComponent.propTypes = {
    changePos: PropTypes.func,
    markers: PropTypes.array,
};

GoogleMapComponent.defaultProps = {
    markers: [{
        name: "Current position",
        position: {
            lat: 37.77,
            lng: -122.42
        }
    }]
};

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDwCk7q9AVI9DvQjsFUTN69jnYXqqX8HZs')
})(GoogleMapComponent)