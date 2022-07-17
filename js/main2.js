
/* let tableWrapper = document.getElementById("myTable");



let vl = 0;

document.querySelector("#submit").onclick = function() {
    // let text = document.querySelector('input');
    // let val = text.value;
    // // alert(val);
    // let rows = document.querySelector('tr');
    // console.log(rows)

  // Объявить переменные
    vl = 0;
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    let th = document.getElementById("myTh");

    // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
    th.style.display = "";
    for (i = 0; i < tr.length; i++) {
       
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if ((txtValue.toUpperCase()).includes(filter)) {
            tr[i].style.display = "";
            vl++;
        } else {
            tr[i].style.display = "none";
        }
        }
    }
    if (vl == 0 || filter == '') {
        tableWrapper.style.visibility = "hidden";
        th.style.display = "none";
          
     }
    else {
        tableWrapper.style.visibility = "visible";
    }
} */


/* let tableWrapper = document.getElementById("myTable");



let vl = 0;

document.querySelector("#submit").onclick = function() {
    // let text = document.querySelector('input');
    // let val = text.value;
    // // alert(val);
    // let rows = document.querySelector('tr');
    // console.log(rows)

  // Объявить переменные
    vl = 0;
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    let th = document.getElementById("myTh");

    // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
    th.style.display = "";
    for (i = 0; i < tr.length; i++) {
       for (j = 0; j < 4; j++)
       {
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
            txtValue = td.textContent || td.innerText;
            if ((txtValue.toUpperCase()).includes(filter)) {
                tr[i].style.display = "";
                vl++;
                if (vl == 1)
                {    
                    tr[i].classList.remove('green__rd');
                    tr[i].classList.remove('yellow__rd');
                    tr[i].classList.add('green__rd');
                } else {
                    tr[i].classList.remove('green__rd');
                    tr[i].classList.remove('yellow__rd');
                    tr[i].classList.add('yellow__rd');
                }
                break;
            } else {
                tr[i].style.display = "none";
            }
            }
        }
    }

    if (vl == 0 || filter == '') {
        tableWrapper.style.visibility = "hidden";
        th.style.display = "none";
          
     }
    else {
        tableWrapper.style.visibility = "visible";
    }
} */
var myMap;
var myMap2;
ymaps.ready(init);
function init() {
    myMap = new ymaps.Map('map', {
        center: [55.753994, 37.622093],
        zoom: 2
    },{
        searchControlProvider: 'yandex#search'
    });
    myMap2 = new ymaps.Map('map2', {
        center: [55.753994, 37.622093],
        zoom: 2
    },{
        searchControlProvider: 'yandex#search'
    });
    // Вывод меток...
}


/* let tableWrapper = document.getElementById("myTable");



let vl = 0;

document.querySelector("#submit").onclick = function() {
    
    // let text = document.querySelector('input');
    // let val = text.value;
    // // alert(val);
    // let rows = document.querySelector('tr');
    // console.log(rows)

  // Объявить переменные
    vl = 0;
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    let th = document.getElementById("myTh");
    
    // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
    th.style.display = "";
    for (i = 0; i < tr.length; i++) {
        for (j = 0; j < 4; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
            txtValue = td.textContent || td.innerText;
            if ((txtValue.toUpperCase()).includes(filter)) {
                tr[i].style.display = "";
                vl++;
                if (j == 1 || j == 3)
                {
                    
                ymaps.geocode(txtValue).then(function (res) {
                    var coord = res.geoObjects.get(0).geometry.getCoordinates();
                    var myPlacemark = new ymaps.Placemark(coord, null, {
                        preset: 'islands#blueDotIcon'
                    });
                    myMap.geoObjects.add(myPlacemark);
                });
                }
                if (vl == 1)
                {    
                    tr[i].classList.remove('green__rd');
                    tr[i].classList.remove('yellow__rd');
                    tr[i].classList.add('green__rd');
                } else {
                    tr[i].classList.remove('green__rd');
                    tr[i].classList.remove('yellow__rd');
                    tr[i].classList.add('yellow__rd');
                }
                break;
            } else {
                tr[i].style.display = "none";
            }
            }
        }
        
    }

    if (vl == 0 || filter == '') {
        tableWrapper.style.visibility = "hidden";
        th.style.display = "none";
          
     }
    else {
        tableWrapper.style.visibility = "visible";
    }
} */

let tableWrapper = document.getElementById("myTable");


let map_container = document.getElementById("map_con");
map_container.style.display = "none";
let vl = 0;

document.querySelector("#submit").onclick = function() {
    myMap.geoObjects.removeAll()
    map_container.style.display = "";
    // let text = document.querySelector('input');
    // let val = text.value;
    // // alert(val);
    // let rows = document.querySelector('tr');
    // console.log(rows)

  // Объявить переменные
    vl = 0;
    
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    let th = document.getElementById("myTh");

    let td1;
    let td3;
    let td11;
    let td33;
    let txtValue1;
    let txtValue3;
    let txtValue11;
    let txtValue33;

    // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
    th.style.display = "";
    for (i = 0; i < tr.length; i++) {
        /* for (j = 0; j < 4; j++)
        { */
            td = tr[i].getElementsByTagName("td")[4];
            if (td) {
            txtValue = td.textContent || td.innerText;
            if ((txtValue.toUpperCase()).includes(filter)) {
                tr[i].style.display = "";
                vl++;
                td1 = tr[i].getElementsByTagName("td")[1];
                td3 = tr[i].getElementsByTagName("td")[3];
                td11 = tr[i].getElementsByTagName("td")[0];
                td33 = tr[i].getElementsByTagName("td")[2];
                txtValue1 = td1.textContent || td1.innerText;
                txtValue3 = td3.textContent || td3.innerText;
                txtValue11 = td11.textContent || td11.innerText;
                txtValue33 = td33.textContent || td33.innerText;
                ymaps.geocode(txtValue1).then(function (res) {
                    var coord = res.geoObjects.get(0).geometry.getCoordinates();
                    var myPlacemark = new ymaps.Placemark(coord, {
                        iconContent: txtValue11
                    }, {
                        preset: 'islands#darkOrangeStretchyIcon'
                    });
                    myMap.geoObjects.add(myPlacemark);
                });

                ymaps.geocode(txtValue3).then(function (res) {
                    var coord = res.geoObjects.get(0).geometry.getCoordinates();
                    var myPlacemark = new ymaps.Placemark(coord, {
                        iconContent: txtValue33
                    }, {
                        preset: 'islands#darkOrangeStretchyIcon'
                    });
                    myMap2.geoObjects.add(myPlacemark);
                });
                if (vl == 1)
                {    
                    tr[i].classList.remove('green__rd');
                    tr[i].classList.remove('yellow__rd');
                    tr[i].classList.add('green__rd');
                } else {
                    tr[i].classList.remove('green__rd');
                    tr[i].classList.remove('yellow__rd');
                    tr[i].classList.add('yellow__rd');
                }
                /* break; */
            } else {
                tr[i].style.display = "none";
            }
            }
        /* } */
    }

    if (vl == 0 || filter == '') {
        tableWrapper.style.visibility = "hidden";
        th.style.display = "none";
          
     }
    else {
        tableWrapper.style.visibility = "visible";
    }
}
  

