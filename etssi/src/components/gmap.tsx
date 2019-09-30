import React, { useEffect, useState } from 'react';
import Section from './section';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

import '../css/gmap.css';

function Gmap(props: any) {

    const [activeMarker, setMarker] = useState<google.maps.Marker>();

    return (
        <Section>
            <div className='gmap'>
                <Map google={props.google}>
                    <Marker
                        position={{lat: 37.762391, lng: -122.439192}}
                        onClick={(props, marker) => { setMarker(marker) }}
                    />
                </Map>
            </div>
        </Section>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDA2Fn_yQmqUJMqKd-CmyMC93zTWzNXDsk'
  })(Gmap)