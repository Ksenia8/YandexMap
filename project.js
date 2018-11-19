ymaps.ready(init);

function init() {
    var geolocation = ymaps.geolocation,
        myMap = new ymaps.Map('map', {
            center: [55, 34],
            zoom: 2
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Сравним положение, вычисленное по ip пользователя и
    // положение, вычисленное средствами браузера.
    geolocation.get({
        provider: 'yandex',
        mapStateAutoApply: true
    }).then(function (result) {
        // Красным цветом пометим положение, вычисленное через ip.
        result.geoObjects.options.set('preset', 'islands#redCircleIcon');
        result.geoObjects.get(0).properties.set({
            balloonContentBody: 'Мое местоположение'
        });
        myMap.geoObjects.add(result.geoObjects);
    });

    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        // Синим цветом пометим положение, полученное через браузер.
        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
    });

    // создание метки
    myPlacemark0 = new ymaps.Placemark([36.72, -4,42], {

        balloonContentHeader: "Офис в Испании",
        balloonContentBody: "Тут жарко, вино, и работать не хочется!",


    });

    myPlacemark1 = new ymaps.Placemark([7.88, 98,39], {

        balloonContentHeader: "Офис на Пхукете",
        balloonContentBody: "Тут еще жарче, вино тоже есть, и работать ну вообще не хочется!",


    });


    myPlacemark2 = new ymaps.Placemark([55.00, 82.94], {

        balloonContentHeader: "Офис в Сибири",
        balloonContentBody: "Заберите меня на Пхукет",


    });

    // добавление метки на карту
    myMap.geoObjects.add(myPlacemark0);
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);

}
