const kop = document.querySelector("#row");
const randomElements = document.querySelectorAll(".item");
const inviteButton = document.querySelector(".btn");

inviteButton.addEventListener("click", function ()  {
const sam = parseInt(kop.value);
if(!isNaN(sam) && sam > 0 && sam <= randomElements.length) {
  const navbar = [];
  while (navbar.length < sam ) {
    const nav  = Math.floor(Math.random() * randomElements.length);
    if (!navbar.includes (nav)) {
      navbar.push(nav);
    }
  }
  randomElements.forEach((element, index) => {
    if(navbar.includes(index)) {
      element.textContent = generateRandomNumber();
      element.classList.add("light-blue");
    } else {
      element.textContent = "";
      element.classList.remove("light-blue");
    }
  });
} else {
  alert("xato❌")
}
});
function generateRandomNumber() {
  return Math.floor(Math.random() * 10 ) + 1;
}











//   const kop = document.querySelector("#row");
//   const randomElements = document.querySelectorAll(".item");
//   const inviteButton = document.querySelector(".btn");

// inviteButton.addEventListener("click", function () {
// const sam = parseInt(title.value);
// if(!isNaN(sam) && sam > 0 && sam <= randomElements.length ) {
// const navbar = [];
// while (navbar.length < sam) {
// const tab = Math.floor(Math.random() * randomElements.length);
// if (!navbar.includes(tab)){
// navbar.push(tab);
// }
// }
// randomElements.forEach((element, index) => {
//  if(navbar.includes(index)) {
//   element.textContent = generateRandomNumber();
//   element.classList.add("light-blue");
//  } else {
//   element.textContent = "";
//   element.classList.remove("light-blue");
//  }
// });
// } else {
//  alert("xato❌")
// }
// });

//  function generateRandomNumber() {
//   return Math.floor(Math.random() * 10) + 1;
//  }



















// const person1 = {
//  name:"list";
//   age: 222,
// }
// const person2 = {...person1};
// person2.name = "Mark";
// console.log(person1);
// console.log(person2);

// const person = {
// name :{
// adders: "samarqand",
// app: {
//   age: 12,
// }
// }
// };

// const person2 =  {... person}
// person2.name.adders = {
// ...person.name.adders
// }
// person2.name.adders = "toshkent";
// console.log(person);
// console.log(person2);










