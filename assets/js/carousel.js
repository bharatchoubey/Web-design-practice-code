var track  = document.querySelector('.carousel__track'); // get slide element
var slide = Array.from(track.children); // store all slides in array
var nextButton = document.querySelector('.carousel__buttom--right')
var prevButton = document.querySelector('.carousel__buttom--left')

var slideWidth = slide[0].getBoundingClientRect().width;
console.log(slideWidth)

// placing images side by side

var slidePositioning = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
};
slide.forEach(slidePositioning);

var moveSlide = (track,currentslide, targetslide) =>{
  track.style.transform = 'translateX(-'+ targetslide.style.left +')';
  currentslide.classList.remove('current-slide');
  targetslide.classList.add('current-slide');
};

prevButton.addEventListener('click', e =>{
  var currentslide = track.querySelector('.current-slide');
  var prevslide = currentslide.previousElementSibling;
  moveSlide(track,currentslide,prevslide);
});


// adding event over nextButton to move image leftside
nextButton.addEventListener('click', e => {
  var currentslide = track.querySelector('.current-slide');
  var nextslide = currentslide.nextElementSibling;
  // var amountToMove = nextslide.style.left;
  // track.style.transform = 'translateX(-'+ amountToMove +')';
  // currentslide.classList.remove('current-slide');
  // nextslide.classList.add('current-slide');
  moveSlide(track,currentslide,nextslide);
});
