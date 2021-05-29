import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 100000000,
    coords: {
      speed: 0,
      heading: 0,
      acccuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.0312186 + increment * tenMetersWithDegrees, // Apple Headquarter at Cupertino
      latitude: 37.33233141 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);

// Basically, whenever we import this file, we're going to emit an EventEmitter once every second straight to 'expo-location'
// and we'e essentially faking out the user's current location in the real world. The 'watchId' prop is just a little bit of
// background code. The important prop is the location which will be moved by '10 meters' in latitude and longitude every second.

// This is only for testing purposes. This will not be exported anywhere on production.
