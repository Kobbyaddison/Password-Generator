const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=[]{}:;<>?/".split("");

const genButton = document.getElementById("gen-button");
const randPass1 = document.getElementById("rand-pass-1");
const randPass2 = document.getElementById("rand-pass-2");
const lengthInput = document.getElementById("length-input");


genButton.addEventListener("click", function(){
    randPass1.textContent = "";
    randPass2.textContent = "";

  const length = parseInt(lengthInput.value) || 12;
  
  for (let i = 0; i < length; i++){
    let randomPassword1 = Math.floor(Math.random() * characters.length);
    let randomPassword2 = Math.floor(Math.random() * characters.length);

    randPass1.textContent += characters[randomPassword1];
    randPass2.textContent += characters[randomPassword2];
}
});

function copyToClipboard(element){
  const text = element.textContent;
   if (!text) return; // do nothing if empty

  navigator.clipboard.writeText(text).then(() => {
    element.textContent = "Copied!";

  setTimeout(() => {
    element.textContent = text;
  }, 2000);
});
}
randPass1.addEventListener("click", function() {
  copyToClipboard(randPass1);
});

randPass2.addEventListener("click", function() {
  copyToClipboard(randPass2);
}); 