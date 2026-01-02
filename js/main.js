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
const spbBlock =  document.querySelector('.locality_map_block');
const workTime = document.querySelector('.locality_time');
const localityTravel = document.querySelector('.locality_travel');
const localityImgs =  document.querySelector('.locality_info_imgs');
allBlocks.forEach(block => {
    block.addEventListener('click', e => {
      localityTravel.classList.remove('locality_pass');
      localityImgs.innerHTML = `
          <img src="imgs/locality_info_icon_1.svg" alt="изображение" class="locality_info_icon">
          <img src="imgs/locality_info_icon_2.svg" alt="изображение" class="locality_info_icon">
          <img src="imgs/locality_info_icon_3.svg" alt="изображение" class="locality_info_icon">`
      if (e.target.textContent !== 'Санкт-Петербург') {
        spbBlock.classList.remove('locality_map_block-img');
      }
      allBlocks.forEach(b => {
        b.classList.remove('locality_block_active')
      })
      e.target.classList.add('locality_block_active');
      if (e.target.textContent == 'Волхонка') {
        mapAddress.textContent = 'Волхонское шоссе, 4 к10';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A118942572df26f872ee34219ba6551d5dd49f5e26ac9246918bd003f8d0f9b5e&amp;source=constructor';
        workTime.textContent = 'Ежедневно с 09:00 до 21:00';
        localityTravel.innerHTML = '';
      }
      if (e.target.textContent == 'Порт') {
        mapAddress.textContent = 'наб. реки Екатерингофки 37';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ad5375bd3ed3813af9b8624ebe9a878be367941a3bae4e67f220fc6a4b7c683e6&source=constructor';
        workTime.textContent = 'Ежедневно с 09:00 до 19:00';
        localityTravel.innerHTML = '';
      }
      if (e.target.textContent == 'Колпино') {
        mapAddress.textContent = 'Финляндская ул. 13, корп. 5';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa4d462b749ca4e1210fdcddd35efbf02d974585f812d3058ca15bb63381ec4d8&source=constructor';
        workTime.textContent = 'Ежедневно с 09:00 до 19:00';
        localityTravel.innerHTML = '';
      }
      if (e.target.textContent == 'Парнас') {
        mapAddress.textContent = '2-й Верхний пер. 4, корп. 1Ж';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A9cdee117fab87b90b113f627b800e59c3c0ff2e71ec70f41399b847e290f5c10&source=constructor';
        workTime.textContent = 'Ежедневно с 09:00 до 19:00';
        localityTravel.innerHTML = '';
      }
      if (e.target.textContent == 'Большевиков') {
        mapAddress.textContent = 'Складская ул. 6, корп. 1';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A4f7cddb97456a423f77a908195fbe0f75da81bc0e06446dd426efb0749e898c8&source=constructor';
        workTime.textContent = 'Ежедневно с 09:00 до 19:00';
        localityTravel.classList.add('locality_pass');
        localityTravel.innerHTML = 'Проезд осуществляется<br/>через КПП';
      }
      if (e.target.textContent == 'Шушары') {
        mapAddress.textContent = 'Московское шоссе 109, корп. 4';
        mapLink.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ab7762a1b283fdde24950b2af2633a8d844531fde53b06b9b25faedd95f310549&source=constructor';
        workTime.textContent = 'Ежедневно с 09:00 до 19:00';
        localityTravel.innerHTML = '';
      }
      if (e.target.textContent == 'Санкт-Петербург') {
        spbBlock.classList.add('locality_map_block-img');
        mapAddress.textContent = 'Выберите площадку';
        mapLink.src = '';
        workTime.textContent = '';
        localityTravel.innerHTML = '';
        localityImgs.innerHTML = '';
      }
  })
})

// MAP-ACTION_CHANGER
const allIcons = document.querySelectorAll('.map_icon');
const allActions = document.querySelectorAll('.map_action_link');
allIcons.forEach(icon => {
  icon.addEventListener('click', e => {
    allIcons.forEach(i => {
      i.classList.remove('map_icon_active', 'map_icon_active_navigator');
      allActions.forEach(action => {
        action.classList.add('invisible');
      })
    })
    
    e.target.classList.contains('map_icon_navigator') ? 
      e.target.classList.add('map_icon_active_navigator') : 
      e.target.classList.add('map_icon_active');

    if (e.target.classList.contains('map_icon_phone')) {
      document.querySelector('.phone_action_link').classList.remove('invisible');
    }
    if (e.target.classList.contains('map_icon_whatsapp')) {
      document.querySelector('.whatsapp_action_link').classList.remove('invisible');
    }
    if (e.target.classList.contains('map_icon_telegram')) {
      document.querySelector('.telegram_action_link').classList.remove('invisible');
    }
    if (e.target.classList.contains('map_icon_max')) {
      document.querySelector('.max_action_link').classList.remove('invisible');
    }
    if (e.target.classList.contains('map_icon_ymaps')) {
      document.querySelector('.ymaps_action_link').classList.remove('invisible');
    }
    if (e.target.classList.contains('map_icon_navigator')) {
      document.querySelectorAll('.navigator_action_link').forEach(nav_al => {
        nav_al.classList.remove('invisible');
      })
    }
    if (e.target.classList.contains('map_icon_2gis')) {
      document.querySelector('.twogis_action_link').classList.remove('invisible');
    }
    if (e.target.classList.contains('map_icon_gmaps')) {
      document.querySelector('.gmaps_action_link').classList.remove('invisible');
    }
  })
})

// PHOTOS-SLIDER
const photosSwiper = new Swiper('.swiper_photo', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// OPEN FORM
const openFormBtn = document.querySelector('.af_btn_open');
openFormBtn.addEventListener('click', () => {
    openFormBtn.classList.add('invisible');
    document.querySelector('.application_form').classList.remove('invisible');
})
