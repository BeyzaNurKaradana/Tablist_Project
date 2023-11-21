/* const tabsEl = document.getElementById("tabs");




const tabs = [
  {
    title: "London",
    text: "London is the capital of England",
  },
  {
    title: "Paris",
    text: "Paris is the capital of France",
  },
  {
    title: "Tokyo",
    text: "Tokyo is the capital of Japan",
  },
];

function selectTab(tabIndex) {
    tabsEl.querySelector(".content h3").innerText = tabs[tabIndex].title;
    tabsEl.querySelector(".content p").innerText = tabs[tabIndex].text;

}

selectTab(0); */

const tab1El = document.getElementById("tab-1");
const tab2El = document.getElementById("tab-2");
const tab3El = document.getElementById("tab-3");

const tab1ContentEl = document.getElementById("content-1");
const tab2ContentEl = document.getElementById("content-2");
const tab3ContentEl = document.getElementById("content-3");

tab1El.onclick = () => {
    tab1El.classList.add("active");
    tab2El.classList.remove("active");
    tab3El.classList.remove("active");
    tab1ContentEl.classList.remove("hide");
    tab2ContentEl.classList.add("hide");
    tab3ContentEl.classList.add("hide");
};

tab2El.onclick = () => {
    tab1El.classList.remove("active");
    tab2El.classList.add("active");
    tab3El.classList.remove("active");
    tab2ContentEl.classList.remove("hide");
    tab1ContentEl.classList.add("hide");
    tab3ContentEl.classList.add("hide");
};

tab3El.onclick = () => {
    tab1El.classList.remove("active");
    tab2El.classList.remove("active");
    tab3El.classList.add("active");
    tab3ContentEl.classList.remove("hide");
    tab1ContentEl.classList.add("hide");
    tab2ContentEl.classList.add("hide");
};