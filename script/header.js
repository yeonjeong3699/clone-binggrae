const gnbList = document.querySelector('.gnb-list');
const menuWrap = document.querySelectorAll('.gnb-list > li');
const mainMenuWrap = document.querySelectorAll('.main-menu-wrapper');
const subMenu = document.querySelectorAll('.sub-menu');

const hBottom = document.querySelector('.h-bottom');
const hBottomBg = document.querySelector('.h-bottom-bg');

const hContainer = document.querySelector('.h-container');

let timer;

const langBtn = document.querySelector('.lang-box > button');
const langList = document.querySelector('.lang-list');


//scroll
window.addEventListener('scroll', function () {
    // console.log(window.scrollY);
    if (window.scrollY > 0) {
        hContainer.style.backgroundColor = 'white';
        hBottom.style.borderBottom = 'solid 1px #e7e7e7';
    } else {
        hContainer.style.backgroundColor = '';
        hBottom.style.borderBottom = '';
    }
})


//gnb
gnbList.addEventListener('mouseenter', onMenu)
hContainer.addEventListener('mouseleave', outMenu)

/*
function menuEffect(item, isMouseEnter) {
    clearInterval(timer);
    if (isMouseEnter) {
        hBottomBg.style.visibility = 'visible';
        hBottomBg.style.height = '575px';
        hBottom.style.borderBottom = 'solid 1px #e7e7e7';
    } else {
        hBottomBg.style.visibility = 'hidden';
        hBottomBg.style.height = '146px';
        hBottom.style.borderBottom = '';
    }

    timer = setTimeout(function () {
        subMenu.forEach((item) => {
            item.style.visibility = isMouseEnter ? 'visible' : 'hidden';
            item.style.opacity = isMouseEnter ? 1 : 0;
            item.style.transition = isMouseEnter ? '0.5s' : '';
        });
    }, isMouseEnter ? 500 : 0);
}
mainMenuWrap.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        menuEffect(item, true);
        mainMenuWrap.forEach((menuItem) => {
            menuItem.classList.remove('on');
        });
        item.classList.add('on')
    });

    hContainer.addEventListener('mouseleave', () => {
        mainMenuWrap.forEach((menuItem) => {
            menuItem.classList.remove('on');
        });
        menuEffect(item, false);
    });
});
*/

mainMenuWrap.forEach((item) => {
    item.addEventListener('mouseenter', function () {
        item.firstChild.classList.add('on');
    })
    item.addEventListener('mouseleave', function () {
        item.firstChild.classList.remove('on');
    })
})

/* li 비어있음. 문제 찾아야함
menuWrap.forEach((item)=>{
    console.log(item)
    item.addEventListener('mouseenter',function(){
        const mainMenu = item.firstChild
        mainMenu.firstChild.classList.add('on');
    })
})
*/


function onMenu() {
    clearInterval(timer);

    hBottomBg.style.visibility = 'visible';
    hBottomBg.style.height = '575px';
    hBottom.style.borderBottom = 'solid 1px #e7e7e7';

    timer = setTimeout(function () {
        subMenu.forEach((item) => {
            item.style.visibility = 'visible';
            item.style.opacity = 1;
            item.style.transition = '0.5s';
        })
    }, 500)
}

function outMenu() {
    clearInterval(timer);

    hBottomBg.style.visibility = 'hidden';
    hBottomBg.style.height = '146px';
    hBottom.style.borderBottom = '';

    timer = setTimeout(function () {
        subMenu.forEach((item) => {
            item.style.visibility = 'hidden';
            item.style.opacity = 0;
            item.style.transition = '';
        })
    }, 0)
}


//icon
langList.classList.add('off')
langBtn.addEventListener('click', function () {
    if (langList.classList.contains('off')) {
        langList.classList.remove('off');
        langList.classList.add('on');
    } else {
        langList.classList.remove('on');
        langList.classList.add('off');
    }
})
