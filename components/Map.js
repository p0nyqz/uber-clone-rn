import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import {useDispatch, useSelector} from "react-redux";
import {selectDestination, selectTravelTimeInformation, setTravelInformation} from "../slices/navSlice";
// import MapViewDirections from "react-native-maps-directions";
// import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
// import { GOOGLE_MAPS_APIKEY } from "@env";
import { useRef } from "react";

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    // const dispatch = useDispatch();

    useEffect(() => {
        // if (!origin || !destination) return;

        // Zoom and fit to markers
        // mapRef.current.fitToSupplieMarkers(['origin', 'destination'],{
        //     edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
        // });

    }, [origin, destination]);

    useEffect(()=> {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            // fetch('https://maps.googleapi.com/maps/api/distancematrix/json?units=imperial&origin=$(origin.description)&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}'
            // ).then((res) => res.json())
            // .then(data => {
            //     dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
            //    // console.log(data)
            // });
        };

        getTravelTime()
    },[origin, destination])
    //GOOGLE_MAP_APIKEY



    return (
    <MapView
        ref={mapRef}

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

        { /*origin && destination && (
            < MapViewDirections
                origin={origin.description}
                destination={destination.description}
                // apikey={GOOGLE_MAP_APIKEY}
                strokeWidth={3}
                strokeColor='black'
            />
        ) */}

        <Marker
            coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
                // latitude: origin.location.lat,
                // longitude: origin.location.lng,
            }}
            pinColor='black'
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

        {/* {destination?.location && (
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
