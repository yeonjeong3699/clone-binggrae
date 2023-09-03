const slider = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: '18px',
    allowTouchMove: false,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
})

const slideItem = document.querySelectorAll('.item');
const itemName = document.querySelectorAll('.item-name');

slideItem.forEach((item)=>{
    item.addEventListener('mouseenter', function(){
        item.classList.remove('on');
        item.classList.add('on');

        itemName.forEach((name)=>{
            name.innerHTML = 'VIEW MORE';
        })
    })
    item.addEventListener('mouseleave', function(){
        item.classList.remove('on');

        itemName.forEach((name)=>{
            name.innerHTML = '';
        })
    })
})