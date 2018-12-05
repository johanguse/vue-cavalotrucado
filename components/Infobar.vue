<template>
    <div class="infobar">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="contact pull-left">
                        <div class="contact-item phone">
                            <div class="label"><i class="icon icon-normal-mobile-phone"></i></div><!-- /.label -->
                            <div class="value"><a href="tel:47999999999">47 9 9999-9999 Tim / WhatsApp</a></div><!-- /.value -->
                        </div><!-- /.phone -->
                    </div><!-- /.contact -->
                </div><!-- /.col-md-12 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </div><!-- /.infobar -->
</template>

<style>
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
    }.infobar .breadcrumb li {
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
</style>

