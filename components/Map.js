import React from 'react'
import MapView, {Marker} from 'react-native-maps';
import tw from 'twrnc';
// import { useSelector } from "react-redux";
// import { selectOrigin } from "../slices/navSlice";

const Map = () => {
    // const origin = useSelector(selectOrigin);
  return (
    <MapView
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
            // latitude: origin.location.lat,
            // longitude: origin.location.lng,
            // latitudeDelta: 0.005,
            // longitudeDelta: 0.005,
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        >
        <Marker
            coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
                // latitude: origin.location.lat,
                // longitude: origin.location.lng,
            }}
            title='Origin'
            description='Origin'
            identifier='origin'
        />

        {/* {origin?.location && (
            <Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    // latitude: origin.location.lat,
                    // longitude: origin.location.lng,
                }}
                title='Origin'
                description={origin.description}
                identifier='origin'
            />
        )}*/}

    </MapView>
  );
};

export default Map