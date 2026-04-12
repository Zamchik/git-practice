function validate(login, password) {
    if (!login || !password) {
        return console.log("неверный логин или пароль!")
    }

    console.log("Доступно для авторизации!");
}