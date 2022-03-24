const messageIn = document.querySelector("#messageIn")

const messageOut = document.querySelector("#messageOut")

const sendBtn = document.querySelector("#sendBtn")

sendBtn.addEventListener("focus", sendMessage)

function sendMessage() {
    const content = messageIn.value;
    if (content === ""){
        alert("Please Type something here")
    }
    else{
        messageOut.innerHTML = content;
        messageIn.value = "";
    }
}