const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollstarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll",scrollUp);

function scrollUp() {
    const scrollpos=window.scrollY;
    if(scrollpos>100 && !scrollstarted) {
        countUp();
        scrollstarted = true;
    }
    else if(scrollpos<100 && scrollstarted) {
        reset();
        scrollstarted =false;
    }
}

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}
function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
        // get count targer
      const target = +counter.getAttribute("data-target");
    //   get current counter value
      console.log(target);
      const c=+counter.innerText;
    //   create an increament
    const increment=target/100;
    // if counter is less than target,add increment
    if(c<target){
        // round up and set counter
        counter.innerText=`${Math.ceil(c+increment)}`
        setTimeout(updateCounter, 75);
    }
    else{
        counter.innerText=target;
    }

    };

    updateCounter();
  });
}

function reset() {
    counters.forEach((counter) => counter.innerText="0");
}
