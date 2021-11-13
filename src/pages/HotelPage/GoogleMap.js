import React, { Component } from 'react'
import { Key } from './Key' // 引入 API key
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

// Map
function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 25.0329984,
      lng: 121.5414081,
    },
    zoom: 14,
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '70%', margin: '10rem auto' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: Key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={25.03371} lng={121.564718} text="TaiPei 101" />
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap
