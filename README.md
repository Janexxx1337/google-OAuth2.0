# Google OAuth 2.0 Authentication
Пример реализации аутентификации с использованием Google OAuth 2.0 и Node.js.

Описание
Данный проект демонстрирует процесс аутентификации пользователя с помощью Google OAuth 2.0. Сервер реализован на Node.js, а пользовательский интерфейс представлен простой HTML-страницей.

Требования
Node.js (версия 14.0 или выше)
NPM (версия 7.0 или выше)
Google API Client Library для JavaScript
Установка
1. Клонировать репозиторий
bash
Copy code
git clone https://github.com/Janexxx1337/google-OAuth2.0.git
2. Установить зависимости
bash
Copy code
cd google-OAuth2.0
npm install
3. Настроить Google API
Создать проект в Google API Console.
Включить Google+ API и создать OAuth 2.0 клиентский идентификатор (Client ID).
В файле config.js заменить YOUR_CLIENT_ID на полученный клиентский идентификатор (Client ID).
Запуск
Запустить приложение
bash
Copy code
npm start
Приложение будет доступно по адресу http://localhost:3000.

Использование
Открыть веб-страницу приложения.
Нажать на кнопку "Войти с помощью Google".
Выбрать учетную запись Google для аутентификации.
После успешной аутентификации на странице будет отображена информация о пользователе.
Лицензия
Проект выпущен под MIT License.

