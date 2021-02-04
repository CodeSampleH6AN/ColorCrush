$('input').keypress(function (e) {
    var a = [];
    var k = e.which;
    if (e.charCode === 46) {
        // if dot is the first symbol
        if (e.target.value.length === 0) {
            e.preventDefault();
            return;
        }

        // if there are dots already 
        if (e.target.value.indexOf('.') !== -1) {
            e.preventDefault();
            return;
        }

        a.push(e.charCode);
    }
    for (i = 48; i < 58; i++)
        a.push(i);
    if (!($.inArray(k, a) >= 0))
        e.preventDefault();
});