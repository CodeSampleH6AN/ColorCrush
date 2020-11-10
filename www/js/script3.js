window.onload = function() {

    document.getElementById('calculatetper').addEventListener('click', calcNew);


    function calcNew(e) {

        var mkgbriz = document.getElementById('mkgbriz').value;
        mkgbriz = mkgbriz;
        var mkgboje = document.getElementById('mkgboje').value;
        mkgboje = mkgboje;
        var ntest = document.getElementById('ntest').value;
        ntest = ntest;
        var tper = document.getElementById('tper').value;
        tper = tper;

        var tperresult = (100 * (mkgboje / ntest)) / ((mkgbriz - (mkgboje / ntest)));
        var mkgbojeresult = (((mkgbriz - (mkgboje / ntest)) * tper)) / 100;
        document.getElementById('tperresult').innerHTML = "Trenutni procenat boje:&#160;" + tperresult.toFixed(2) + " %";
        document.getElementById('mkgbojeresult').innerHTML = "Tra&#382;ena masa boje:&#160;" + mkgbojeresult.toFixed(6) + " kg";
    }

};
