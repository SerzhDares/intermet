// BURGER-MENU
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".burger_btn").addEventListener("click", () => {
        document.querySelector(".head_block").classList.add("open")
    })
})

document.querySelector(".burger_menu").addEventListener("click", event => {
    event._isClickWithInMenu = true;
});
document.querySelector(".burger_btn").addEventListener("click", event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener("click", event => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".head_block").classList.remove("open");
});
document.querySelector(".burger_close_btn").addEventListener("click", event => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".head_block").classList.remove("open");
});


// BANNER-SLIDER
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

// FILE-LOADED
const fileInput = document.querySelector('.load_file');
fileInput.addEventListener('change', () => {
  if (fileInput.value != '') {
    document.querySelector('.load_field_border').classList.add('invisible');
    document.querySelector('.loaded_file_form').classList.remove('invisible');
  }
})

// MAPS-CHECKER
const allBlocks = document.querySelectorAll('.locality_block');
const mapAddress = document.querySelector('.map_address_text');
const mapLink = document.querySelector('.locality_map');
allBlocks.forEach(block => {
    block.addEventListener('click', e => {
      allBlocks.forEach(b => {
        b.classList.remove('locality_block_active')
      })
      e.target.classList.add('locality_block_active');
      if (e.target.textContent == 'Волхонка') {
        mapAddress.textContent = 'Волхонское шоссе, 4 к10';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A118942572df26f872ee34219ba6551d5dd49f5e26ac9246918bd003f8d0f9b5e&amp;source=constructor';
      }
      if (e.target.textContent == 'Порт') {
        mapAddress.textContent = 'наб. реки Екатерингофки 37';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ad5375bd3ed3813af9b8624ebe9a878be367941a3bae4e67f220fc6a4b7c683e6&source=constructor';
      }
      if (e.target.textContent == 'Колпино') {
        mapAddress.textContent = 'Финляндская ул. 13, корп. 5';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa4d462b749ca4e1210fdcddd35efbf02d974585f812d3058ca15bb63381ec4d8&source=constructor';
      }
      if (e.target.textContent == 'Парнас') {
        mapAddress.textContent = '2-й Верхний пер. 4, корп. 1Ж';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A9cdee117fab87b90b113f627b800e59c3c0ff2e71ec70f41399b847e290f5c10&source=constructor';
      }
      if (e.target.textContent == 'Большевиков') {
        mapAddress.textContent = 'Складская ул. 6, корп. 1';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A4f7cddb97456a423f77a908195fbe0f75da81bc0e06446dd426efb0749e898c8&source=constructor';
      }
      if (e.target.textContent == 'Шушары') {
        mapAddress.textContent = 'Московское шоссе 109, корп. 4';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ab7762a1b283fdde24950b2af2633a8d844531fde53b06b9b25faedd95f310549&source=constructor';

      }
  })
})


// OPEN FORM
const openFormBtn = document.querySelector('.af_btn_open');
openFormBtn.addEventListener('click', () => {
    openFormBtn.classList.add('invisible');
    document.querySelector('.application_form').classList.remove('invisible');
})
