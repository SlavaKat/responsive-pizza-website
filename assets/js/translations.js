// Object with translations
const translations = {
    en: {
        nav_1: "Home",
        nav_2: "About Us",
        nav_3: "Popular",
        nav_4: "Products",
        nav_5: "Contact",
        welcome: "Crispy And Delicious Pizzas",
        description: "Order the best pizzas to end your hunger and make your family moments more memorable, place your order now.",
        button_1: "Order Pizza Now",
        aboutTitle: "Learn More About Our History",
        aboutDescription: "The secret to success is the best ingredients to make a better pizza. Today we strive for perfection, just as we have been doing for 15 years when we first opened the pizzeria in Lima - Peru.",
        button_2: "The Best Pizzas",
        popularTitle: "Discover Popular Orders",
        popularDescription: "Select the best prepared and delicious flavors. We have collected some popular recipes from around the world for you to choose your favorite.",
        popular_1: "Margherita Pizza",
        popular_2: "Mushroom Pizza",
        popular_3: "Pepperoni Pizza",
        ingredients: "Fresh And Natural Ingredients",
        recipe_1: "Flour",
        recipe__description_1: "The best wheat from the field for the best flour.",
        recipe_2: "Cheese",
        recipe__description_2: "Indulge in cheese for a healthy future.",
        recipe_3: "Sauces",
        recipe__description_3: "Add a touch of salsa to your life and it will taste better.",
        recipe_4: "Vegetables",
        recipe__description_4: "Vegetables full of the essence of nature and organic.",
        recipe_5: "Meats",
        recipe__description_5: "The best fresh meats for your health.",
        section__title:"The Most Devoured Pizzas",
        products__name_1: "Vegetarian Pizza",
        products__price_1: "$15",
        products__name_2: "Pepperoni Pizza",
        products__price_2: "$10",
        products__name_3: "Margherita Pizza",
        products__price_3: "$12",
        products__name_4: "Mushroom Pizza",
        products__price_4: "$17",
        products__name_5: "Italian Pizza",
        products__price_5: "$10",
        contactTitle: "Contact Now",
        writeTitle: "Write Us",
        deliveryTitle: "Delivery",
        locationTitle: "Location",
        address: "Lima - Sun City - Peru Av. Moon #4321",
        map: "View On Map",
        footer_1: "Pizza",
        footer_2: "Social",
        footer_3: "Payment Methods",
        footer_4: "Subscribe For Discounts",
        footer__button: "Subscribe",
        link_1: "Terms & Agreements",
        link_2: "Privacy Policy",
        copy: "© All Rights Reserved By Bedimcode"
    },
    ru: {
        nav_1: "Дом",
        nav_2: "О нас",
        nav_3: "Популярный",
        nav_4: "Продукция",
        nav_5: "Контакт",
        welcome: "Хрустящие и вкусные пиццы",
        description: "Закажите лучшие пиццы, чтобы утолить голод и сделать семейные моменты более запоминающимися, сделайте заказ прямо сейчас.",
        button_1: "Закажите пиццу сейчас",
        aboutTitle: "Узнайте больше о нашей истории",
        aboutDescription: "Секрет успеха — лучшие ингредиенты для приготовления лучшей пиццы. Сегодня мы стремимся к совершенству, как и 15 лет назад, когда мы впервые открыли пиццерию в Лиме — Перу.",
        button_2: "Лучшие пиццы",
        popularTitle: "Популярные заказы",
        popularDescription: "Выберите лучшие и вкусные рецепты. Мы собрали для вас популярные рецепты со всего мира, чтобы вы могли выбрать свой любимый.",
        popular_1: "Пицца Маргарита",
        popular_2: "Грибная пицца",
        popular_3: "Пицца Пепперони",
        ingredients: "Свежие и натуральные ингредиенты",
        recipe_1: "Мука",
        recipe__description_1: "Лучшая пшеница с поля для лучшей муки.",
        recipe_2: "Сыр",
        recipe__description_2: "Побалуйте себя сыром ради здорового будущего.",
        recipe_3: "Соусы",
        recipe__description_3: "Добавьте немного сальсы в свою жизнь, и она станет вкуснее.",
        recipe_4: "Овощи",
        recipe__description_4: "Овощи, наполненные сущностью природы и органические.",
        recipe_5: "Мясо",
        recipe__description_5: "Лучшее свежее мясо для вашего здоровья.",
        section__title:"Самые съедаемые пиццы",
        products__name_1: "Вегетарианская пицца",
        products__price_1: "$15",
        products__name_2: "Пицца Пепперони",
        products__price_2: "$10",
        products__name_3: "Пицца Маргарита",
        products__price_3: "$12",
        products__name_4: "Грибная пицца",
        products__price_4: "$17",
        products__name_5: "Итальянская пицца",
        products__price_5: "$10",
        contactTitle: "Свяжитесь с нами",
        writeTitle: "Напишите нам",
        deliveryTitle: "Доставка",
        locationTitle: "Расположение",
        address: "Лима - Сан-Сити - Перу Av. Луна #4321",
        map: "Посмотреть на карте",
        footer_1: "Пицца",
        footer_2: "Социальный",
        footer_3: "Способы оплаты",
        footer_4: "Подпишитесь на скидки",
        footer__button: "Подписаться",
        link_1: "Условия и соглашения",
        link_2: "Политика конфиденциальности",
        copy: "© Все права защищены Bedimcode"
    }
};

// Function for switching languages
function switchLanguage(lang) {
    // Saving the selected language in localStorage
    localStorage.setItem('selectedLang', lang);

    // Updating the text on the page
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update the active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) btn.classList.add('active');
    });
}

// Initialization on page load
document.addEventListener('DOMContentLoaded', () => {
    // Checking the saved language or using the default language
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    switchLanguage(savedLang);

    // Adding event handlers for buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
});
