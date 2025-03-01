// Toggle class active hamburger menu
const navbarNav = document.querySelector(' .navbar-nav');

// ketika humburger menu di click
document.querySelector('#hamburger-menu').
onclick = (e) => {
navbarNav.classList.toggle('active');
e.preventDefault();
};

//Toggle class active shoping cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}


// Click outside to close navbar and shopping cart
document.addEventListener('click', function (e) {
    const hm = document.querySelector('#hamburger-menu');
    const navbarNav = document.querySelector('.navbar-nav');
    const sc = document.querySelector('#shopping-cart-button');
    const shoppingCart = document.querySelector('.shopping-cart');
    
    // Close navbar if clicked outside
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    // Close shopping cart if clicked outside
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


//Modal Box
// Click outside to close modal
window.onclick = (e) => {
    const modal = document.querySelector('#item-detail-modal');
    if (e.target === modal) {
        Alpine.store('modal').close();
    }
};


//OrderNOW shortcut
document.addEventListener('DOMContentLoaded', function() {
    
    const maskPackOrderBtn = document.querySelector('.mask-pack-order-btn');
    const bedOrderBtn = document.querySelector('.bed-order-btn');
    const fetOrderBtn = document.querySelector('.fet-order-btn');
    
    //MaskOrderNow
    if (maskPackOrderBtn) {
      maskPackOrderBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const maskProduct = {
            id: 9,
            name: 'Masker Pack',
            img: 'mask.png',
            price: 55,
            description: 'Isi perPack: 50pcs<br><br>Warna:<br>➢White<br>➢Black<br>➢Gray<br>➢Blue<br>➢Peach<br>➢Beige'
        };
        
        // Open the modal
        Alpine.store('modal').open(maskProduct);
      });
    }
    //BedOrderNow
    if (bedOrderBtn) {
        bedOrderBtn.addEventListener('click', function(e) {
          e.preventDefault();
          
          const bedProduct = { 
            id: 2,
            name: 'Paket Nyaman Tidur Nyenyak (6 items)',
            img: 'packet2.png',modalImg: 'packetB.png',
            price: 3980,
            description: '1. Kasur Elastis Tinggi yang Lembut dan Tebal<br>2. Bantal Bersikulasi Tinggi<br>3. Selimut Musim Dingin Bahan Graphene<br>4. Sarung Bantal Model Amplop<br>5. Seprai yang bisa dicuci<br>6. Selimut Tipis Multifungsi<br><br>NOTICE!<br>➢Keras lembutnya Kasur hanya untuk referensi saja, tidak mewakili perasaan pribadi anda.<br>➢ Warna produk bisa saja tidak sama, silahkan merujuk pada produk yang sebenarnya.<br>➢Free ongkir untuk didalam pulau Taiwan, Untuk diluar pulau Taiwan akan dikenakan Biaya.<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6000 atau lebih, Gratis 1pc penyimpanan gantung samping tempat tidur<br>Note: Hadiah diatas dapat diakumulasikan.'
         };
          
          // Open the modal
          Alpine.store('modal').open(bedProduct);
        });
    }

    //FetOrderNow
    if (fetOrderBtn) {
        fetOrderBtn.addEventListener('click', function(e){
            e.preventDefault();

            const fetProduct = {
                id: 12,
                name: 'FET 360 Hari',
                img: 'FET.png',
                price: 3850,
                description: '360 Hari Unlimited Internet, 570GB/Bulan <br>(Penurunan kecepatan hingga 10Mbps setelah melewati batas kuota), <br>Pulsa telepon 600NTD(berlaku 60 hari setelah pengaktifan kartu) <br>Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya.<br> 2.Pembelian pulsa telepon dapat dipakai selama 180 hari.<br><br>Notes:<br>➢Usia Minimal 18 tahun untuk pemegang Passport China, Hong Kong, Filipina, Indonesia, Vietnam, Thailand dan Malaysia. Selain negara-negara yang telah disebutkan, batas Usia minimal 20 tahun<br>➢Perusahan provider kartu telepon menetapkan peraturan pemohon wajib untuk memberikan passport dan visa sebagai syarat pengaktifan kartu telepon, Tanda tangan pemohon di formulir pendaftaran dan surat persetujuan yang harus dikirimkan Kembali ke perusahaan. Pelamar harus mengambil foto sambal memegang "Kartu Telepon" dengan nomor di atasnya untuk membuktikan bahwa kartu telepon tersebut untuk digunakan sendiri. Kartu telepon prabayar hanya dapat digunakan oleh pemohon,dilarang digunakan untuk hal yang melanggar hukum  dan juga diperjual belikan.<br><br>(Bila ada yang tidak paham / ada yang perlu ditanyakan, Bisa Hubungi Admin.)'
            };

            //Open the modal
            Alpine.store('modal').open(fetProduct);
        });
    }
});