document.addEventListener('DOMContentLoaded', function () {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Materialbox.init(document.querySelectorAll('.materialboxed'));
    M.Parallax.init(document.querySelectorAll('.parallax'));

    var foo = $('#gallery');
    foo.poptrox({
        usePopupCaption: true,
        usePopupCloser: false,
        usePopupNav: true,
        usePopupForceClose: true,
        usePopupDefaultStyling: false,

        overlayOpacity: 0,
        popupCloserText: '',
        popupHeight: 150,
        popupLoaderText: '',
        usePopupLoader: true,
        onPopupClose: function () { document.getElementsByClassName("body")[0].classList.remove('modal-active'); },
        onPopupOpen: function () { document.getElementsByClassName("body")[0].classList.add('modal-active'); },
        caption: function ($a) {

            var s = '';

            $a.nextAll().each(function () {
                s += this.outerHTML;
            });

            return s;

        },
        fadeSpeed: 300,
    });
});

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});