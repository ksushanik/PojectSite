function search() {
  var query = document.getElementById('query').value.toLowerCase();
  var pages = ['index.html', 'lux.html', 'yone.html', 'darius.html'];
  var results = document.getElementById('results');
  results.innerHTML = '';

  // Создаем массив промисов для загрузки страниц
  var promises = pages.map(function (page) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', page, true);
      xhr.onload = function () {
        resolve(xhr.responseText.toLowerCase());
      };
      xhr.onerror = function () {
        reject(new Error('Ошибка загрузки страницы: ' + page));
      };
      xhr.send();
    });
  });

  // Запускаем поиск после загрузки всех страниц
  Promise.all(promises).then(function (responses) {
    for (var i = 0; i < responses.length; i++) {
      if (responses[i].indexOf(query) !== -1) {
        var div = document.createElement('div');
        div.innerHTML = '<a href="' + pages[i] + '">' + pages[i] + '</a><br><br>';
        results.appendChild(div);
      }
    }

    // Открываем модальное окно
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];
    modal.style.display = 'block';

    // Закрываем модальное окно при клике на кнопку закрытия
    span.onclick = function () {
      modal.style.display = 'none';
    };

    // Закрываем модальное окно при клике за его пределами
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }).catch(function (error) {
    console.error(error);
  });
}