const suggestions = [
  "Amber Glow",
  "Arctic Frost",
  "Autumn Harvest",
  "Azure Horizon",
  "Berry Bliss",
  "Blush Bloom",
  "Canyon Sunset",
  "Celestial Sky",
  "Citrus Burst",
  "Coastal Breeze",
  "Coral Reef",
  "Crimson Ember",
  "Desert Dusk",
  "Emerald Forest",
  "Golden Hour",
  "Harbor Mist",
  "Ivory Sands",
  "Jade Garden",
  "Lavender Dream",
  "Midnight Ocean",
  "Moonlit Silver",
  "Mountain Pine",
  "Ocean Depths",
  "Peach Sunrise",
  "Rosewood Charm",
  "Sapphire Night",
  "Sunlit Meadow",
  "Terracotta Clay",
  "Twilight Aurora",
  "Winter Glacier"
];

const searchField = document.querySelector(".search-field");
const searchInput = document.querySelector(".search-input");
const suggestionsBox = document.querySelector(".suggestions-box");

searchInput.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];

  if (userData) {
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = "<li>" + data + "</li>");
    });
    searchField.classList.add("active");
  } else {
    searchField.classList.remove("active");
  }
  showSuggestions(emptyArray);
};

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = searchInput.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggestionsBox.innerHTML = listData;
}

const categoriesSelector = document.querySelector(".categories-selector");
const categoriesSelectorSelectBtn = document.getElementById(
  "categories-selector-select-btn"
);

categoriesSelectorSelectBtn.addEventListener("click", () => {
  categoriesSelector.classList.toggle("active");
});

/* sortBySelector */
const sortBySelector = document.querySelector(".sort-by-selector");
const sortBySelectorSelectBtn = document.getElementById(
  "sort-by-selector-select-btn"
);

sortBySelectorSelectBtn.addEventListener("click", () => {
  sortBySelector.classList.toggle("active");
});
