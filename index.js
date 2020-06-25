/** @format */

const { hash } = window.location;

const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  encrypted = btoa(document.querySelector("#message-input").value);
  const output = document.querySelector("#link-input");
  output.value = `${window.location}#${encrypted}`;
  output.select();
});
