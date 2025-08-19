let produkDipilih = '';

function konfirmasiPesan(produk) {
  if (confirm('Anda yakin ingin memesan ' + produk + '?')) {
    document.getElementById('produkSelect').value = produk;
    document.getElementById('produkSelect').scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById('formPemesanan').addEventListener('submit', function(e) {
    e.preventDefault(); // cegah reload
  
    const form = this;
    const nama = form.nama.value.trim();
    const produk = form.produk.value;
    const jumlah = form.jumlah.value.trim();
    const alamat = form.alamat.value.trim();
    const pesan = form.pesan.value.trim();
  
    if (!nama || !jumlah || !alamat) {
      alert("Nama, Jumlah, dan Alamat harus diisi!");
      return;
    }
  
    const nomorWA = '6281347828549'; // ganti sesuai nomor WhatsApp tujuan
  
    const url = 'https://wa.me/' + nomorWA + '?text=' + encodeURIComponent(
      `Halo, saya ingin memesan:
  Nama: ${nama}
  Produk: ${produk}
  Jumlah: ${jumlah} kg
  Alamat Pengiriman: ${alamat}
  Pesan: ${pesan}`
    );
  
    window.open(url, '_blank'); // buka WhatsApp dengan pesan terisi
    form.reset(); // reset formulir setelah klik
  });
