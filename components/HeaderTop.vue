<template>
    <header id="header">
        <div class="header-inner">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 clearfix">
                        <div class="brand">
                            <div class="logo">
                                <nuxt-link to="/">
                                    <img src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1458914238/cavalotrucado/logo_cavalo-trucado.png" alt="Cavalo Trucado">
                                </nuxt-link>
                            </div><!-- /.logo -->
                            
                            <!-- div class="slogan"><div class="fb-like" data-href="https://www.facebook.com/Cavalo-Trucado-1577216232376023/" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div></div> -->
                        </div><!-- /.brand -->
                        
                        <!-- button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button -->

                        <nav class="navbar-collapse navbar-collapse" role="navigation">
                            <ul class="navigation">

                                <li><nuxt-link to="/">Home</nuxt-link></li>
                                <li><nuxt-link to="/caminhoes">Estoque</nuxt-link></li>				
                                <li><nuxt-link to="/contato">Contato</nuxt-link></li>                   
    
                            </ul><!-- /.nav -->
                        </nav>
                    </div><!-- /.col-md-12 -->
                </div><!-- /.row -->
            </div><!-- /.container -->
        </div><!-- /.header-inner -->
    </header><!-- /#header -->
</template>

<style lang="scss">
    .topbar .header-top-right>div {
        float: right;
    }
    @media (max-width: 992px) {
        .topbar .header-top-right>div {
        float: none;
    }
    }.topbar .header-top-left>div {
        float: left;
    }
    @media (max-width: 992px) {
        .topbar .header-top-left>div {
        float: none;
    }
    }#header .header-inner {
        padding: 25px 0px;
    }
    #header .header-inner .brand {
        float: left;
    }
    #header .header-inner .brand .logo {
        display: inline-block;
    }
    #header .header-inner .brand .slogan {
        border-left: 2px solid #f0f0f0;
        color: #464646;
        display: inline-block;
        margin-left: 20px;
        padding: 5px 0px 5px 20px;
        vertical-align: middle;
    }
    #header .header-inner .navbar-toggle {
        background-color: transparent;
        border-radius: 0px;
        margin-right: 0px;
        margin-top: 12px;
        padding: 0px;
    }
    #header .header-inner .navbar-toggle .icon-bar {
        background-color: #f95446;
        height: 3px;
    }
    #header .header-inner .navbar-toggle:active, #header .header-inner .navbar-toggle:focus {
        outline: 0px;
    }
    @media (max-width: 767px) {
        #header .header-inner .navbar-collapse {
        left: 0px;
        margin-top: 63px;
        overflow: visible;
        padding: 0px;
        position: absolute;
        right: 0px;
        z-index: 9999;
        }
        
    #header .header-inner .navbar-collapse .navigation {
        background-color: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        float: none;
        margin: 0px;
    }
    #header .header-inner .navbar-collapse .navigation>li {
        display: block;
        float: none;
    }
    #header .header-inner .navbar-collapse .navigation>li>a:hover {
        border-radius: 0px !important;
    }
    }#header .header-inner .navigation {
        float: right;
        list-style: none;
        margin: 3px 0px 0px 0px;
        padding: 0px;
    }
    #header .header-inner .navigation>li {
        float: left;
    }
    #header .header-inner .navigation>li.active>a {
        background-color: transparent;
        color: #f95446;
    }
    #header .header-inner .navigation>li>a {
        -webkit-transition: none;
        -moz-transition: none;
        -o-transition: none;
        transition: none;
        border-radius: 0px;
        color: #252525;
        display: block;
        font-family: 'Source Sans Pro',  Arial,  sans-serif;
        font-size: 16px;
        padding: 8px 15px;
        text-decoration: none;
    }
    #header .header-inner .navigation>li>a:hover {
        -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        background-color: #f95446;
        border-radius: 3px;
        color: #fff;
    }
    #header .header-inner .navigation>li:hover>a {
        -webkit-transition: none;
        -moz-transition: none;
        -o-transition: none;
        transition: none;
        border-radius: 0px;
        color: #252525;
        display: block;
        font-size: 16px;
        padding: 8px 15px;
        text-decoration: none;
        -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        background-color: #f95446;
        border-radius: 3px;
        color: #fff;
    }
    #header .header-inner .navigation>li:hover .regularmenu, #header .header-inner .navigation>li:hover .megamenu {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        opacity: 1;
        visibility: visible;
    }
    #header .header-inner .navigation>li.menuparent>a:after {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
        content: "\e641";
        display: inline-block;
        font-family: 'PictoPro-Normal';
        font-size: 12px;
        margin-left: 10px;
        vertical-align: 1px;
    }
    #header .header-inner .navigation>li.has-megamenu>a:before {
        -webkit-transition: opacity 0.2s linear;
        -moz-transition: opacity 0.2s linear;
        -o-transition: opacity 0.2s linear;
        transition: opacity 0.2s linear;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        border: 7px solid transparent;
        border-bottom-color: #f2f2f2;
        content: '';
        height: 0px;
        left: 50%;
        margin-left: -3px;
        position: absolute;
        top: 39px;
        width: 0px;
    }
    #header .header-inner .navigation>li.has-megamenu:hover>a {
        position: relative;
    }
    #header .header-inner .navigation>li.has-megamenu:hover>a:before {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        opacity: 1;
    }
    #header .header-inner .navigation>li.has-regularmenu {
        position: relative;
    }
    #header .header-inner .navigation>li .regularmenu {
        -webkit-transition: opacity 0.2s linear;
        -moz-transition: opacity 0.2s linear;
        -o-transition: opacity 0.2s linear;
        transition: opacity 0.2s linear;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        left: 50%;
        margin-left: -110px;
        padding: 15px 0px 0px 0px;
        position: absolute;
        visibility: hidden;
        width: 220px;
        z-index: 9999;
    }
    #header .header-inner .navigation>li .regularmenu .regularmenu-inner {
        -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        background-color: #f2f2f2;
        list-style: none;
        margin: 0px;
        padding: 0px;
    }
    #header .header-inner .navigation>li .regularmenu .regularmenu-inner:before {
        border: 7px solid transparent;
        border-bottom-color: #f2f2f2;
        content: '';
        height: 0px;
        left: 50%;
        margin-left: -12px;
        position: absolute;
        top: 1px;
    }
    #header .header-inner .navigation>li .regularmenu .regularmenu-inner li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    #header .header-inner .navigation>li .regularmenu .regularmenu-inner li:last-child {
        border-bottom: 0px;
    }
    #header .header-inner .navigation>li .regularmenu .regularmenu-inner li a {
        -webkit-transition: all 0.1s linear;
        -moz-transition: all 0.1s linear;
        -o-transition: all 0.1s linear;
        transition: all 0.1s linear;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
        opacity: 0.8;
        color: #252525;
        display: block;
        font-size: 12px;
        padding: 9px 12px;
    }
    #header .header-inner .navigation>li .regularmenu .regularmenu-inner li a .icon {
        font-size: 16px;
        margin: 0px 5px 0px 0px;
    }
    #header .header-inner .navigation>li .regularmenu .regularmenu-inner li a:hover {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        opacity: 1;
        text-decoration: none;
    }
    #header .header-inner .navigation>li .megamenu {
        -webkit-transition: opacity 0.2s linear;
        -moz-transition: opacity 0.2s linear;
        -o-transition: opacity 0.2s linear;
        transition: opacity 0.2s linear;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        left: 15px;
        padding-top: 15px;
        position: absolute;
        right: 15px;
        visibility: hidden;
        z-index: 999999;
    }
    #header .header-inner .navigation>li .megamenu .megamenu-inner {
        -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        background-color: #f2f2f2;
        padding: 20px 0px;
        position: relative;
    }
    #header .header-inner .navigation>li .megamenu .megamenu-inner h2 {
        color: #00374b;
        font-size: 20px;
        font-weight: normal;
        margin: 0px 0px 40px 0px;
    }
    #header .header-inner .navigation>li .megamenu .megamenu-inner .title {
        margin: 0px;
        font-size: 14px;
    }
    #header .header-inner .navigation>li .megamenu .megamenu-inner .title a {
        color: #252525;
    }
    #header .header-inner .navigation>li .megamenu .megamenu-inner .price {
        color: #252525;
    }
    #header .header-inner .navigation>li .megamenu .megamenu-inner .random-cars p {
        line-height: 20px;
    }
    #header .header-inner .navigation>li .megamenu .megamenu-inner .latest-reviews .block-inner {
        padding: 0px;
    }
    #header .header-inner .navigation>li .megamenu .megamenu-inner .title a {
        font-size: 16px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        #header .header-inner {
        text-align: center;
    }
    #header .header-inner .brand {
        display: inline-block;
        float: none;
    }
    #header .header-inner .brand .slogan {
        text-align: left;
    }
    #header .header-inner .navigation {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        display: inline-block;
        float: none;
        margin-top: 25px;
        padding-top: 20px;
        text-align: left;
    }
    }
    @media (max-width: 767px) {
        #header .header-inner .brand .slogan {
            margin-left: 0px;
            margin-top: 15px;
            display: block;
            border-left: 0px;
            border-left: none;
            color: #fff;
        }
    }
    .infobar {
        background-color: #00374b;
    }
    .infobar .breadcrumb {
        background-color: transparent;
        margin: 0px;
        padding-left: 0px;
    }
    @media (max-width: 767px) {
        .infobar .breadcrumb {
        overflow: hidden;
        text-align: center;
        width: 100%}
    }
    .infobar .breadcrumb li {
        font-size: 12px;
        line-height: 20px;
    }
    .infobar .breadcrumb li a {
        color: #fff;
    }
    .infobar .breadcrumb li.active {
        color: #fff;
    }
    .infobar .contact .contact-item {
        display: inline-block;
        font-size: 14px;
    }
    .infobar .contact .contact-item .label {
        color: #f95446;
        display: inline;
    }
    .infobar .contact .contact-item .label .icon {
        font-size: 20px;
        vertical-align: -5px;
    }
    .infobar .contact .contact-item .value {
        color: #fff;
        display: inline;
        line-height: 36px;
    }
    .infobar .contact .contact-item .value a {
        color: #fff;
        text-decoration: none;
    }
    @media (max-width: 767px) {
        .infobar .contact {
        float: none !important;
    }
    .infobar .contact .contact-item {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: block;
        text-align: center;
    }
    }
    .topbar {
        position: relative;
    }
    .topbar .news {
        font-size: 12px;
        line-height: 30px;
    }
    .topbar .news ul {
        margin: 0px;
        padding: 0px;
    }
    .topbar .news ul li {
        width: 100% !important;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        .topbar .news {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
        }
    }
    @media (max-width: 767px) {
        .topbar .news {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
            text-align: center;
        }
    }
    @media (min-width: 768px) and (max-width: 990px) {
        .topbar .header-top-right {
            padding-bottom: 10px;
        }
        .topbar .header-top-right .search-form .input-group {
            width: 200px;
        }
    }
    @media (max-width: 767px) {
        .topbar .header-top-right {
            padding-bottom: 10px;
            text-align: center;
        }
        .topbar .header-top-right .social {
            display: inline-block;
            float: none;
        }
        .topbar .header-top-right .languages {
            display: inline-block;
            float: none;
            vertical-align: top;
        }
        .topbar .header-top-right .search-form {
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            float: none;
            margin-top: 5px;
            padding-top: 10px;
        }
        .topbar .header-top-right .search-form .input-group {
            width: auto;
        }
    }

</style>

