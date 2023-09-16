const slider01 = new Swiper('.swiper01', {
    slidesPerView: 6,
    spaceBetween: '18px',
    allowTouchMove: false,
    navigation: {
        prevEl: '.btn01-prev',
        nextEl: '.btn01-next'
    }
})

const slider02 = new Swiper('.swiper02', {
    slidesPerView: 6,
    spaceBetween: '18px',
    allowTouchMove: false,
    navigation: {
        prevEl: '.btn02-prev',
        nextEl: '.btn02-next'
    }
})


const slideItem01 = document.querySelectorAll('.item01');
const slideItem02 = document.querySelectorAll('.item02');

const itemName = document.querySelectorAll('.item-name');


slideItem01.forEach((item)=>{
    item.addEventListener('mouseenter', function(){
        item.classList.remove('on');
        item.classList.add('on');

        // itemName.forEach((name)=>{
        //     name.innerHTML = 'VIEW MORE';
        // })
    })
    item.addEventListener('mouseleave', function(){
        item.classList.remove('on');

        // itemName.forEach((name)=>{
        //     name.innerHTML = '';
        // })
    })
})

slideItem02.forEach((item)=>{
    item.addEventListener('mouseenter', function(){
        item.classList.remove('on');
        item.classList.add('on');
    })
    item.addEventListener('mouseleave', function(){
        item.classList.remove('on');
    })
})