const openFormBtn = document.querySelector('.af_btn_open');
openFormBtn.addEventListener('click', () => {
    openFormBtn.classList.add('invisible');
    document.querySelector('.application_form').classList.remove('invisible');
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});