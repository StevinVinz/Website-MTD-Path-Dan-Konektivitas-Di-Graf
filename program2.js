document.getElementById('btnAnalisis').addEventListener('click', function() {
    const v = parseInt(document.getElementById('vertex').value);
    const e = parseInt(document.getElementById('edge').value);
    const delta = parseInt(document.getElementById('minDegree').value);
    const resDiv = document.getElementById('result');

    if (isNaN(v) || isNaN(e) || isNaN(delta)) {
        alert("Harap isi semua data dengan angka!");
        return;
    }

    resDiv.style.display = "block";
    resDiv.style.backgroundColor = "#e8f8f5";
    resDiv.style.color = "#2c3e50";

    // Logika Analisis Cut-Set
    // Cut-set minimum (edge connectivity) tidak akan pernah melebihi derajat minimum (delta)
    let edgeConnectivityMax = delta;
    
    // Analisis dasar berdasarkan Teorema Whitney
    let htmlResult = `<strong>Hasil Analisis:</strong><br><br>`;
    htmlResult += `1. <strong>Edge Cut-Set:</strong> Minimal butuh membuang sekitar 1 sampai ${delta} edge untuk memutus graph ini.<br>`;
    htmlResult += `2. <strong>Vertex Cut-Set:</strong> Minimal butuh membuang ≤ ${delta} titik untuk memutus graph.<br><br>`;
    
    if (e < v - 1) {
        htmlResult += `<span style="color:red">Peringatan: Graph sudah terputus karena jumlah edge terlalu sedikit!</span>`;
    } else {
        htmlResult += `<span style="color:green">Konektivitas Maksimum: G memiliki potensi kekuatan konektivitas sebesar ${delta}.</span>`;
    }

    resDiv.innerHTML = htmlResult;
});