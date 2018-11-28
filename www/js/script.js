window.onload = function() {

    document.getElementById('calculateit').addEventListener('click', calcNew);

    function calcNew(e) {
        var materialinkg = document.getElementById('materialinkg').value;
        materialinkg = materialinkg;
        var colorper = document.getElementById('colorper').value;
        colorper = colorper;
        if (materialinkg === "") {
            materialinkg = materialinkg + 25;
        }
        var resultgr = materialinkg * colorper * 10;
        document.getElementById('resultgr').innerHTML = "Boja:&#160;" + resultgr.toFixed(0) + " g";

    }


};

