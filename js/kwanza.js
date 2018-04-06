function favoriteThisMovie(el) {
    var el = $(el).children().first();
    var alertEl = $('.alert-favorite');
    el.toggleClass('program-liked');
    if (el.hasClass("program-liked")) {
        alertEl.removeClass('hidden');
        window.setTimeout(function () {
            alertEl.addClass('hidden');
        }, 2000);
    }
}

function openSearchBar(el) {
    var searchbar = $('.searchbar-kwanza');
    searchbar.toggleClass('hidden'); 
}