"use strict";
// Tabbed component
const links = document.querySelectorAll(".links");
const svgs = document.querySelectorAll(".svg");
const navbar = document.querySelector(".nav-bar");

// links.forEach(link => link.addEventListener('click',()=>
// console.log('TAB')));

navbar.addEventListener("click", function (e) {
  const clicked = e.target.closest("a");
  const clickedSvg = e.target.closest(".svg");
  console.log(clickedSvg);
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Active tab
  links.forEach((link) => link.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  svgs.forEach((svg) => {
    svg.classList.remove("active-svg");
    // svg.classList.add("")
  });
  clickedSvg.classList.add("active-svg");
});
//Toggle
let moreBtn = document.querySelector(".see-more");
let lessBtn = document.querySelector(".see-less");
let modal = document.querySelector(".sub-menu");
let leftContent = document.querySelector(".left-content");
const openModal = function () {
  modal.classList.remove("hidden");
  moreBtn.classList.add("hidden");
  lessBtn.classList.remove("hidden");
  leftContent.classList.add("scroll");
  console.log("This works fine!");
};
const closeModal = function () {
  modal.classList.add("hidden");
  moreBtn.classList.remove("hidden");
  lessBtn.classList.add("hidden");
  leftContent.classList.remove("scroll");
};
moreBtn.addEventListener("click", openModal);
lessBtn.addEventListener("click", closeModal);

// tab component 2
// const titleBar = document.querySelector(".title-bar");
// const titleStories = document.querySelector(".title-stories");
// const stories = document.querySelector(".stories");
// const text = document.querySelector(".title-stories-text");
// const reels = document.querySelector(".reels");
// const reelsText = document.querySelector(".title-reels-text")
// const tabComp = ['titleStories','titleBar'];
// for(let tab of tabComp){
//   const arr = new Array();
//   arr.push(tab);
//   console.log(arr);

// }
// const tabs = document.querySelectorAll(".tab-1");
// const storiesTab = document.querySelectorAll(".tab-2");
// const textTab = document.querySelectorAll(".tab-3");
// const titleTab = document.querySelector(".title-bar");
// titleTab.addEventListener("click", (e) => {
// tabs.style.backgroundColor = "black";
// e.target;
// console.log(tabs);

// if (e.target === tabs[0] || tabs[0].contains(e.target)) {
//   storiesTab.forEach((sTab) => {
//     sTab.classList.add("title--active");
//     sTab.classList.add("stories--active");
//     // textTab.classList.add("stories--active");
//   });
//   textTab.forEach((text) => {
//     text.classList.add("stories--active");
//   });
// }else {
//   console.log("Remove this!");
// }
//   storiesTab[0].classList.add("title--active");
//   storiesTab[0].classList.add("stories--active");
// } else {
//   // else if(e.target === tabs[1] || tabs[1].contains(e.target)){
//   storiesTab[0].classList.remove("title--active");
//   storiesTab[0].classList.remove("stories--active");
// }
// } else {
// console.log("remove this!");
// titleTab.addEventListener("click",()=>{

// storiesTab.forEach( sTab => {
//   sTab.classList.remove("title--active");
//   sTab.classList.remove("stories--active");
// })

// })

// titleStories.addEventListener("click",()=> {
//   stories.classList.add("title--active");
//   stories.classList.add("stories--active");
//   text.classList.add("stories--active");
//   console.log("This is good!")
// })

// titleBar.addEventListener("click", function (e) {
//   const clicked = e.target.closest("div");
//   const clickedSvg = e.target.closest(".svg");
//   console.log(clickedSvg);
//   console.log(clicked);

//   // Guard clause
//   if (!clicked) return;

//   // Active tab
//   links.forEach((link) => link.classList.remove("title-active"));
//   clicked.classList.add("title-active");
// });

const storyTab = document.querySelector(".stories");
const reelsTab = document.querySelector(".reels");
const storySection = document.querySelector(".stories--section");
const reelsSection = document.querySelector(".reels--section");

storyTab.addEventListener("click", () => {
  storyTab.classList.add("title--active");
  storyTab.classList.add("stories--active");
  storySection.classList.remove("hidden");
  reelsSection.classList.add("hidden");
  reelsTab.classList.remove("title--active");
  reelsTab.classList.remove("stories--active");
});
reelsTab.addEventListener("click", () => {
  reelsTab.classList.add("title--active");
  reelsTab.classList.add("stories--active");
  storyTab.classList.remove("title--active");
  storyTab.classList.remove("stories--active");
  reelsSection.classList.remove("hidden");
  storySection.classList.add("hidden");
});
// facebook stories

const allStories = [
  {
    id: 0,
    author: "Luna Belle",
    imageUrl: "./assets/images/image10.jpg",
  },

  {
    id: 1,
    author: "Willow Grace",
    imageUrl: "./assets/images/image11.jpg",
  },

  {
    id: 2,
    author: "Emma Smith",
    imageUrl: "./assets/images/image5.jpg",
  },
  {
    id: 3,
    author: "Emma Smith",
    imageUrl: "./assets/images/image8.jpg",
  },
  {
    id: 4,
    author: "Emma Smith",
    imageUrl: "./assets/images/image9.jpg",
  },

  {
    id: 5,
    author: "Emma Smith",
    imageUrl: "./assets/images/image5.jpg",
  },

  {
    id: 6,
    author: "Emma",
    imageUrl: "./assets/images/image11.jpg",
  },

  {
    id: 7,
    author: "Emma",
    imageUrl: "./assets/images/image7.jpg",
  },

  {
    id: 8,
    author: "Emma",
    imageUrl: "./assets/images/image2.jpg",
  },
];

// const storiesFullView = document.querySelector('stories-full-view');
const storiesContainer = document.querySelector(".stories--section");
const storiesFullView = document.querySelector(".stories-full-view");
const closeBtn = document.querySelector(".close-btn");
const storyImageFull = document.querySelector(".story-full-view img");
const authorFull = document.querySelector(".authors");
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".previous-btn");
const nextBtnFullView = document.querySelector(".next-btns");
const previousBtnFullView = document.querySelector(".previous-btns");
const videoContainer = document.querySelector(".reels--section");
const storyVideoFull = document.querySelector(".story-full-view-video");
const storyVideoFullPage = document.querySelector(".stories-full-view-video");
const videoRenderingPage = document.querySelector(".video");
const previousVideoBtn = document.querySelector(".previousVideo-btn");
const nextVideoBtn = document.querySelector(".nextVideo-btn");
const closeBtnVideo = document.querySelector(".close-btn-video");
const previousVideoViewBtns = document.querySelector(".previous-btnsVideo");
const nextVideoViewBtn = document.querySelector(".next-btnsVideo");

