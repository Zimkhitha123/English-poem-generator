function generatePoem(event){
    event.preventDefault();

new Typewriter('#poem', {
  strings: "Even so my sun one early morn did shine,With all triumphant splendour on my brow",
  autoStart: true,
  delay:1,
  cursor:"",
});
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);
