import React from 'react'
import Map, {Marker} from 'react-map-gl';

const Harita = () => {
  return (
    <div className="w-full flex justify-center mt-12" name="iletisim">

<Map
      mapboxAccessToken="pk.eyJ1IjoidGlyaXR0dHR0IiwiYSI6ImNsdzB1d2RoYjA0dWoyaW51NGhzZ2NrN2YifQ.UyY8USTiTCejqMgcYDy0wQ"
      initialViewState={{
        latitude: 41.007614223980006,
        longitude: 28.660850399491945,
        zoom: 11,
        bearing: 0,
        pitch: 50,

        
      }}
      style={{position: 'relative', width: '100%', height: 400, position: 'relative',}}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      >
      <Marker longitude={28.660850399491945} latitude={41.007614223980006} anchor="bottom" >
        <img src="./pic/map.png" />  
      </Marker>
     
    </Map>;

    </div>
  )
}

export default Harita