document.addEventListener("DOMContentLoaded", function () {
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
      "you are a romantic poem expert and love to write shor poems. Your mission is to generate a 4 lines poem in basic HTML. Make sure to follow user instructions";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios
      .post(apiUrl, {
        prompt: prompt,
        context: context,
        key: apiKey,
      })
      .then(displayPoem);
  }
  let poemFormElement = document.querySelector("#generator-form");
  poemFormElement.addEventListener("submit", generatePrompt);
});
