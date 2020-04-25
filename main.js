const pets = [
  {
    image: "https://media1.popsugar-assets.com/files/thumbor/C04Z8ssCUV7WLn_lwmOTLD2haz0/358x0:3543x3185/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/08/07/730/n/44701584/2a00446a5d4afd18bde650.59840750_/i/Pictures-Dogs-Making-Funny-Faces.jpg",
    name: "Bark Twain",
    color: "white & brown",
    specialSkill: "Smokes cigars like a boss",
    typeOfPet: "dog"
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg",
    name: "Cat Benetar",
    color: "white/gray",
    specialSkill: "Staring at you while you eat",
    typeOfPet: "cat"
  },
  {
    image: "https://indianapublicmedia.org/wpimages/amomentofscience/2019/05/Amazon-parrot.jpg",
    name: "Stephen Squawking",
    color: "red/blue",
    specialSkill: "Telling everyone what you say about them in secret",
    typeOfPet: "bird"
  },
  {
    image: "https://cutecatsanddogs.com/wp-content/uploads/2014/10/funny-videos-funny-cats-funny-ca1.jpg",
    name: "Puma Thurman",
    color: "white/brown",
    specialSkill: "Stalking the vacuum cleaner",
    typeOfPet: "cat"
  },
  {
    image: "https://i.insider.com/5c005d9bac00e20fe169f725?width=1100&format=jpeg&auto=webp",
    name: "Chewbarka",
    color: "brown",
    specialSkill: "Can destroy your house in under 5 minutes",
    typeOfPet: "dog"
  }
]

const printDomString = (selector, domString) => {
  document.querySelector(selector).innerHTML = domString;
}

const createPetDivs = (array) => {
  let domString = '';
  for (let i=0; i < array.length; i++) {
    domString += `<div class="${array[i].typeOfPet} petCards">`;
    domString += `<header>${array[i].name}</header>`;
    domString += `<div class="content">`;
    domString += `<img src="${array[i].image}">`;
    domString += `<p class="color">${array[i].color}</p>`;
    domString += `<p>${array[i].specialSkill}</p>`;
    domString += `</div>`;
    domString += `<footer>${array[i].typeOfPet}</footer>`;
    domString += `</div>`;
  }
  printDomString('#pets', domString);
}

//function that loops through divs and changes display based on click
const showHideDivs = (divClass, clickedId) => {
  let divs = document.getElementsByClassName(divClass);
  console.log(clickedId);
  for (i = 0; i < divs.length; i++) {
    if (clickedId == "all") {
      divs[i].style.display = "block";
    } else {
      if (divs[i].className.includes(clickedId)) {
        divs[i].style.display = "block";
      } else {
        divs[i].style.display = "none";
      }
    }
  }
}

//programatically create event listeners
const createListeners = (menuId, targetDivClass) => {
  const menuItems = document.querySelector(menuId).children;
    for (i=0; i < menuItems.length; i++) {
      document.getElementById(menuItems[i].id).addEventListener("click", function() {
        showHideDivs(targetDivClass, this.dataset.animalType)
      }, false);
    }
}

const init = () => {
  createPetDivs(pets);
  createListeners("#refinePets", "petCards");
}

init();
