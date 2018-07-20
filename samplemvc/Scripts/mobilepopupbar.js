function loadpopup() {
    //Open Pop up window only once on page load. set the expiration of the cookie of 1 day by cookie name "popped=yes"
    if (get_cookie('popped') == '') {
        openpopup()
        document.cookie = "popped=yes"
        createCookie("popped", "yes", 1);
    }

    //Directly call "openpopup()" function to open pop up

}
function openpopup() {

    if ($(window).width() >= 768) {
        $(document).ready(function () {
            $(".mobile__pop_main_desktop").hide();
            $(".mobile__pop_main_desktop").delay(500).fadeIn();
            $('.close_subscription_mobile').click(function () {
                $(".mobile__pop_main_desktop").fadeOut(500);

            });
        });
    }

    if ($(window).width() < 768) {
        $(document).ready(function () {
            $('.mobile__pop_main_desktop').delay(200).queue(function () {
                if ($(window).height() < 350) {
                    $('.mobile__pop_main_desktop').css('bottom', '-220px');
                } else if ($(window).height() < 420) {
                    $('.mobile__pop_main_desktop').css('bottom', '-275px');
                } else {
                    $(this).css('bottom', '-225px');
                }
            });
            $('.mobile__pop_main_desktop').click(function () {
                $('.mobile__pop_main_desktop').delay(300).css('bottom', '0px');
            });

            $(document).on("click", ".close_subscription_mobile", function (e) {
                $('.mobile__pop_main_desktop').delay(200).css('bottom', '-510px');
            });
        });
    }

    //$.fancybox({
    //    'href': '#newuserspopup',
    //    helpers: {
    //        overlay:
    //            { closeClick: false }

    //    }
    //});
}

function get_cookie(Name) {
    var search = Name + "="
    var returnvalue = "";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) { // if cookie exists
            offset += search.length

            end = document.cookie.indexOf(";", offset);

            if (end == -1)
                end = document.cookie.length;
            returnvalue = unescape(document.cookie.substring(offset, end))
        }
    }
    return returnvalue;
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
onload = loadpopup
//onload = setTimeout(loadpopup, 1000);