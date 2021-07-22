import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;
const MS_IN_ONE_SEC = 1000;
let counter = 0;

const getLocation = (increment) => {
  return {
    timestamp: 1000000 + counter * MS_IN_ONE_SEC,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.0312186 + increment * tenMetersWithDegrees,
      latitude: 37.33233141 + increment * tenMetersWithDegrees,
    },
  };
};

const timer = setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);

if (timer > 120) {
  clearInterval(timer);
}
