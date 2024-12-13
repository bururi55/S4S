function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Проверка логина и пароля
    if (username === 's4s' && password === '1488') {
        // Если логин и пароль верны, перенаправляем на главную страницу
        window.location.href = 'main.html';
    } else {
        alert('Invalid username or password');
    }
}