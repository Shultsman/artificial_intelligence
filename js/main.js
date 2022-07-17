
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


let tableWrapper = document.getElementById("myTable");



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
}
  

