window.onload = function () {
    const gnbList = document.querySelector('.gnb-list');
    const menuWrap = document.querySelectorAll('.gnb-list > li');
    const mainMenuWrap = document.querySelectorAll('.main-menu-wrapper');
    const mainMenu = document.querySelectorAll('.main-menu');
    const subMenu = document.querySelectorAll('.sub-menu');

    const hBottom = document.querySelector('.h-bottom');
    const hBottomBg = document.querySelector('.h-bottom-bg');

    const hContainer = document.querySelector('.h-container');

    let timer;

    const langBtn = document.querySelector('.lang-box > button');
    const langList = document.querySelector('.lang-list');


    //scroll
    window.addEventListener('scroll', function () {
        console.log(window.scrollY);
        if (window.scrollY > 0) {
            hContainer.style.backgroundColor = 'white';
            hBottom.style.borderBottom = 'solid 1px #e7e7e7';
        }else{
            hContainer.style.backgroundColor = '';
            hBottom.style.borderBottom = '';
        }
    })

    //gnb
    gnbList.addEventListener('mouseenter', onMenu)
    hContainer.addEventListener('mouseleave', outMenu)

    mainMenuWrap.forEach((item) => {
        item.addEventListener('mouseenter', function () {
            mainMenu.forEach((menuItem) => {
                menuItem.classList.add('on');
            })
        })
        item.addEventListener('mouseleave', function () {
            mainMenu.forEach((menuItem) => {
                menuItem.classList.remove('on');
            })
        })
    })

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
    langBtn.addEventListener('click', function () {
        if (langList.style.visibility == 'hidden') {
            langList.style.visibility = 'visible';
            langList.style.height = '110px';
        } else {
            langList.style.visibility = 'hidden';
            langList.style.height = '0px'
        }
    })
}