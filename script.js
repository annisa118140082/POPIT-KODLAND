const menuToggle = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");
const servicesWrapper = document.getElementById("service-item-wrapper");
const hamburgerIcon = document.getElementById("ham-icon");

menuToggle.addEventListener("click", function (e) {
  e.preventDefault();
  menuList.classList.toggle("open-menu");

  if (hamburgerIcon.className === "fa fa-bars")
    hamburgerIcon.className = "fa fa-times";
  else {
    hamburgerIcon.className = "fa fa-bars";
  }
});

menuList.querySelectorAll("li").forEach((element) => {
  element.addEventListener("click", (el) => {
    menuList.classList.remove("open-menu");
    hamburgerIcon.className = "fa fa-bars";
  });
});

const services = [
  {
    img: "square",
    desc: "Multicolored Square",
  },
  {
    img: "amongus",
    desc: "Among Us Marble",
  },
  {
    img: "round",
    desc: "Colourful Round",
  },
];

function createServiceEl(data) {
  return `<div class="service-item">
            <img src="./images/${data.img}.png" alt="" />
            <p class="body">${data.desc}</p>
            <button class="btn-service">Buy</button>
            </div>`;
}

services.forEach((service) => {
  servicesWrapper.innerHTML += createServiceEl(service);
});
