const button = document.querySelector(".card__button");
const adviceIndexEl = document.querySelector(".advice-info__index");
const adviceTextEl = document.querySelector(".card__advice-text");

const getJson = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Couldn't get data");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
const giveMeAdvice = async () => {
  try {
    adviceTextEl.style.opacity = 0;
    do {
      let adviceData = await getJson("https://api.adviceslip.com/advice");
      if (!adviceData) throw new Error("Couldn't get data");
      adviceText = adviceData.slip.advice;
      adviceIndex = adviceData.slip.id;
      current = +adviceIndexEl.textContent;
    } while (current === adviceIndex);

    adviceTextEl.textContent = adviceText;
    adviceTextEl.style.opacity = 1;
    adviceIndexEl.textContent = adviceIndex;
  } catch (error) {
    adviceTextEl.textContent = error.message;
  }
};
button.addEventListener("click", giveMeAdvice);
