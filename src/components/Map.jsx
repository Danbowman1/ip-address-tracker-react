import React from 'react'
import { Marker, MapContainer, TileLayer } from 'react-leaflet'

const Map = ( { ip } ) => {

    const lat = ip.location?.lat
    const lng = ip.location?.lng
    console.log(lat)

    return (
        <MapContainer center={[lat, lng]} zoom={13} >
        <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]}>

        </Marker>
        </MapContainer>
    )
}

export default Map