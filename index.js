async function fetchAdvice() {
  let advice;
  await fetch("	https://api.adviceslip.com/advice").then((res) =>
    res.json().then((data) => (advice = data.slip))
  );
  adviceText.textContent = advice.advice;
  adviceId.textContent = `Advice #${advice.id}`;
}

adviceBtn.addEventListener("click", fetchAdvice);
window.onload = fetchAdvice();
