function myFunction(){
    const userInput = document.getElementById("userInput");
    let message = document.querySelector("#message");
    message.innerHTML = "Welcome to my webpage" + ", " + userInput.value;
}