
document.getElementById("submit").addEventListener("click", function () {

    var numb1 = document.getElementById("numb1").value;
    var numb2 = document.getElementById("numb2").value;

    if (numb1 === "" || numb2 === "") {
        alert("Mohon isi kedua bilangan terlebih dahulu!");
        return;
    }


    var result = parseInt(numb1) + parseInt(numb2);
    alert("Hasil penjumlahan: " + result);
});


document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("numb1").value = "";
    document.getElementById("numb2").value = "";
});

document.getElementById('btn-submit').addEventListener("click", function () {

})

function daftar() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "" || email === "" || alamat === "") {
        window.alert("Harap isi semua field!");
    } else {
        window.alert("Pendaftaran berhasil!");
    }
}