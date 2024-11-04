import GetPlayer from "./getPlayer.js";
import xRay from "./xRay.js";
import { clickMe } from "./examples.js";
const main = () => {
  xRay();

  const player = new GetPlayer([{ MyVariableName: "Hola" }]);
  // player.ShowVar("MyVariableName");
  player.SetVar("MyVariableName", "Marcos");
  // player.ShowVar("MyVariableName");
  // const playerDOM = new GetPlayerDOM();

  // document.querySelectorAll("[data-acc-text]");
  // document.querySelectorAll("[data-model-id]");

  clickMe();
};

document.addEventListener("DOMContentLoaded", main);
