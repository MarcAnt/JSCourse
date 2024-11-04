import GetPlayer from "./getPlayer.js";
// Get a Storyline variable
// var player = GetPlayer();
// var myVariable = player.GetVar("MyVariableName");

// Set a Storyline variable
// player.SetVar("MyVariableName", "New Value");

// var player = GetPlayer();
// var myVariable = player.GetVar("ShowObject");

// // Show or hide an object based on a variable
// if (myVariable == "true") {
//   player.SetVar("ShowObject", "false");
//   document.getElementById("ObjectName").style.display = "block"; // Adjust object ID accordingly
// } else {
//   player.SetVar("ShowObject", "true");
//   document.getElementById("ObjectName").style.display = "none"; // Adjust object ID accordingly
// }

// var player = GetPlayer();
// var score = player.GetVar("Score");
// var userName = player.GetVar("UserName");

// // Send data to an external server
// fetch("https://example.com/submit", {
//     method: "POST",
//     body: JSON.stringify({ score: score, user: userName }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// });

// function createName(name) {
//   const extraInfo = "JavaScript";
//   return name || "Curso de Storyline 360 con" + " " + extraInfo;
// }

// for (let i = 0; i < 5; i++) {
//   console.log(createName("Mi curso de StoryLine " + (i + 1)));
// }

// var myVarString = "my value";
// let myVarBool = false;
// const myVarNumber = 10;

export const clickMe = () => {
  const $box = document.querySelector("#MyButton");
  const player2 = new GetPlayer([{ Counter: 0 }, { MyButtonColor: "red" }]);
  let counterToNumber = parseInt(player2.GetVar("Counter"));
  let text = $box.textContent;

  //   $box.insertAdjacentText("afterend", player2.GetAllVars());

  $box.addEventListener("click", (e) => {

    counterToNumber++
    player2.SetVar("Counter", counterToNumber.toString());
    $box.innerHTML = text + " " + counterToNumber;

    if (counterToNumber > 4) {
      $box.style.backgroundColor = player2.GetVar("MyButtonColor");
    }

    if (counterToNumber > 8) player2.SetVar("MyButtonColor", "royalblue");
  });
};
