let carouselItemImg = document.querySelector(".carousel-item-img");
let carouselItemName = document.querySelector(".carousel-item-name");
let carouselItemLink = document.querySelector(".carousel-item-link");
let controlPrev = document.querySelector(".carousel-control-prev");
let carouselNext = document.querySelector(".carousel-control-next");
let stopBtn = document.querySelector(".stop-btn");
let playBtn = document.querySelector(".play-btn");

let carouselItems = [{
        name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: 'https://i.picsum.photos/id/100/1600/1200.jpg',
        img: 'https://i.picsum.photos/id/100/800/600.jpg'
    },
    {
        name: 'Quisque massa est, auctor at ultricies id, faucibus nec eros.',
        url: 'https://i.picsum.photos/id/101/1600/1200.jpg',
        img: 'https://i.picsum.photos/id/101/800/600.jpg'
    },
    {
        name: 'Sed congue nulla vitae lectus dictum, vel aliquet diam mattis. ',
        url: 'https://i.picsum.photos/id/102/1600/1200.jpg',
        img: 'https://i.picsum.photos/id/102/800/600.jpg'
    },
    {
        name: 'Donec id felis pellentesque, mattis leo non, ornare dolor. ',
        url: 'https://i.picsum.photos/id/103/1600/1200.jpg',
        img: 'https://i.picsum.photos/id/103/800/600.jpg'
    }
];


let maxIndex = carouselItems.length - 1;
let minIndex = 0;
let siraNumarasi = 0;
let durationControl;



function myCarousel(i) {
    carouselItemImg.setAttribute("src", carouselItems[i].img);
    carouselItemName.innerHTML = carouselItems[i].name;
    carouselItemLink.setAttribute("href", carouselItems[i].url);
}



function indexControler() {
    siraNumarasi < minIndex ? siraNumarasi = maxIndex : null;
    siraNumarasi > maxIndex ? siraNumarasi = minIndex : null;
}


controlPrev.addEventListener("click", function () {
    siraNumarasi--;
    indexControler();
    myCarousel(siraNumarasi);
})

carouselNext.addEventListener("click", function () {
    siraNumarasi++;
    indexControler();
    myCarousel(siraNumarasi);

})

stopBtn.addEventListener("click", function(){
    clearInterval(durationControl);
})

playBtn.addEventListener("click", function(){
    init(siraNumarasi);
})

function init(i) {
    myCarousel(i);
    durationControl = setInterval(function () {
        siraNumarasi++;
        indexControler();
        myCarousel(siraNumarasi);
    }, 2000)
}

init(siraNumarasi);

