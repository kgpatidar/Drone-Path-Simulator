export const DEMO_ROUTE_1 = [
  "22.734225,75.848088",
  "22.720759,75.835261",
  "22.716701,75.858048",
  "22.719235,75.868526",
  "22.721452,75.886047",
  "22.726993,75.883127",
  "22.727627,75.874882",
  "22.729431,75.874589",
  "22.734225,75.848088",
].map((coord) => {
  const [latitude, longitude] = coord.split(",");
  return { latitude, longitude, time: new Date() };
});

export const DEMO_ROUTE_2 = [
  {
    latitude: -26.805002906760933,
    longitude: 115.36848390332193,
    time: new Date().toISOString(),
  },
  {
    latitude: -26.83564191588656,
    longitude: 115.1858361982438,
    time: new Date().toISOString(),
  },
  {
    latitude: -26.9226114935593,
    longitude: 115.28196656933756,
    time: new Date().toISOString(),
  },
  {
    latitude: -26.91771357830716,
    longitude: 115.78871095410318,
    time: new Date().toISOString(),
  },
  {
    latitude: -26.755963271817066,
    longitude: 115.67747438183756,
    time: new Date().toISOString(),
  },
];
