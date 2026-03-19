let restaurant_text =
  "Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.";

let grocery_text =
  "Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day. ";

let lodging_text =
  "Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government.";
let entertainment_text =
  "Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano. However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay. ";

let sightseeing_text =
  "Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. Other popular activities include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano.";
let transportation_text =
  "Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years.";

let ground_transportation_text =
  "Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island. Taxis are available in Taniti City, and rental cars can be rented from a local rental agency near the airport. Bikes and helmets are available to rent from several vendors (helmets are required by law). Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot.";

let restaurant_button = document.querySelector("#restaurants-button");
let grocery_button = document.querySelector("#grocery-button");
let lodging_button = document.querySelector("#lodging-button");
let entertainment_button = document.querySelector("#entertainment-button");
let sightseeing_button = document.querySelector("#sightseeing-button");
let transportation_button = document.querySelector("#transportation-button");
let ground_transportation_button = document.querySelector(
  "#ground-transportation-button",
);

let is_restaurant_clicked = false;
let is_grocery_clicked = false;
let is_lodging_clicked = false;
let is_entertainment_clicked = false;
let is_sightseeing_clicked = false;
let is_transportation_clicked = false;
let is_ground_transportation_clicked = false;

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

restaurant_button.addEventListener("click", function () {
  handleClick(restaurant_button, restaurant_text, is_restaurant_clicked);
  is_restaurant_clicked = !is_restaurant_clicked;
});
grocery_button.addEventListener("click", function () {
  handleClick(grocery_button, grocery_text, is_grocery_clicked);
  is_grocery_clicked = !is_grocery_clicked;
});
lodging_button.addEventListener("click", function () {
  handleClick(lodging_button, lodging_text, is_lodging_clicked);
  is_lodging_clicked = !is_lodging_clicked;
});
entertainment_button.addEventListener("click", function () {
  handleClick(
    entertainment_button,
    entertainment_text,
    is_entertainment_clicked,
  );
  is_entertainment_clicked = !is_entertainment_clicked;
});
sightseeing_button.addEventListener("click", function () {
  handleClick(sightseeing_button, sightseeing_text, is_sightseeing_clicked);
  is_sightseeing_clicked = !is_sightseeing_clicked;
});
transportation_button.addEventListener("click", function () {
  handleClick(
    transportation_button,
    transportation_text,
    is_transportation_clicked,
  );
  is_transportation_clicked = !is_transportation_clicked;
});
ground_transportation_button.addEventListener("click", function () {
  handleClick(
    ground_transportation_button,
    ground_transportation_text,
    is_ground_transportation_clicked,
  );
  is_ground_transportation_clicked = !is_ground_transportation_clicked;
});
