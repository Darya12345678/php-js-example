function fetchData() {
    // Выполняем AJAX-запрос к серверу
    fetch('data.php')
        .then(response => response.text())
        .then(data => {
            // Выводим полученные данные на странице
            document.getElementById('output').innerHTML = data;
        })
        .catch(error => {
            console.log('Ошибка:', error);
        });
}
