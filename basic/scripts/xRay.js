function xRay() {
  const fruit = document.querySelector(".fruit");
  const ring = document.querySelector(".ring");
  const backSlice = document.querySelector(".back-slice");
  fruit.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    ring.style.left = x - 28 + "px";
    ring.style.top = y - 28 + "px";
    backSlice.style.clipPath = `circle(25px at ${x}px ${y}px)`;
  });

  backSlice.addEventListener("mouseleave", () => {
    ring.style.left = "-100px";
    backSlice.style.clipPath = "circle(0% at 50% 50%)"; // Hide the effect
  });
}

export default xRay;
