window.onload = function () {
    //gnb
    const menuWrap = document.querySelectorAll('.gnb-list > li');
    const mainMenu = document.querySelectorAll('.main-menu');
    const subMenu = document.querySelectorAll('.sub-menu');

    const hBottom = document.querySelector('.h-bottom');
    const hBottomBg = document.querySelector('.h-bottom-bg');


    mainMenu.forEach((item) => {
        item.addEventListener('mouseover', onMenu)

        function onMenu(){
            hBottomBg.style.visibility = 'visible';
            hBottomBg.style.height = '575px';
            hBottom.style.borderBottom = 'solid 1px #e7e7e7';
            item.classList.add('on');

            setTimeout(function () {
                subMenu.forEach((subItem) => {
                    subItem.style.visibility = 'visible';
                    subItem.style.opacity = 1;
                })
            }, 500)
        }
        // item.parentNode.addEventListener('mouseleave ', function(){
        //     item.classList.remove('on');
        // })
    })

    // menuWrap.forEach((item) => {
    //     item.addEventListener('mouseleave ', function () {
    //         item.firstChild.classList.remove('on');
    //     })
    // })



    //icon
    const langBtn = document.querySelector('.lang-box > button');
    const langList = document.querySelector('.lang-list');

    langBtn.addEventListener('click', function(){
        langList.style.visibility = 'visible';
        langList.style.height = '110px';
    })





}