import "./style.css";
import Retrieval from "./retrieve";
import EltCreator from "./DOMUpdate";

const search = document.querySelector("#search");
const submitBtn = document.querySelector("#submit");
const content = document.querySelector(".content");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const location = search.value;

  Retrieval.searchLocation(location).then((result) => {
    content.textContent = "";
    EltCreator.createMenu(result);
  });
});
