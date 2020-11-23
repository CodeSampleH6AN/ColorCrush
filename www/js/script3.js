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
        var mkgbojeresultnt = (((mkgbriz - (mkgboje / ntest)) * tper)) / 10;
        document.getElementById('tperresult').innerHTML = "Trenutni procenat boje:&#160;" + tperresult.toFixed(2) + " %";
        document.getElementById('mkgbojeresult').innerHTML = "Tra&#382;ena masa boje za 1 brizganje:&#160;" + mkgbojeresult.toFixed(6) + " kg";
        document.getElementById('mkgbojeresultnt').innerHTML = "Tra&#382;ena masa boje na&#160;" + document.getElementById('ntest').value + "&#160;testiranja:&#160;" + mkgbojeresultnt.toFixed(6) + " kg";

        if (mkgbriz === "") {
            document.getElementById('tperresult').innerHTML = "Trenutni procenat boje:&#160;" + (mkgbriz - 0) + " %";
        }
        if (mkgbriz === "") {
            document.getElementById('mkgbojeresult').innerHTML = "Tra&#382;ena masa boje za 1 brizganje:&#160;" + (mkgbriz - 0) + " kg";
        }
        if (mkgboje === "") {
            document.getElementById('tperresult').innerHTML = "Trenutni procenat boje:&#160;" + (mkgboje - 0) + " %";
        }
        if (mkgboje === "") {
            document.getElementById('mkgbojeresult').innerHTML = "Tra&#382;ena masa boje za 1 brizganje:&#160;" + (mkgboje - 0) + " kg";
        }
        if (ntest === "") {
            document.getElementById('tperresult').innerHTML = "Trenutni procenat boje:&#160;" + (ntest - 0) + " %";
        }
        if (ntest === "") {
            document.getElementById('mkgbojeresult').innerHTML = "Tra&#382;ena masa boje za 1 brizganje:&#160;" + (ntest - 0) + " kg";
        }
        if (tper === "") {
            document.getElementById('mkgbojeresult').innerHTML = "Tra&#382;ena masa boje za 1 brizganje:&#160;" + (tper - 0) + " kg";
        }
        if (mkgbriz === "") {
            document.getElementById('mkgbojeresultnt').innerHTML = "Tra&#382;ena masa na&#160;" + (mkgbriz - 0) + "&#160;testiranja:&#160;" + (mkgbriz - 0) + " kg";
        }
        if (mkgboje === "") {
            document.getElementById('mkgbojeresultnt').innerHTML = "Tra&#382;ena masa na&#160;" + (mkgboje - 0) + "&#160;testiranja:&#160;" + (mkgboje - 0) + " kg";
        }
        if (tper === "") {
            document.getElementById('mkgbojeresultnt').innerHTML = "Tra&#382;ena masa na&#160;" + (ntest - 0) + "&#160;testiranja:&#160;" + (tper - 0) + " kg";
        }
        if (ntest === "") {
            document.getElementById('mkgbojeresultnt').innerHTML = "Tra&#382;ena masa na&#160;" + (ntest - 0) + "&#160;testiranja:&#160;" + (ntest - 0) + " kg";
        }
    }

};
