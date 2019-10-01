<?php header('Content-Type: text/html; charset=utf-8'); ?>
<?php header('Content-Language: fr'); ?>
<!doctype html>
<html class="no-js" lang="fr">

<head>
    <title>404</title>

    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" type="image/x-icon" href="img/cesi_favicon.png">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style_minified.css">
</head>

<body>
    <?php require "header.html" ?>
    <div class="slider_area">
        <div class="slider_active owl-carousel">
            <div class="single_slider  d-flex align-items-center justify-content-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="slider_text text-center">
                                <h1 style="color: #de1819">Erreur 404</h1>
                                <h2><a href="https://exia-conference.alwaysdata.net" style="text-decoration: underline">Retourner à la page d'accueil</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img id="bg-img" src="img/banner/campus3.jpg" alt="photo of the CESI campus" style="filter: grayscale()">
<?php require "footer.html" ?>
</body>
</html>