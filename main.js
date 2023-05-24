const rating = document.getElementById("rating");
const submitInput = document.getElementById("submit");
let rate = 5;
const form = document.getElementById("myForm");

submitInput.addEventListener("click", () => {
  form.action = "/thanks.html?rating="+rate;
})

for (let i = 1; i <= 5; i++) {
  const rate = createRate(i);
  const radioInput = createInputRadio(i);
  rate.appendChild(radioInput);
  rating.appendChild(rate);

}

function createRate(id) {
  const rate = document.createElement("label");
  rate.setAttribute("for", id);
  rate.setAttribute("id", "rate" + id);
  rate.innerHTML = id;
  return rate;
}

function createInputRadio(id) {
  const input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("name", "rating");
  input.setAttribute("id", id);
  input.setAttribute("value", id);
  return input;
}

document.addEventListener("click", (e) => {
  if (e.target.id.substring(0, 4) == "rate") {
    [...rating.childNodes].map((rate) => rate?.classList?.value == "active" ? rate?.classList.remove("active") : "" ) ;
    e.target.classList.add("active");

    rate = e.target.childNodes[1].value
  }
})
