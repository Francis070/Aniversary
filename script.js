const question = "What is Itilipsha's lost phone number?";
const answer = "7978380185";

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
  const userAnswer = prompt("Checking if you are Itilipsha or not. \n" + question);
  checkAnswer(userAnswer);
});

function checkAnswer(userAnswer) {

  if (userAnswer === null) {
    // User canceled, do nothing
    return;
  }

  if (userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
    // Correct answer, show alert and then move to next page
    alert("Correct answer!");
    window.location.href = "propose.html";
  } else {
    // Incorrect answer, show message
    alert("Incorrect answer. Please try again.");
  }
}
