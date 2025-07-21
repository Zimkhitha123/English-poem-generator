function displayPoem(response){
  new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay:1,
  cursor:"",
});
}


function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "d30t4b87a85aoafbb624a05843fdcb6d";
let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
    let context="You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Make sure to folle the user instructions.Do not include the tittle to the poem. Sign the poem with `SheCodes AI`inside a <strong></strong> element at the end of a poem";
    let apiURL =`//api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    // make the call to the api
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class ="generating">⏳Generating a English poem about  ${instructionsInput.value}</div>`;


    axios.get(apiURL).then(displayPoem);
    
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);
