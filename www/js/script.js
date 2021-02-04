window.onload = function () {

    document.getElementById('calculateit').addEventListener('click', calcNew);

    function calcNew(e) {
        var materialinkg = document.getElementById('materialinkg').value;
        materialinkg = materialinkg;
        var colorper = document.getElementById('colorper').value;
        colorper = colorper;
        if (materialinkg === "") {
            materialinkg = materialinkg + 25;
        }
        var resultgr = (materialinkg * colorper * 10) / 1000;
        document.getElementById('resultgr').innerHTML = "Boja:&#160;" + resultgr.toFixed(4) + " kg";

        if (colorper === "") {
            document.getElementById('resultgr').innerHTML = "Boja:&#160;" + (colorper - 0) + " kg";
        }

        if (materialinkg < "0.1") {
            document.getElementById('resultgr').innerHTML = "Boja:&#160;" + resultgr.toFixed(6) + " kg";
        }

        if (materialinkg < "0.001") {
            document.getElementById('resultgr').innerHTML = "Boja:&#160;" + resultgr.toFixed(8) + " kg";
        }
    }


};