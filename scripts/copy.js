const contactInput = document.querySelector(".contact-mail__input__text");
const copyBtn = document.querySelector(".contact-mail__input .copy-button");
const buttonsContainer = document.querySelector(".contact-mail__input__buttons");
const sendBtn = document.querySelector(".contact-mail__input__buttons button:first-child");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(contactInput.value);
    buttonsContainer.classList.add("active");
    setTimeout(() => {
      buttonsContainer.classList.remove("active");
    }, 2000);
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
});

sendBtn.addEventListener("click", () => {
  window.location.href = `mailto:${contactInput.value}`;
});