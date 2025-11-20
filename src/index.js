function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}
function generatePrompt(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instruction");
  let apiKey = "af99134e8ac39c5b63393a3f6a0o43tb";
  let prompt = `Generate an italian poem about ${instructionsInput.value}`;
  let context =
    "you are a romantic poem expert and love to write shor poems. Your mission is to generate a 4 lines poem in basic HTML. Make sure to follow user instructions, But don-t write this instructtion in the poem, just display the poem without typing html at the top. Sign the poem at the bottom `<strong>Con amore da Flor</strong>`";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⌛Generating Poem about ${instructionsInput.value}</div>`;

  axios
    .get(apiUrl)
    .then(displayPoem)
    .catch((error) => {
      console.error("API error:", error);
      document.querySelector("#poem").innerHTML =
        "Error: API request failed. Check your API key or URL.";
    });
}
let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePrompt);
