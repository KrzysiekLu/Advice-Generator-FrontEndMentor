const button = document.querySelector(".card__button");

const giveMeAdvice = async () => {
  try {
    const adviceResp = await fetch("https://api.adviceslip.com/advice");
    let curentAdciveIndex;
    if (!adviceResp.ok) throw new Error("Problem with response");
    const adviceData = await adviceResp.json();
    adviceText = adviceData.slip.advice;
    adviceIndex = adviceData.slip.id;

    document.querySelector(".card__advice-text").textContent = adviceText;
    document.querySelector(".advice-info__index").textContent = adviceIndex;

    console.log(curentAdciveIndex, adviceIndex);
  } catch (error) {
    console.error(error.message);
  }
};
button.addEventListener("click", giveMeAdvice);
