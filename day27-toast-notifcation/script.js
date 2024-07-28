const button = document.querySelector("#button");
const toasts = document.querySelector("#toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
  "Message Six",
  "Message Seven",
  "Message Eight",
  "Message Nine",
  "Message Ten",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(getRandomType()); // Use the function to get a random type

  notif.innerText = getRandomMessage(); // Use the function to get a random message

  toasts.appendChild(notif); // Corrected to use 'toasts' instead of 'toast'

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
