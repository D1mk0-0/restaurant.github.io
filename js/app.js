//Делаем наш слайдер рабочим
//Задаем общий класс для наших слайдеров swiper-container
const swiper = new Swiper('.spec__slider', {
    //Установим loop: true что бы слайдеры были цикличными
    loop: true,
    //Время пролистывания
    speed: 1000,
    //Прописываем кнопки как указано в документации Swiper-слйдер 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

//Делаем то же самое, но для слайдов в меню
const swiperMenu = new Swiper('.menu__slider', {
    //Свойство loop убираем. Оно не работает с несколькими элементами
    slidesPerView: 2,
    slidesPerColumn: 2,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

//Вешаем события на наши tabs
let tabs = document.querySelector('.tabs');
//Тут мы выбираем все наши блоки
let menuSlider = document.querySelectorAll('.menu__slider-block');
//Вешаем событие по клику
tabs.addEventListener('click', function (e) {
    //Прописываем условие. Если я кликнул
    if(e.target.classList.contains('tabs__item')) {
        //Теперь мы пробегаемся по всем вкладкам и удаляем у них класс active
        this.querySelectorAll('.tabs__item').forEach(item => item.classList.remove('active'));
        //А у той по который кликнули - добавляем класс
        e.target.classList.add('active');
    }
    //Теперь разбираемся с самими блоками
    menuSlider.forEach(slider => slider.classList.remove('show'));
    //Теперь нам нужно понять по какой вкладке tabs был клик и добавить нужный id 
    let tabIndex = e.target.dataset.tab;
    //Теперь нам нужно получить слайдер по его id
    let thisSwiper = document.querySelector(tabIndex);
    //Теперь добавляем класс show к нашему блоку
    thisSwiper.classList.add('show');
});

//Делаем скролбар
//Функцию ниже будем вызывать в двух случаях
//Открытия окна
window.addEventListener('load', overflowTabs);
//И изменения размера окна 
window.addEventListener('resize', overflowTabs);
//Создадим функцию
function overflowTabs() {
    //Находим наш контейнер
    let outerTabs = document.querySelector('.tabs__container');
    //Находим список
    let innerTabs = document.querySelector('.tabs');
    //Теперь нам нужно получить ширину и сверить ее.
    if (innerTabs.offsetWidth > outerTabs.offsetWidth) {
        // Если ширина меньше, то добавляем класс
        innerTabs.classList.add('overFlow');
    } else {
        //Если больше, то удаляем
        innerTabs.classList.remove('overFlow');
    }
};