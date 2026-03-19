let question_1_text =
  "Power outlets are 120 volts (the same as in the United States). ";
let question_2_text =
  "Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m. ";
let question_3_text =
  "The drinking age on Taniti is 18 and the drinking age is not strictly enforced. ";
let question_4_text =
  "Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.";
let question_5_text =
  "There is one hospital and several clinics. The hospital has many multilingual employees.";
let question_6_text =
  "Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes. ";
let question_7_text =
  "Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.";
let question_8_text =
  "Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.";

let question_1_button = document.querySelector("#question-1-button");
let question_2_button = document.querySelector("#question-2-button");
let question_3_button = document.querySelector("#question-3-button");
let question_4_button = document.querySelector("#question-4-button");
let question_5_button = document.querySelector("#question-5-button");
let question_6_button = document.querySelector("#question-6-button");
let question_7_button = document.querySelector("#question-7-button");
let question_8_button = document.querySelector("#question-8-button");

let is_question_1_clicked = false;
let is_question_2_clicked = false;
let is_question_3_clicked = false;
let is_question_4_clicked = false;
let is_question_5_clicked = false;
let is_question_6_clicked = false;
let is_question_7_clicked = false;
let is_question_8_clicked = false;

function handleClick(button, text, is_clicked) {
  if (is_clicked) {
    button.removeChild(button.lastChild);
  } else {
    let p = document.createElement("p");
    p.textContent = text;
    p.classList.add("padding-please");
    button.appendChild(p);
  }
}
question_1_button.addEventListener("click", function () {
  handleClick(question_1_button, question_1_text, is_question_1_clicked);
  is_question_1_clicked = !is_question_1_clicked;
});
question_2_button.addEventListener("click", function () {
  handleClick(question_2_button, question_2_text, is_question_2_clicked);
  is_question_2_clicked = !is_question_2_clicked;
});
question_3_button.addEventListener("click", function () {
  handleClick(question_3_button, question_3_text, is_question_3_clicked);
  is_question_3_clicked = !is_question_3_clicked;
});
question_4_button.addEventListener("click", function () {
  handleClick(question_4_button, question_4_text, is_question_4_clicked);
  is_question_4_clicked = !is_question_4_clicked;
});
question_5_button.addEventListener("click", function () {
  handleClick(question_5_button, question_5_text, is_question_5_clicked);
  is_question_5_clicked = !is_question_5_clicked;
});
question_6_button.addEventListener("click", function () {
  handleClick(question_6_button, question_6_text, is_question_6_clicked);
  is_question_6_clicked = !is_question_6_clicked;
});
question_7_button.addEventListener("click", function () {
  handleClick(question_7_button, question_7_text, is_question_7_clicked);
  is_question_7_clicked = !is_question_7_clicked;
});
question_8_button.addEventListener("click", function () {
  handleClick(question_8_button, question_8_text, is_question_8_clicked);
  is_question_8_clicked = !is_question_8_clicked;
});
