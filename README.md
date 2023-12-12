# stroyker-k1-html-dev

Посмотреть на build сборку: [github-pages](https://luzhetskiy.github.io/stroyker-k1-html-dev/)

# Установка зависимостей
Для установки зависимостей, выполнить команду в терминале из каталога проекта:
### `npm install`

## Доступные скрипты:

Для запуска проекта в dev режиме на `localhost:3000`:
### `npm start`

Для сборки проекта в production режиме:
### `npm run build`

Для создания референсов тестов (проект при этом должен быть запущен на `localhost:3000`, командой `npm start`)
### `npm run test-reference`

Для запуска тестов (проект при этом должен быть запущен на `localhost:3000`, командой `npm start`)
### `npm run test`

Для принятия изменений проваленных тестов
### `npm run test-approve`

## Папки проекта:
`src` - предназначен для исходного кода sass/scss, js \
`public` - папка для итоговой верстки которая транслируеться browserSyc'ом в dev режиме \
`build` - папка для итоговой верстки собраной в production режиме
