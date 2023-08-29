window.onload = function () {

    //gnb
    const gnbList = document.querySelector('.gnb-list');
    const menuWrap = document.querySelectorAll('.gnb-list > li');
    const mainMenu = document.querySelectorAll('.main-menu');
    const subMenu = document.querySelectorAll('.sub-menu');

    const hBottom = document.querySelector('.h-bottom');
    const hBottomBg = document.querySelector('.h-bottom-bg');

    const hContainer = document.querySelector('.h-container');

    let timer;


    gnbList.addEventListener('mouseenter', onMenu)
    hContainer.addEventListener('mouseleave', outMenu)


    mainMenu.forEach((item) => {
        item.addEventListener('mouseenter', function () {
            item.classList.add('on');
        })
        item.addEventListener('mouseleave', function(){
            item.classList.remove('on');
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
    const langBtn = document.querySelector('.lang-box > button');
    const langList = document.querySelector('.lang-list');

    langBtn.addEventListener('click', function () {
        console.log(langBtn)
        if (langList.style.visibility == 'hidden') {
            langList.style.visibility = 'visible';
            langList.style.height = '110px';
        } else {
            langList.style.visibility = 'hidden';
            langList.style.height = '0px'
        }
    })





}