let currentActive = 0;

const storiesEl = document.querySelector(".storiesElement");
const createStories = () => {
  allStories.forEach((s, i) => {
    const story = document.createElement("div");
    // story.style.width="12rem"
    // story.style.backgroundColor="Green";
    // story.classList.add("::before");
    story.classList.add("story");
    const img = document.createElement("img");
    img.src = s.imageUrl;
    const authors = document.createElement("div");
    authors.classList.add("author");
    authors.innerHTML = s.author;

    story.appendChild(img);
    // story.appendChild(authors);

    storiesEl.appendChild(story);
    // storiesEl.appendChild(author);
    story.addEventListener("click", () => {
      showFullView(i);
    });
  });
};
createStories();
// video section

const showFullView = (index) => {
  currentActive = index;
  updateFullView();
  storiesFullView.classList.add("full-view-active");
};

closeBtn.addEventListener("click", () => {
  storiesFullView.classList.remove("full-view-active");
});

const updateFullView = () => {
  storyImageFull.src = allStories[currentActive].imageUrl;
  authorFull.innerHTML = allStories[currentActive].author;
};

nextBtn.addEventListener("click", () => {
  storiesContainer.scrollLeft += 300;
});
previousBtn.addEventListener("click", () => {
  storiesContainer.scrollLeft -= 300;
});

storiesContainer.addEventListener("scroll", () => {
  if (storiesContainer.scrollLeft <= 24) {
    previousBtn.classList.remove("btn-active");
  } else {
    previousBtn.classList.add("btn-active");
  }

  let maxScrollValue =
    storiesContainer.scrollWidth - storiesContainer.clientWidth - 24;

  if (storiesContainer.scrollLeft >= maxScrollValue) {
    nextBtn.classList.remove("btn-active");
  } else {
    nextBtn.classList.add("btn-active");
  }
});

nextBtnFullView.addEventListener("click", () => {
  // storiesFullView.scrollLeft += 200;
  if (currentActive >= allStories.length - 1) {
    return;
  }
  currentActive++;
  updateFullView();
});

previousBtnFullView.addEventListener("click", () => {
  if (currentActive <= 0) {
    return;
  }
  currentActive--;
  updateFullView();
});

