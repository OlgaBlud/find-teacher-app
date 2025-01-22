Технічне завдання

Створити застосунок для компанії, що пропонує скористатися послугами викладачів з вивчення мов онлайн. Застосунок складається з 3х сторінок:
• сторінка “Home” з переліком переваг компанії та посиланням, що закликає розпочати роботу з застосунком і перенаправляє на сторінку “Teachers”. Стилізацію реалізувати з використанням прикладів, наведених у макеті з різною варіацією палітри, або за допомогою прототипу (що зробить “проєкт” більш унікальним).
• сторінка “Teachers”, що містить перелік викладачів, які користувач може фільтрувати за мовою викладання, за рівнем знань учнів, з якими працює викладач та ціною за годину заняття.
• приватна сторінка “Favorites” з викладачами, які були додані користувачем в “обрані”

Технічне завдання

1. За допомогою firebase_DB додати до застосунку можливість авторизації (реєстрація, логінізація, отримання даних про поточного користувача, логаут).
2. Форму для реєстрації/авторизації та мінімальну валідацію її полів потрібно реалізувати за допомогою react-hook-form & yup. Всі поля є обовʼязковими до заповнення. Модальне вікно з формою повинно закриватись по кліку на кнопку у вигляді “хрестика”, по кліку на backdrop або натисканню на клавішу Esc.
3. В Realtime Database (by firebase) створіть колекцію викладачів з наступними полями: name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience (див. скріншот нижче)

Для наповнення колекції можна використовувати teachers.json

4. Відповідно до макету реалізувати картку з описом характеристик викладача.
5. На сторінці “Teachers” має рендеритися 4 картки, а їх решту можна завантажити по кліку на кнопку Load more, після якого має виконатись запит до бази даних для відображення нової порції карток.
6. У разі кліку по кнопці у вигляді “серця”:
   НЕавторизованим користувачем - має зʼявлятись модальне вікно або пуш-повідомлення про те, що даний функціонал доступний лише для авторизованих користувачів
   Авторизованим користувачем - картка має додаватися до списку обраних (за допомогою localStorage або за допомогою роботи з колекцією users - by firebase), а колір кнопки - “серця” змінюватися.
7. При оновленні сторінки авторизованим користувачем має фіксуватись кінцевий результат дій користувача. Тобто, якщо додати картку з інформацією про викладача в обрані та оновити сторінку - то кнопка все одно залишається в стані “обраної” із відповідним кольором.
8. У разі повторного кліку по кнопці у вигляді “серця” картка повинна бути видалена зі списку обраних, а колір кнопки змінитись до початкового стану.
9. У разі кліку по кнопці Read more картка має розкриватись з більш детальною інформацією про викладача та відгуками від його учнів.
10. У разі кліку по кнопці Book trial lesson має відкриватись модальне вікно з формою для бронювання пробного заняття. Форму та мінімальну валідацію її полів потрібно реалізувати за допомогою react-hook-form & yup. Всі поля обовʼязкові до заповнення.
11. Модальне вікно повинно закриватись по кліку на кнопку у вигляді “хрестика”, по кліку на backdrop або натисканню на клавішу Esc.
12. Для авторизованого користувача доступна приватна сторінка “Favorites”, при переході на яку користувач має можливість переглянути усі картки викладачів, які були додані ним в “обрані”. За стилізацією сторінка має бути аналогічною сторінці “Teachers”.

Завдання із зірочкою\*
Створи маршрутизацію, використовуючи React Router.
Додай фільтрацію: за мовою викладання; за рівнем знань учнів, з якими працює викладач; за ціною за годину заняття.

Критерії виконання
● Верстка реалізована для десктопу відповідно макету, семантична та валідна.
● Немає помилок в консолі браузера.
● Робота виконана на нативному JS з використанням бандлеру (Vite, Parcel або ін.) або на React.
● Авторизація користувача та робота з колекцією реалізовані за допомогою firebase
● Інтерактивність працює відповідно до технічного завдання.
● Код відформатований та без коментарів.
● В репозиторії має бути README.md з описом проєкту: про що цей проєкт, основні технології, макет, ТЗ.
● Проєкт задеплоєний на github pages, netlify.com або інший сторонній хостінг

МАТЕРІАЛИ
firebase_docs - документація firebase для роботи з REST
