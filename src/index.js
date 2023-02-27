import './style.scss';

//range
const range = document.querySelector('#width');
  
range.addEventListener('input', function() {
  const value = +this.value*10;
  this.style.background = `linear-gradient(to right, #FFCF7A 0%, #FFCF7A ${value}%, #646464 ${value}%, #646464 100%)`
})

//slider

const right = document.querySelector("#right");
const left = document.querySelector("#left");

const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");

let radioArray = new Array(slide1, slide2, slide3);

let radioLength = radioArray.length;


let currentSlide = 0;

radioArray.forEach(
  (item, index) =>
    (item.onclick = () => {
        currentSlide = index;      
    })
);

right.onclick = () => {  
  currentSlide++;

  if (currentSlide > radioLength - 1) {
    currentSlide = 0;
  }
  radioArray[currentSlide].checked = true;  
};

left.onclick = () => {
    currentSlide--;

  if (currentSlide < 0) {
    currentSlide = radioLength - 1;
  }
  radioArray[currentSlide].checked = true;  
};



