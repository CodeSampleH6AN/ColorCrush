window.onload = function () {

    document.getElementById('calculate').addEventListener('click', calcNew);


    function calcNew(e) {

        var mkg = document.getElementById('mkg').value;
        mkg = mkg;
        var mvkg = document.getElementById('mvkg').value;
        mvkg = mvkg;
        var cper = document.getElementById('cper').value;
        cper = cper;
        var mper = document.getElementById('mper').value;
        mper = mper;
        if (mkg === "") {
            mkg = mkg + 25;
        }


        var colorresult = (mkg * cper * 10) / 1000;
        var millresult = (mper * mkg * cper + mper * 100 * mkg) / (10000 - (mper * 100));
        var perresult = 10000 * mvkg / (mkg * cper + 100 * mkg + 100 * mvkg);
        document.getElementById('colorresult').innerHTML = "Boja:&#160;" + colorresult.toFixed(3) + " kg";
        document.getElementById('millresult').innerHTML = "Meljava:&#160;" + millresult.toFixed(0) + " kg";
        document.getElementById('perresult').innerHTML = "Meljava:&#160;" + perresult.toFixed(0) + " %";

        if (cper === "") {
            document.getElementById('colorresult').innerHTML = "Boja:&#160;" + (cper - 0) + " kg";
        }

        if (mper === "") {
            document.getElementById('millresult').innerHTML = "Meljava:&#160;" + (mvkg - 0) + " kg";
        }
        if (mvkg === "") {
            document.getElementById('perresult').innerHTML = "Meljava:&#160;" + (mper - 0) + " %";
        }

        if (mkg < "1") {
            document.getElementById('colorresult').innerHTML = "Boja:&#160;" + 0 + " kg";
        }

    }

};