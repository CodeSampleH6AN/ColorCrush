$('html').bind('keypress', function (e) {
    if (e.charCode == 44) {
        return false;
    }
    if (e.charCode == 45) {
        return false;
    }
    if (e.charCode == 32) {
        return false;
    }
});
