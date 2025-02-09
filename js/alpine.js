document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        group1: [
            { id: 1, name: 'Paket Klasik Tidur Nyenyak (5 items)', img: 'packet1.png',modalImg: 'packetA.png', price: 2980, description: '1. Kasur Anti Bakteri Pressure Relief<br>2. Bantal Anti Bakteri dan Tungau<br>3. Selimut Musim Dingin Bahan Graphene<br>4. Sarung Bantal Model Amplop<br>5. Selimut Tipis Multifungsi<br><br>NOTICE!<br>➢Keras lembutnya Kasur hanya untuk referensi saja, tidak mewakili perasaan pribadi anda.<br>➢ Warna produk bisa saja tidak sama, silahkan merujuk pada produk yang sebenarnya.<br>➢Free ongkir untuk didalam pulau Taiwan, Untuk diluar pulau Taiwan akan dikenakan Biaya.<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6000 atau lebih, Gratis 1pc penyimpanan gantung samping tempat tidur<br>Note: Hadiah diatas dapat diakumulasikan.' },
            { id: 2, name: 'Paket Nyaman Tidur Nyenyak (6 items)',img: 'packet2.png',modalImg: 'packetB.png', price: 3980, description: '1. Kasur Elastis Tinggi yang Lembut dan Tebal<br>2. Bantal Bersikulasi Tinggi<br>3. Selimut Musim Dingin Bahan Graphene<br>4. Sarung Bantal Model Amplop<br>5. Seprai yang bisa dicuci<br>6. Selimut Tipis Multifungsi<br><br>NOTICE!<br>➢Keras lembutnya Kasur hanya untuk referensi saja, tidak mewakili perasaan pribadi anda.<br>➢ Warna produk bisa saja tidak sama, silahkan merujuk pada produk yang sebenarnya.<br>➢Free ongkir untuk didalam pulau Taiwan, Untuk diluar pulau Taiwan akan dikenakan Biaya.<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6000 atau lebih, Gratis 1pc penyimpanan gantung samping tempat tidur<br>Note: Hadiah diatas dapat diakumulasikan.' },
            { id: 3, name: 'Paket Mewah Tidur Nyenyak (6 items)',img: 'packet3.png',modalImg: 'packetC.png', price: 5350, description: '1. Kasur Tencel Temperature-sensing and Pressure-relieving<br>2. Bantal Pocket-Spring Graphene 3D<br>3. Selimut Musim Dingin Bahan Graphene<br>4. Sarung Bantal Model Amplop<br>5. Seprai yang bisa dicuci<br>6. Selimut Tipis Multifungsi<br><br>NOTICE!<br>➢Keras lembutnya Kasur hanya untuk referensi saja, tidak mewakili perasaan pribadi anda.<br>➢ Warna produk bisa saja tidak sama, silahkan merujuk pada produk yang sebenarnya.<br>➢Free ongkir untuk didalam pulau Taiwan, Untuk diluar pulau Taiwan akan dikenakan Biaya.<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6000 atau lebih, Gratis 1pc penyimpanan gantung samping tempat tidur<br>Note: Hadiah diatas dapat diakumulasikan.' },
        ],
        group2: [
            { id: 4, name: 'Seprai yang bisa dicuci', img: 'seprai.png', price: 210, description: 'Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6000 atau lebih, Gratis 1pc penyimpanan gantung samping tempat tidur<br>Note: Hadiah diatas dapat diakumulasikan.' },
            { id: 5, name: 'Paket Barang Sehari-hari', img: 'utensil.png', price: 990, description: 'Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6000 atau lebih, Gratis 1pc penyimpanan gantung samping tempat tidur<br>Note: Hadiah diatas dapat diakumulasikan.' },
            { id: 6, name: 'Hair Dryer Ion Negatif', img: 'hairdryer.png', price: 430, description: 'Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6000 atau lebih, Gratis 1pc penyimpanan gantung samping tempat tidur<br>Note: Hadiah diatas dapat diakumulasikan.' },
            { id: 7, name: 'Stop Kontak 3 lubang&USB', img: 'stopkontak.png', price: 490, description: 'Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6000 atau lebih, Gratis 1pc penyimpanan gantung samping tempat tidur<br>Note: Hadiah diatas dapat diakumulasikan.' },
            { id: 8, name: 'Feel Cool Guling', img: 'guling.png', price: 480, description: 'Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6000 atau lebih, Gratis 1pc penyimpanan gantung samping tempat tidur<br>Note: Hadiah diatas dapat diakumulasikan.' },
            { id: 9, name: 'Mask 50pcs', img: 'mask.png', price: 100, description: '123' },
            { id: 10, name: 'FET 90 Hari', img: 'FET90D.png', price: 1250, description: '90 Hari Unlimited Internet, 30GB/Bulan <br>(Penurunan cepatan hingga 5Mbps setelah melewati batas kuota) <br>Pulsa telepon 150NTD. <br>Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya. <br>2.Pembelian pulsa telepon dapat dipakai selama 180 hari.<br><br>Notes:<br>➢Usia Minimal 18 tahun untuk pemegang Passport China, Hong Kong, Filipina, Indonesia, Vietnam, Thailand dan Malaysia. Selain negara-negara yang telah disebutkan, batas Usia minimal 20 tahun<br>➢Perusahan provider kartu telepon menetapkan peraturan pemohon wajib untuk memberikan passport dan visa sebagai syarat pengaktifan kartu telepon, Tanda tangan pemohon di formulir pendaftaran dan surat persetujuan yang harus dikirimkan Kembali ke perusahaan. Pelamar harus mengambil foto sambal memegang "Kartu Telepon" dengan nomor di atasnya untuk membuktikan bahwa kartu telepon tersebut untuk digunakan sendiri. Kartu telepon prabayar hanya dapat digunakan oleh pemohon,dilarang digunakan untuk hal yang melanggar hukum  dan juga diperjual belikan.<br><br>(Bila ada yang tidak paham / ada yang perlu ditanyakan, Bisa Hubungi Admin.)' },
            { id: 11, name: 'FET 360 Hari', img: 'FET.png', price: 3850, description: '360 Hari Unlimited Internet, 570GB/Bulan <br>(Penurunan kecepatan hingga 10Mbps setelah melewati batas kuota), <br>Pulsa telepon 600NTD(berlaku 60 hari setelah pengaktifan kartu) <br>Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya.<br> 2.Pembelian pulsa telepon dapat dipakai selama 180 hari.<br><br>Notes:<br>➢Usia Minimal 18 tahun untuk pemegang Passport China, Hong Kong, Filipina, Indonesia, Vietnam, Thailand dan Malaysia. Selain negara-negara yang telah disebutkan, batas Usia minimal 20 tahun<br>➢Perusahan provider kartu telepon menetapkan peraturan pemohon wajib untuk memberikan passport dan visa sebagai syarat pengaktifan kartu telepon, Tanda tangan pemohon di formulir pendaftaran dan surat persetujuan yang harus dikirimkan Kembali ke perusahaan. Pelamar harus mengambil foto sambal memegang "Kartu Telepon" dengan nomor di atasnya untuk membuktikan bahwa kartu telepon tersebut untuk digunakan sendiri. Kartu telepon prabayar hanya dapat digunakan oleh pemohon,dilarang digunakan untuk hal yang melanggar hukum  dan juga diperjual belikan.<br><br>(Bila ada yang tidak paham / ada yang perlu ditanyakan, Bisa Hubungi Admin.)' },
            { id: 12, name: 'Taiwan Mobile 180 Hari', img: 'OK.png', price: 2200, description: '180 Hari Unlimited Internet.<br> Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya.<br>2.Pembelian pulsa telepon dapat dipakai selama 180 hari.<br><br>Notes:<br>➢Usia Minimal 18 tahun untuk pemegang Passport China, Hong Kong, Filipina, Indonesia, Vietnam, Thailand dan Malaysia. Selain negara-negara yang telah disebutkan, batas Usia minimal 20 tahun<br>➢Perusahan provider kartu telepon menetapkan peraturan pemohon wajib untuk memberikan passport dan visa sebagai syarat pengaktifan kartu telepon, Tanda tangan pemohon di formulir pendaftaran dan surat persetujuan yang harus dikirimkan Kembali ke perusahaan. Pelamar harus mengambil foto sambal memegang "Kartu Telepon" dengan nomor di atasnya untuk membuktikan bahwa kartu telepon tersebut untuk digunakan sendiri. Kartu telepon prabayar hanya dapat digunakan oleh pemohon,dilarang digunakan untuk hal yang melanggar hukum  dan juga diperjual belikan.<br><br>(Bila ada yang tidak paham / ada yang perlu ditanyakan, Bisa Hubungi Admin.)' },
            { id: 13, name: 'Taiwan Mobile 360 Hari', img: 'OK.png', price: 4200, description: '360 Hari Unlimited Internet, Pulsa Telepon 300NTD. <br>Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya. <br>2.Pembelian pulsa telepon dapat dipakai selama 180 hari.<br><br>Notes:<br>➢Usia Minimal 18 tahun untuk pemegang Passport China, Hong Kong, Filipina, Indonesia, Vietnam, Thailand dan Malaysia. Selain negara-negara yang telah disebutkan, batas Usia minimal 20 tahun<br>➢Perusahan provider kartu telepon menetapkan peraturan pemohon wajib untuk memberikan passport dan visa sebagai syarat pengaktifan kartu telepon, Tanda tangan pemohon di formulir pendaftaran dan surat persetujuan yang harus dikirimkan Kembali ke perusahaan. Pelamar harus mengambil foto sambal memegang "Kartu Telepon" dengan nomor di atasnya untuk membuktikan bahwa kartu telepon tersebut untuk digunakan sendiri. Kartu telepon prabayar hanya dapat digunakan oleh pemohon,dilarang digunakan untuk hal yang melanggar hukum  dan juga diperjual belikan.<br><br>(Bila ada yang tidak paham / ada yang perlu ditanyakan, Bisa Hubungi Admin.)' }
        ]
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            const cartItem = this.items.find((item) => item.id === newItem.id);
            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            } else {
                this.items = this.items.map((item) => {
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id) {
            const cartItem = this.items.find((item) => item.id === id);
            if (cartItem.quantity > 1) {
                this.items = this.items.map((item) => {
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        },
    });

    Alpine.store('modal', {
        selectedItem: [],
        open(item) {
            this.selectedItem = item;
            document.querySelector('#item-detail-modal').style.display = 'flex';
        },
        close() {
            this.selectedItem = [];
            if (this.selectedItem.length === 0)
            document.querySelector('#item-detail-modal').style.display = 'none';
            document.querySelector('#modal-image').src = '';
        }
    });
    // Re-initialize Feather icons after Alpine has rendered the content
    Alpine.nextTick(() => {
        feather.replace();  // This will replace the <i data-feather> with the correct SVG icons
    });
});


document.addEventListener('alpine:init', () => {
    // ... keep existing products data and cart store ...
  
    Alpine.store('checkout', {
      formatMessage(items, total, customerData) {
        const itemsList = items.map(item => 
          `${item.name} (${item.quantity} x ${USD(item.price)} = ${USD(item.total)})`
        ).join('\n');
  
        return `*Order Details*
  *Customer Information*
  Name: ${customerData.name}
  Is there any color?: ${customerData.color}
  Color Description: ${customerData.colorDescription}
  
  *Order Items*
  ${itemsList}
  
  *Total: ${USD(total)}*`;},
  
      submit(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        const customerData = {
          name: formData.get('name'),
          color: formData.get('choice'),
          colorDescription: formData.get('descriptionBox')
        };
        
        const items = Alpine.store('cart').items;
        const total = Alpine.store('cart').total;
        
        const message = this.formatMessage(items, total, customerData);
        const whatsappUrl = `https://wa.me/886901400507?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
      }
    });
  });
  
  // Keep the USD formatter function
  const USD = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(number);
  };