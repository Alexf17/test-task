# React homework template

Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).

## Создание репозитория по шаблону

Test task from GoIT .

1. According to the layout, you need to implement a user card.
2. When clicking on the Follow button, its text changes to Following. Also the
   color of the button changes. And yours is added to the number of followers.
   That is, the initial number is 100,500 followers. When you click on the
   button it will be 100,501.
3. When the page is updated, the final result of the user's actions should be
   recorded. That is, if you click on the button and refresh the page, the
   button remains the same in the Following state with the corresponding color,
   and the follower count is NOT decreases to the initial value.
4. When you click the button again, its text and color change to the original
   state The number of followers also changes. It decreases by 1 (100,500).
5. In the code, the number 100,500 must be written with one value (100500). In
   the UI - comma-delimited (100,500).

![Card template](./src/images/Follow.png)
![Card template](./src/images/Following.png)

## How to install and start

Install with npm

npm i

Start with npm

npm start
