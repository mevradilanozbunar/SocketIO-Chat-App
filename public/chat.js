const socket = io.connect("https://socketio-chat-2v2j.onrender.com");
// projeyi localde çalıştırıyorsanız urli değiştirin; http://localhost:3000

const sender = document.getElementById("sender");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");
const avatar = document.getElementById("avatar");

submitBtn.addEventListener("click", () => {
  sendMessage();
});

message.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault(); // Enter'ın varsayılan işlevini engelle
    submitBtn.click(); // Butona tıklama olayını tetikle
  }
});

function scrollToBottom() {
  output.scrollTop = output.scrollHeight;
}

function sendMessage() {
  if (sender.value.trim() !== "") {
    if (message.value.trim() !== "") {
      sender.setAttribute("readonly", true);
      sender.setAttribute("disabled", true);
      socket.emit("chat", { message: message.value, sender: sender.value });
      message.value = "";
      scrollToBottom();
    } else {
      feedback.innerHTML = "";
    }
  } else {
    alert("Lütfen nickname giriniz!");
  }
}

socket.on("chat", (data) => {
  feedback.innerHTML = "";
  output.innerHTML += `<div class="message ${
    sender.value === data.sender && "message-personal"
  } new"><figure class="avatar"><img src="${avatar.src}" /></figure><span>${
    data.message
  }</span><div class="timestamp">${data.sender}</div></div>`;
  scrollToBottom();
});

message.addEventListener("keyup", () => {
  if (sender.value.trim() !== "") {
    const data = { sender: sender.value, message: message.value };
    socket.emit("typing", data);
  }
});

socket.on("typing", (data) => {
  if (data.message) {
    feedback.innerHTML = `<div class="feedback"><span>${data.sender}</span> typing...</div>`;
  } else {
    feedback.innerHTML = "";
  }
});