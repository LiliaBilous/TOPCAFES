# TOP CAFES UKRAINE

## Stack: Vue.js, Vite, Pinia, fetch API, Google API, JavaScript, HTML, CSS

## Опис:

Це мій перший pet-проект, присвячений улюбленим кав'ярням у різних містах України. Основною метою проекту було оволодіння та практика роботи з фреймворком Vue.js.
Сайт складається з двох основних розділів: "Міста" та "Кав'ярні".

В розділі "Міста" реалізовано перехід на сторінку кожного міста з використанням router-view. Кожна сторінка міста містить опис міста, інтерактивну карту Google з відмітками кав'ярень та перелік усіх кав'ярень у цьому місті.

У розділі "Кав'ярні" представлені всі кав'ярні з можливістю фільтрації за містом, рейтингом або ціновою категорією.
Сторінка кожної кав'ярні містить контактну інформацію, короткий опис, особисті рекомендації та фотогалерею. Для зручності навігації на сторінці кав'ярні додані кнопки, що дозволяють пересуватись до попередньої, наступної кав'ярні чи повернутись до сторінки міста цієї кав'ярні.

## Мій внесок:

- Створила інтерфейс користувача з нуля, забезпечивши привабливий та зручний дизайн.
- Розробила компонентну структуру, що забезпечує легко масштабований та підтримуваний код.
- Реалізувала функціональність для відображення інформації про кав'ярні з можливістю сортування та фільтрації.
- Використала fetch API для симуляції отримання даних з сервера, що дозволило краще зрозуміти принципи роботи з API.
- Інтегрувала Google Maps API для відображення карти на сторінках міста.
- Використала Vite для оптимізації швидкості збірки та покращення продуктивності розробки.
- Застосувала Pinia для ефективного управління станом додатку, що забезпечило гнучкість та зручність у роботі з даними.

## CI/CD

Налаштовано GitHub Actions для автоматичного деплою. Збірка автоматично публікується на GitHub Pages після кожного пушу до гілки `main`. Це забезпечує безперервну інтеграцію змін і дозволяє зручно переглядати оновлену версію проєкту без ручного втручання.
