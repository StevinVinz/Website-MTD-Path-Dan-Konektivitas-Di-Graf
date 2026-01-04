function cekJawaban() {
    let skor = 0;

    let jawaban = {
        q1: "b",
        q2: "b",
        q3: "c",
        q4: "a",
        q5: "b"
    };

    for (let soal in jawaban) {
        let pilih = document.querySelector(`input[name="${soal}"]:checked`);
        if (pilih && pilih.value === jawaban[soal]) {
            skor++;
        }
    }

    document.getElementById("hasil").innerHTML =
        "Skor Anda: " + skor + " dari 5";
}
