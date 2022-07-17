<?php
$id = '1gjQ79a7BrqgR7a8TzVY7uWjdkTQT_jUvlZPQTLXmjno';
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
    <link rel="stylesheet" href="./css/style.css">
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
                        <a href="index.php" id="hLink" class="header__link">Поиск параметров</a>
                    </li>

                    <li class="header__li">
                        <a href="index2.php" class="header__link">Карты</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <!--Header end-->
    <!--Main start-->
    <section class="main">
        <div class="wrapper main__wrapper">
            <h1 class="main__title">
                Введите ключевые слова товара:
            </h1>
            <div class="main__search-section">
                <input id="myInput" type="text" class="main__input" placeholder="Общее наименование продукции">
                <button id="submit" type="submit" class ="main__button">Поиск</button>
            </div>
            <div id="myTable" class="table__wrapper">
                <table class="table">        
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
                                    $html .= '<td scope="row">' . $val . '</td>';
                                }
                                $html .= '<tr>'; 
                            }   
                        }
                        $html .= '</tbody>';
                        echo $html;
                    ?>                    
                </table>
            </div>
        </div>
    </section>
    <!--Main end-->
    <!--End start-->

    <footer class="footer">
        <div class="wrapper footer__wrapper">
            <span class="footer__copyright">© 2022 Конышевские волки</span>
        </div>
    </footer>
    <script src="./js/main.js"></script>
</body>
</html>