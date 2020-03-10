class Courses{
    constructor() {
        const _ = this;
        _.init();
    }

    showAside(){
        let asideBtn = document.querySelector('.head-btn');
        asideBtn.addEventListener('click',function (e) {
            document.querySelector('.aside').classList.toggle('aside-show');
            document.querySelector('.head-btn').classList.toggle('head-btn-active')
        })
    }

    closeAside(){
        function close(){
            document.querySelector('.aside').classList.remove('aside-show');
            document.querySelector('.head-btn').classList.remove('head-btn-active')
        }
        let closeBtn = document.querySelector('.close-btn');
        closeBtn.addEventListener('click',function (e) {
            close();
        });
        let asideLink = document.querySelector('aside').querySelectorAll('a');
        asideLink.forEach(function (el) {
            el.addEventListener('click',function (e) {
                close();
            })
        })
    }

    scroll(){
        window.addEventListener('scroll',function (e) {
            let scrolled = window.pageYOffset;
            if(scrolled > 0){
                document.querySelector('.head').classList.add('head-scroll');
                document.querySelector('.aside').style.paddingTop = '';
            } else {
            document.querySelector('.head').classList.remove('head-scroll');
            document.querySelector('.aside').style.paddingTop = '75px';
        }
        })
    }

    init(){
        const _ = this;
        _.showAside();
        _.closeAside();
        _.scroll();
    }
}

let courses = new Courses();
