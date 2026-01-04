function cekPath() {
    let path = document.getElementById("pathInput").value.trim().toUpperCase();
    let nodes = path.split("");

    let hasilText = "";
    let alasanText = "";

    // Mengecek apakah ada simpul yang berulang
    let uniqueNodes = [...new Set(nodes)];

    let isSimple = (uniqueNodes.length === nodes.length);
    let isOpen = (nodes[0] !== nodes[nodes.length - 1]);
    let isClosed = (nodes[0] === nodes[nodes.length - 1]);

    // Menentukan jenis path
    if (isClosed && isSimple === false) {
        hasilText = "Jenis Path: Path Tertutup";
        alasanText = "Alasan: Path tertutup Karena simpul awal dan simpul akhir berakhir pada simpul yang sama.";
    } 
    else if (isOpen && isSimple) {
        hasilText = "Jenis Path: Path Sederhana";
        alasanText = "Alasan: Path Sederhana karena simpul awal dan simpul akhir berakhir dengan simpul yang berbeda.";
    } 
    else if (isOpen && !isSimple) {
        hasilText = "Jenis Path: Path Terbuka";
        alasanText = "Alasan: Path terbuka Karena simpul berawal dan simpul akhir berakhir dengan simpul yang berbeda. Tetapi simpulnya boleh mengulang";
    }

    document.getElementById("hasil").innerText = hasilText;
    document.getElementById("alasan").innerText = alasanText;
}
