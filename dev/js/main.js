let headBtn = document.querySelector('.head-btn');
headBtn.onclick = function () {
    document.querySelector('.aside').classList.toggle('aside-show');
};

window.onscroll = function () {
    let scrolled = window.pageYOffset;
    if(scrolled > 0){
        document.querySelector('.head').classList.add('head-scroll');
        document.querySelector('.aside').style.paddingTop = '';
    } else {
        document.querySelector('.head').classList.remove('head-scroll');
        document.querySelector('.aside').style.paddingTop = '75px';
    }
};