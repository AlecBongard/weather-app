import "./style.css";
import Retrieval from "./retrieve";

Retrieval.searchLocation("New York").then((result) => {
  Retrieval.getWeather(result[0]);
});
