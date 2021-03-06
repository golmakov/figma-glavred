# Главред для фигмы

![Окно плагина](/assets/plugin-window.png)

Плагин для Фигмы, который помогает очистить текст от словесного мусора и проверяет на соответствие информационному стилю. Использует [АПИ Главреда](https://glvrd.ru/api/)

О информационном стиле и сервисе главреда читайте:
- [Советы о редактуре](https://soviet.glvrd.ru/)
- Книгу «[Пиши, сокращай](https://book.glvrd.ru/)»
- О проекте [Главред](https://glvrd.ru/about/)

Если плагин был вам полезен, вы можете [купить мне кофе](https://rocketbank.ru/aleksandr.golmakov) ☕️

## Установка

Плагин в разработке. Пока нельзя установить из каталога, но можно собрать из исходников.

## Сборка из исходников

Клонируйте репозиторий

```bash
git clone https://github.com/golmakov/figma-glavred.git
cd figma-glavred
```

Установите зависимости и запустите сборку

```bash
npm install
npm run dev
```

Откройте десктопное приложение Фигмы, перейдите в раздел `Plugins` нажмите `Create your own plugin` -> `Click to choose a manifest.json file` и выберите файл `manifest.json` в папке `Dist` плагина.

## Авторы

- Написал плагин — [Саша Гольмаков](https://twitter.com/golmakov) ([golmakov@gmail.com](mailto:golmakov@gmail.com))
- Главред сделали [Максим Ильяхов](http://maximilyahov.ru/) и [Анатолий Буров](http://anatolyburov.ru/)
- Иконку, используемую в логотипе плагина, нарисовал [Сергей Чикин](http://sergeychikin.ru/365/)