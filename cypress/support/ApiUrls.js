const API = {
  BaseURL: "http://localhost:9000",
  Token: "Bearer challenge",
  apiStates: "/api/power-plants/search/state/{stateName}?limit=200",
  states: "/api/states",
  searchPowerPlants: "/api/power-plants/search/",
  topSearchPowerPlants: "/api/power-plants/search/top",
  powerPlantsByID: "/api/power-plants/{powerPlantID}",
  powerPlantsByState: "/api/power-plants/search/state/{state}",
};
export default API;
