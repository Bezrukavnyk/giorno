/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.review__slider') && window.innerWidth < 998) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.review__slider', { // Указываем скласс нужного слайдера
		  // Подключаем модули слайдера
		  // для конкретного случая
		  modules: [Navigation],
		  observer: true,
		  observeParents: true,
		  slidesPerView: 1,
		  spaceBetween: 0,
		  autoHeight: false,
		  speed: 800,
		  navigation: {
			prevEl: '.review__slider--prev',
			nextEl: '.review__slider--next',
		  },
	
		});
	  }
	if (document.querySelector('.certificate__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.certificate__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			slidesPerView: 4,
			spaceBetween: 30,
			speed: 800,
            autoHeight: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			preloadImages: false,
			lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.single-hospital__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.single-hospital__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			slidesPerView: 3,
			spaceBetween: 16,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination.single-hospital',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				998: {
					slidesPerView: 3,
					spaceBetween: 20,
				}
			},
			
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.equipment__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.equipment__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 40,
			loop: true,
			speed: 800,
			// centeredSlides: true,
			autoHeight: false,
			preloadImages: true,
			touch: false,
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.equipment__slider--prev',
				nextEl: '.equipment__slider--next',
			},
			pagination: {
				el: ".swiper-pagination._equipment",
				clickable: true,
			  },
			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
		});
	}
	if (document.querySelector('.before-after__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.before-after__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 0,
			speed: 400,
			// centeredSlides: true,
			autoHeight: false,
			preloadImages: true,
			centeredSlides: true,
			// Кнопки "влево/вправо"
			pagination: {
				el: ".swiper-pagination._preview",
				clickable: true,
			  }
		});
	}
	if (document.querySelector('.sales__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.sales__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 0,
			loop: true,
			speed: 800,
			// centeredSlides: true,
			autoHeight: false,
			preloadImages: true,
			touch: false,
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.sales__slider--prev',
				nextEl: '.sales__slider--next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
