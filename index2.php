<?php
$id = '1Crlt1YcOI--Jt_5dYOjmSih9bXK4aikrYbL1muNqlz0';
$gid = 0;
$csv = file_get_contents('https://docs.google.com/spreadsheets/d/' . $id . '/export?format=csv&gid=' . $gid);
$csv = explode("\r\n", $csv);
$array = array_map('str_getcsv', $csv);
/* echo '<pre>'; */
/* print_r($array); */
?>

<!DOCTYPE html>
<html lang="ru">
<head class="header">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Федеральная служба по аккредитации</title>
    <link rel="stylesheet" href="./css/recet.css">
    <link rel="stylesheet" href="./css/style2.css">



<!--     <script src="https://api-maps.yandex.ru/2.1/?load=Geolink&amp;lang=ru_RU&amp;apikey=a9602819-82b7-4608-8e44-ee92cc2c208e" type="text/javascript"></script>
    <style type="text/css">
        #whiteText {
            background-color: #110;
            color: white;
            padding: 5px 0px 5px 8px;
        }

        #box {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            font-family: Arial, sans-serif;
            font-size: 15px;
            line-height: 22px;
        }
    </style>  -->
    
 <!--    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&load=Geolink"
 type="text/javascript"></script> -->
<!-- <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=a9602819-82b7-4608-8e44-ee92cc2c208e" type="text/javascript"></script>
                                            
<style type="text/css">
        #map {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
}
</style> -->
<!--     <script type="text/javascript">
        ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 7
            });
        }
    </script> -->

</head>
<body>
    <!--Header start-->
    <div class="header">
        <div class="wrapper header__wrapper">
            <a href="indexmain.php" class="header__logo-link">
                <div class="header__logo">
                    <img src="./img/logo-ico.png" alt="Росаккредитация" class="header__logo-pic">
                </div>
            </a>
            <nav class="header__nav">
                <ul class="header__ul">
                    <li class="header__li">
                        <a href="index.php" class="header__link">Поиск параметров</a>
                    </li>

                    <li class="header__li">
                        <a href="index2.php" id="hLink" class="header__link">Карты</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <!--Header end-->
    <!--Main start-->
    <section class="main">
        <div class="main__wrapper">
            <h1 class="main__title">
                Введите ключевые слова товара:
            </h1>
            <div class="main__search-section">
                <input id="myInput" type="text" class="main__input" placeholder="Общее наименование продукции">
                <button id="submit" type="submit" class ="main__button">Поиск</button>
            </div>
            <div id="myTable" class="table__wrapper">
                <table class="table">   
               <!--  <span class="ymaps-geolink"> Москва, ул. Крылатские холмы, 26 </span>  -->    
                    <?php
                        $i = 0;
                        $html = '<thead>';
                        foreach($array as $arr) {
                            $i++;
                            if ($i == 1) {
                                $html .= '<tr id="myTh">';
                                foreach ($arr as $val) {
                                    $html .= '<th scope="row">' . $val . '</th>';
                                }
                                $html .= '<tr>';
                                $html .= '</thead>';
                                $html .= '<tbody>';
                            }
                            else {
                                $html .= '<tr>';
                                foreach ($arr as $val) {
                                    $html .= '<td scope="row">' /* . '<div class= "maplink"> <span class="ymaps-geolink">' */ . $val . /* '</span> </div>' .  */'</td>';
                                }
                                $html .= '<tr>'; 
                            }   
                        }
                        $html .= '</tbody>';
                        echo $html;
                    ?> 
                
                </table>
                
            </div>
                <div id= "map_con" class="map__containers">
                    <div class="map__container">
                        <h2 class="map_title"> Адреса заявителей: </h2>
                        <div id="map" style="width: 900px; height: 550px"></div>
                    </div>
                    <div class="map__container">
                        <h2 class="map_title"> Адреса изготовителей: </h2>
                        <div id="map2" style="width: 900px; height: 550px"></div>
                    </div>
                </div>       
                                    
        </div>
                        

         <!--    <div>
                <iframe src="" width="600" heigth="500">

                </iframe>
            </div> -->
    </section>
    <!--Main end-->
    <!--End start-->

    <footer class="footer">
        <div class="wrapper footer__wrapper">
            <span class="footer__copyright">© 2022 Конышевские волки</span>
        </div>
    </footer>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=a9602819-82b7-4608-8e44-ee92cc2c208e&lang=ru_RU" type="text/javascript">     </script>
    <script src="./js/main2.js"></script>
   <!--  <script src="./js/claster.js"></script> -->
<!--     <script src="./js/maps.js"></script> -->
</body>
</html>
