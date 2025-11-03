function generateAi(event) {
  event.preventDefault;
}
new Typewriter("#poem", {
  strings: ["e nel mezzo del cammin"],
  autoStart: true,
  cursor: "",
  delay: 1,
});

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generateAi);
