const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;

const movies = [
     {
    name: "Thor: Ragnarok",
    des: "Thor must escape the alien planet Sakaar and stop Ragnarok.",
    image: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/1527/731527-h"
},
{
    name: "Black Panther",
    des: "T'Challa returns home to Wakanda to take his rightful place.",
    image: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4686/674686-h"
},
{
    name: "Doctor Strange",
    des: "A surgeon learns mystical arts after a life-changing accident.",
    image: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5513/675513-h"
}
];

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    h1.textContent = movies[slideIndex].name;
    p.textContent = movies[slideIndex].des;

    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft =
            `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(createSlide, 3000);