//video javascript
const videoStories = [
  {
    id: 0,
    author: "Ewherhe Akpesiri",
    imageUrl: "./assets/videos/Thumbpng1.png",
    videoUrl: "./assets/videos/video-9.mp4",
  },
  {
    id: 1,
    author: "Ewherhe Roseline",
    imageUrl: "./assets/videos/Thumbpng2.png",
    videoUrl: "./assets/videos/video-8.mp4",
  },
  {
    id: 2,
    author: "Ewherhe Ralph",
    imageUrl: "./assets/videos/Thumbpng3.png",
    videoUrl: "./assets/videos/video-7.mp4",
  },
  {
    id: 3,
    author: "Emma Smith",
    imageUrl: "./assets/videos/Thumbpng4.png",
    videoUrl: "./assets/videos/video-6.mp4",
  },
  {
    id: 4,
    author: "Emma Smith",
    imageUrl: "./assets/videos/Thumbpng5.png",
    videoUrl: "./assets/videos/video-5.mp4",
  },
  {
    id: 5,
    author: "Emma Smith",
    imageUrl: "./assets/videos/Thumbpng6.png",
    videoUrl: "./assets/videos/video-4.mp4",
  },
  {
    id: 6,
    author: "Emma Smith",
    imageUrl: "./assets/videos/Thumbpng7.png",
    videoUrl: "./assets/videos/video-3.mp4",
  },
  {
    id: 7,
    author: "Emma Smith",
    imageUrl: "./assets/videos/Thumbpng8.png",
    videoUrl: "./assets/videos/video-2.mp4",
  },
  {
    id: 8,
    author: "Emma Smith",
    imageUrl: "./assets/videos/Thumbpng9.png",
    videoUrl: "./assets/videos/video-1.mp4",
  },
];
const videoStoriesEl = document.querySelector(".videoElement");
const createVideos = () => {
  videoStories.forEach((v, i) => {
    const videos = document.createElement("div");
    // videos.style.backgroundColor="blue"
    console.log(videos);
    videos.classList.add("style");
    const video = document.createElement("video");
    video.src = v.videoUrl;

    // video.height = 200;
    // video.width = 100;

    const authors = document.createElement("div");
    authors.classList.add("author");
    authors.innerHTML = v.author;

    videos.appendChild(video);
    videoStoriesEl.appendChild(videos);
    console.log(v);
    video.addEventListener("click", () => {
      showFullVideoView(i);
    });
  });
};
createVideos();

let currentActiveVideo = 0;

const showFullVideoView = (index) => {
  currentActiveVideo = index;
  updateFullViewVideo();
  storyVideoFullPage.classList.remove("full-view-video-inactive");
  // storyVideoFull.classList.add("hidden");
};

const updateFullViewVideo = () => {
  videoRenderingPage.src = videoStories[currentActiveVideo].videoUrl;
  authorFull.innerHTML = videoStories[currentActiveVideo].author;
};

nextVideoBtn.addEventListener("click", ()=> {
videoContainer.scrollLeft += 300;
});

previousVideoBtn.addEventListener("click", ()=>{
  videoContainer.scrollLeft -= 300;
});

closeBtnVideo.addEventListener("click", () => {
  storyVideoFullPage.classList.add("full-view-video-inactive");
  // console.log("This is great");
  // storyVideoFull.pause();
  // alert("This is great!");
});

videoContainer.addEventListener("scroll", () => {
 if(videoContainer.scrollLeft <= 24) {
  previousVideoBtn.classList.remove("btn-active-video");
 } else {
  previousVideoBtn.classList.add("btn-active-video");
 }

let maxScrollValue = 
  videoContainer.scrollWidth - videoContainer.clientWidth - 24;
  
  if (videoContainer.scrollLeft >= maxScrollValue) {
    nextVideoBtn.classList.remove("btn-active-video");
  } else {
    nextVideoBtn.classList.add("btn-active-video");
  }

});


nextVideoViewBtn.addEventListener("click", () => {
   if (currentActiveVideo >= videoStories.length - 1) {
     return;
   }
   currentActiveVideo++;
   updateFullViewVideo();
  console.log("This is fine!");
});
previousVideoViewBtns.addEventListener("click", () => {
  if (currentActiveVideo <= 0) {
    return;
  }
  currentActiveVideo--;
  updateFullViewVideo();

  console.log("This is fine!");
});

// storyImageFull;
 
// Leaflet maps

if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(
  function(position){
  const {latitude} = position.coords;
  const {longitude} = position.coords;
  console.log(`https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu`);


  
  const map = L.map("map").setView([51.505, -0.09], 20);
  
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  
  L.marker([51.5, -0.09])
    .addTo(map)
    .bindPopup("A pretty CSS popup.<br> Easily customizable.")
    .openPopup();
}, 
function(){
alert('Could not get your position!')

 
  }

);

// skeleton loader demo test
const allSkeleton =  document.querySelectorAll('.skeleton');

window.addEventListener('load', function(){
 allSkeleton.forEach((item) => item.classList.remove("skeleton"))

});
