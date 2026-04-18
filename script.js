function validate(login, password) {
    if (!login || !password) {
        return console.log("Введите все данные!")
    }

    if (login !== 'example.gmail.com' || password !== '123456') {
        return console.log("Неверный логин или пароль!")
    }

    console.log("Доступно для авторизации!");
}
