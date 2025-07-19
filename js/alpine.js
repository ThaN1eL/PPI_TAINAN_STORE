document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        group1: [
            { 
                id: 1, 
                name: 'Paket Klasik Tidur Nyenyak (5 items)', 
                img: 'packet1.png',
                modalImg: 'packetA.png', 
                price: 2590, 
                description: '1. Kasur Anti Bakteri Pressure Relief<br>2. Bantal Anti Bakteri dan Tungau<br>3. Selimut Musim Dingin Bahan Graphene<br>4. Sarung Bantal Model Amplop<br>5. Selimut Tipis Multifungsi<br><br>Warna yang tersedia: WH, WO, WP, WB<br><br>NOTICE!<br>➢Keras lembutnya Kasur hanya untuk referensi saja, tidak mewakili perasaan pribadi anda.<br>➢ Warna produk bisa saja tidak sama, silahkan merujuk pada produk yang sebenarnya.<br>➢Free ongkir untuk didalam pulau Taiwan, Untuk diluar pulau Taiwan akan dikenakan Biaya.<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut',
                addons: [
                    {
                        id: 'wool_blanket',
                        name: 'Selimut Musim Dingin Wol Alami',
                        price: 750,
                        image: 'wool.png',
                        description: '•Selimut ringan 2.1Kg<br>•Tambahan serat wol<br>•Hangat dan elastis<br>•Pengikat di setiap sudut<br>•Kain lembut dan ramah di kulit',
                        selected: false
                    },
                    {
                        id: 'cozycake_pillow',
                        name: 'CozyCake Pillow',
                        price: 1890,
                        image: 'cc.png',
                        description: '•Zona tidur terlentang<br>•Zona tidur menyamping<br>•Zona penopang bahu<br>•Sarung bantal TENCEL<br>•Teknologi antibakteri alami<br>•Efisien: satu bantal untuk semua posisi tidur',
                        selected: false
                    },        
                ]
            },
            { 
                id: 2, 
                name: 'Paket Nyaman Tidur Nyenyak (6 items)',
                img: 'packet2.png',
                modalImg: 'packetB.png', 
                price: 3980, 
                description: '1. Kasur Elastis Tinggi yang Lembut dan Tebal<br>2. Bantal Bersikulasi Tinggi<br>3. Selimut Musim Dingin Bahan Graphene<br>4. Sarung Bantal Model Amplop<br>5. Seprai yang bisa dicuci<br>6. Selimut Tipis Multifungsi<br><br>Warna yang tersedia: WO, WH, WG, WL, WU<br><br>NOTICE!<br>➢Keras lembutnya Kasur hanya untuk referensi saja, tidak mewakili perasaan pribadi anda.<br>➢ Warna produk bisa saja tidak sama, silahkan merujuk pada produk yang sebenarnya.<br>➢Free ongkir untuk didalam pulau Taiwan, Untuk diluar pulau Taiwan akan dikenakan Biaya.<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut',
                addons: [
                    {
                        id: 'cozycake_pillow',
                        name: 'CozyCake Pillow',
                        price: 1590,
                        image: 'cc.png',
                        description: '•Zona tidur terlentang<br>•Zona tidur menyamping<br>•Zona penopang bahu<br>•Sarung bantal TENCEL<br>•Teknologi antibakteri alami<br>•Efisien: satu bantal untuk semua posisi tidur',
                        selected: false
                    }
                ]
            },
            { 
                id: 3, 
                name: 'Paket Mewah Tidur Nyenyak (6 items)',
                img: 'packet3.png',
                modalImg: 'packetC.png', 
                price: 5350, 
                description: '1. Kasur Tencel Temperature-sensing and Pressure-relieving<br>2. Bantal Pocket-Spring Graphene 3D<br>3. Selimut Musim Dingin Bahan Graphene<br>4. Sarung Bantal Model Amplop<br>5. Seprai yang bisa dicuci<br>6. Selimut Tipis Multifungsi<br><br>Warna yang tersedia: WR, WY, WK, WL, WB, WU<br><br>NOTICE!<br>➢Keras lembutnya Kasur hanya untuk referensi saja, tidak mewakili perasaan pribadi anda.<br>➢ Warna produk bisa saja tidak sama, silahkan merujuk pada produk yang sebenarnya.<br>➢Free ongkir untuk didalam pulau Taiwan, Untuk diluar pulau Taiwan akan dikenakan Biaya.<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut',
                addons: [
                    {
                        id: 'cozycake_pillow',
                        name: 'CozyCake Pillow',
                        price: 1290,
                        image: 'cc.png',
                        description: '•Zona tidur terlentang<br>•Zona tidur menyamping<br>•Zona penopang bahu<br>•Sarung bantal TENCEL<br>•Teknologi antibakteri alami<br>•Efisien: satu bantal untuk semua posisi tidur',
                        selected: false
                    }
                ]
            },
            { id: 5, name: 'Kasur anti bakteri pressure relief', img: 'sa.png', price: 1580, basePrice: 1580, description: 'Ukuran: 90 x 188 cm<br>Bahan Dalam: Busa penyangga tebal 5cm<br>Kain: Kain elastis antibakteri bersetifikasi DAIWA, Jepang<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut' },
            { id: 6, name: 'Kasur Elastis Tinggi', img: 'sb.png', price: 2280, basePrice: 2280, description: 'Ukuran: 90 x 188cm<br>Bahan: Kapas polyester padat 8cm<br>Kain: Rajutan sutra putih mutiara<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut' },
            { id: 7, name: 'Kasur Tencel Temperatire-sensing and Pressure relievening', img: 'sc.png', price: 3190, basePrice: 3190, description: 'Ukuran: 90 x 188cm<br> Bahan: 3cm High-density pressure-relieving memory foam,<br>7cm high density high support cotton<br>Kain: 100% kain rajutan tiga dimensi Tencel Bird eye mesh anti bakteri Daiwa Jepang<br><br>Bonus: Shoulder bag Khusus!<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut' },
            { id: 8, name: 'Set 3-in-1 Katun/Tencel', img: 'sh.png', price: 1380, basePrice: 1380, description: '➢ Sarung Bantal<br>➢ Seprai Fitted<br> ➢ Selimut Tipis Multifungsi<br><br>Warna yang tersedia: WO, WH, WG, WL, WU<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut' },
            { id: 9, name: 'Set 4-in-1 Katun/Tencel', img: 'sz.png', price: 1580, basePrice: 1580, description: '➢ Sarung Bantal<br>➢ Sarung Bantal<br>➢ Seprai Fitted<br> ➢ Selimut Tipis Multifungsi<br><br>Warna yang tersedia: WR, WY, WK, WL, WB, WU<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut' },
            { id: 10, name: 'Paket Sarung Bantal + Seprai Katun/Tencel', img: 'st.png', price: 580, basePrice: 580, description: '➢ Sarung Bantal<br>➢ Sarung Bantal<br>➢ Seprai Fitted<br><br>Warna yang tersedia: WR, WL<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut' },
            { id: 11, name: 'Bantal Anti Bakteri dan Tungau', img: 'pa.png', price: 240, basePrice: 240, description: '➢Sarung anti bakteri<br>➢Microfiber cloth 1Kg<br>➢Lembut dan tidak kempes<br>Size: 45x75cm<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut' },
            { id: 12, name: 'Bantal Bersikulasi Tinggi', img: 'pb.png', price: 390, basePrice: 390, description: '➢Kain 3D ramah dikulit<br>➢Microfiber cloth 1Kg<br>➢Breathable mesh<br>➢Mengikuti bentuk leher<br>Size: 45x75cm<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut' },
            { id: 13, name: 'CozyCake Pillow', img: 'cc.png', price: 2190, basePrice: 2190, description: 'Penawaran tuker tambah khusus<br>Dengan pembelian salah satu set perlengkapan tidur A, B atau C.<br>Anda bisa menukar bantal kepala anda dengan CozyCake Pillow hanya dengan Harga spesial!<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut' },
            { id: 14, name: 'Feel Cool Guling', img: 'guling.png', price: 480, basePrice: 480, description: '➢Ramah di kulit dan lembut<br>➢Sensasi dingin saat dipeluk<br>➢Desain ritsleting dapat dicuci<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut' },
            { id: 15, name: 'Feel Cool Selimut', img: 'selimut.png', price: 990, basePrice: 990, description: '➢Tekstur super lembut dan sehalus sutra<br>➢Desain dengan warna ganda, sejuk di kedua sisi<br>➢Menyerap keringat dan cepat kering, bisa dicuci dengan mesin<br><br>Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut' },           
            { id: 16, name: 'Paket Barang Sehari-hari', img: 'utensil.png', price: 990, basePrice: 990, description: 'Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut.' },
            { id: 17, name: 'Hair Dryer Ion Negatif', img: 'hairdryer.png', price: 430, basePrice: 430, description: 'Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut.' },
            { id: 18, name: 'Stop Kontak 3 lubang&USB', img: 'stopkontak.png', price: 490, basePrice: 490, description: 'Bonus Pembelian ezCozy Item:<br>➢Pembelian $3900 atau lebih, Gratis 1pc Laundry Bag untuk perlengkapan tidur<br>➢Pembelian $6900 atau lebih, Gratis 1pc Selimut Dingin & Lembut.' },
            { 
                id: 19, 
                name: 'Masker Pack', 
                img: 'mask.png',
                modalImg: 'mask.png', 
                price: 55, 
                description: '',
                addons: [
                    {
                        id: 'White',
                        name: 'White',
                        price: 0,
                        image: 'white.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    },
                    {
                        id: 'Black',
                        name: 'Black',
                        price: 0,
                        image: 'black.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    },
                    {
                        id: 'Gray',
                        name: 'Gray',
                        price: 0,
                        image: 'gray.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    }, 
                    {
                        id: 'Blue',
                        name: 'Blue',
                        price: 0,
                        image: 'blue.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    },
                    {
                        id: 'Peach',
                        name: 'Peach',
                        price: 0,
                        image: 'peach.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    }, 
                    {
                        id: 'Beige',
                        name: 'Beige',
                        price: 0,
                        image: 'beige.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    }, 
                ]
            },
            { 
                id: 20, 
                name: 'Masker 9D', 
                img: 'mask9d.png',
                modalImg: 'mask9d.png', 
                price: 40, 
                description: 'Promo Pembelian 5 bungkus hanya 100 NTD',
                addons: [
                    {
                        id: 'White',
                        name: 'White',
                        price: 0,
                        image: 'white.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    },
                    {
                        id: 'Black',
                        name: 'Black',
                        price: 0,
                        image: 'black.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    },
                    {
                        id: 'Gray',
                        name: 'Gray',
                        price: 0,
                        image: 'gray.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    }, 
                    {
                        id: 'Dark Blue',
                        name: 'Dark Blue',
                        price: 0,
                        image: 'darkblue.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    },
                    {
                        id: 'Peach',
                        name: 'Peach',
                        price: 0,
                        image: 'peach.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    }, 
                    {
                        id: 'Beige',
                        name: 'Beige',
                        price: 0,
                        image: 'beige.png',
                        description: 'Pilih Salah satu warna',
                        selected: false
                    }, 
                    {
                        id: 'promo',
                        name: '5 bungkus hanya 100 NTD',
                        price: 60,
                        image: 'dc.png',
                        description: 'Warna bisa lansung chat ke admin',
                        selected: false
                    }, 
                ]
            },
        ],
        
        group2: [          
            { id: 21, name: 'FET 90 Hari', img: 'FET90D.png', price: 1250, basePrice: 1250, description: '90 Hari Unlimited Internet, 30GB/Bulan <br>(Penurunan cepatan hingga 5Mbps setelah melewati batas kuota) <br>Pulsa telepon 150NTD. <br>Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya. <br>2.Pembelian pulsa telepon dapat dipakai selama 180 hari.<br><br>Notes:<br>➢Usia Minimal 18 tahun untuk pemegang Passport China, Hong Kong, Filipina, Indonesia, Vietnam, Thailand dan Malaysia. Selain negara-negara yang telah disebutkan, batas Usia minimal 20 tahun<br>➢Perusahan provider kartu telepon menetapkan peraturan pemohon wajib untuk memberikan passport dan visa sebagai syarat pengaktifan kartu telepon, Tanda tangan pemohon di formulir pendaftaran dan surat persetujuan yang harus dikirimkan Kembali ke perusahaan. Pelamar harus mengambil foto sambal memegang "Kartu Telepon" dengan nomor di atasnya untuk membuktikan bahwa kartu telepon tersebut untuk digunakan sendiri. Kartu telepon prabayar hanya dapat digunakan oleh pemohon,dilarang digunakan untuk hal yang melanggar hukum  dan juga diperjual belikan.<br><br>(Bila ada yang tidak paham / ada yang perlu ditanyakan, Bisa Hubungi Admin.)' },
            { id: 22, name: 'FET 360 Hari', img: 'FET.png', price: 3850, basePrice: 3850, description: '360 Hari Unlimited Internet, 570GB/Bulan <br>(Penurunan kecepatan hingga 10Mbps setelah melewati batas kuota), <br>Pulsa telepon 600NTD(berlaku 60 hari setelah pengaktifan kartu) <br>Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya.<br> 2.Pembelian pulsa telepon dapat dipakai selama 180 hari.<br><br>Notes:<br>➢Usia Minimal 18 tahun untuk pemegang Passport China, Hong Kong, Filipina, Indonesia, Vietnam, Thailand dan Malaysia. Selain negara-negara yang telah disebutkan, batas Usia minimal 20 tahun<br>➢Perusahan provider kartu telepon menetapkan peraturan pemohon wajib untuk memberikan passport dan visa sebagai syarat pengaktifan kartu telepon, Tanda tangan pemohon di formulir pendaftaran dan surat persetujuan yang harus dikirimkan Kembali ke perusahaan. Pelamar harus mengambil foto sambal memegang "Kartu Telepon" dengan nomor di atasnya untuk membuktikan bahwa kartu telepon tersebut untuk digunakan sendiri. Kartu telepon prabayar hanya dapat digunakan oleh pemohon,dilarang digunakan untuk hal yang melanggar hukum  dan juga diperjual belikan.<br><br>(Bila ada yang tidak paham / ada yang perlu ditanyakan, Bisa Hubungi Admin.)' },
            { id: 23, name: 'Taiwan Mobile 180 Hari', img: 'OK.png', price: 2200, basePrice: 2200, description: '180 Hari Unlimited Internet.<br> Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya.<br>2.Pembelian pulsa telepon dapat dipakai selama 180 hari.<br><br>Notes:<br>➢Usia Minimal 18 tahun untuk pemegang Passport China, Hong Kong, Filipina, Indonesia, Vietnam, Thailand dan Malaysia. Selain negara-negara yang telah disebutkan, batas Usia minimal 20 tahun<br>➢Perusahan provider kartu telepon menetapkan peraturan pemohon wajib untuk memberikan passport dan visa sebagai syarat pengaktifan kartu telepon, Tanda tangan pemohon di formulir pendaftaran dan surat persetujuan yang harus dikirimkan Kembali ke perusahaan. Pelamar harus mengambil foto sambal memegang "Kartu Telepon" dengan nomor di atasnya untuk membuktikan bahwa kartu telepon tersebut untuk digunakan sendiri. Kartu telepon prabayar hanya dapat digunakan oleh pemohon,dilarang digunakan untuk hal yang melanggar hukum  dan juga diperjual belikan.<br><br>(Bila ada yang tidak paham / ada yang perlu ditanyakan, Bisa Hubungi Admin.)' },
            { id: 24, name: 'Taiwan Mobile 360 Hari', img: 'OK.png', price: 4200, basePrice: 4200, description: '360 Hari Unlimited Internet, Pulsa Telepon 300NTD. <br>Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya. <br>2.Pembelian pulsa telepon dapat dipakai selama 180 hari.<br><br>Notes:<br>➢Usia Minimal 18 tahun untuk pemegang Passport China, Hong Kong, Filipina, Indonesia, Vietnam, Thailand dan Malaysia. Selain negara-negara yang telah disebutkan, batas Usia minimal 20 tahun<br>➢Perusahan provider kartu telepon menetapkan peraturan pemohon wajib untuk memberikan passport dan visa sebagai syarat pengaktifan kartu telepon, Tanda tangan pemohon di formulir pendaftaran dan surat persetujuan yang harus dikirimkan Kembali ke perusahaan. Pelamar harus mengambil foto sambal memegang "Kartu Telepon" dengan nomor di atasnya untuk membuktikan bahwa kartu telepon tersebut untuk digunakan sendiri. Kartu telepon prabayar hanya dapat digunakan oleh pemohon,dilarang digunakan untuk hal yang melanggar hukum  dan juga diperjual belikan.<br><br>(Bila ada yang tidak paham / ada yang perlu ditanyakan, Bisa Hubungi Admin.)' }
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // Jika item memiliki addons, buat unique ID berdasarkan addons
            let itemKey = newItem.id;
            if (newItem.selectedAddons && newItem.selectedAddons.length > 0) {
                const addonIds = newItem.selectedAddons.map(addon => addon.id).sort().join('-');
                itemKey = `${newItem.id}_${addonIds}`;
                newItem.uniqueId = itemKey;
            }
            
            const cartItem = this.items.find((item) => 
                item.uniqueId ? item.uniqueId === itemKey : item.id === newItem.id
            );
            
            if (!cartItem) {
                this.items.push({ 
                    ...newItem, 
                    uniqueId: itemKey,
                    quantity: 1, 
                    total: newItem.price 
                });
                this.quantity++;
                this.total += newItem.price;
            } else {
                this.items = this.items.map((item) => {
                    const compareId = item.uniqueId || item.id;
                    if (compareId !== itemKey) {
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
            const cartItem = this.items.find((item) => 
                item.uniqueId ? item.uniqueId === id : item.id === id
            );
            
            if (cartItem.quantity > 1) {
                this.items = this.items.map((item) => {
                    const compareId = item.uniqueId || item.id;
                    if (compareId !== id) {
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
                this.items = this.items.filter((item) => {
                    const compareId = item.uniqueId || item.id;
                    return compareId !== id;
                });
                this.quantity--;
                this.total -= cartItem.price;
            }
        },
    });

    Alpine.store('modal', {
    selectedItem: [],
    selectedAddons: {},
    open(item) {
        this.selectedItem = { ...item };
        if (!this.selectedAddons[item.id]) {
            this.selectedAddons[item.id] = {};
            if (item.addons) {
                item.addons.forEach(addon => {
                    this.selectedAddons[item.id][addon.id] = false;
                });
            }
        }
        document.querySelector('#item-detail-modal').style.display = 'flex';
    },
    close() {
        this.selectedItem = [];
        document.querySelector('#item-detail-modal').style.display = 'none';
    },
    
    toggleAddon(productId, addonId) {
        if (!this.selectedAddons[productId]) {
            this.selectedAddons[productId] = {};
        }
        
        if (productId === 19 || productId === 20) {           
            Object.keys(this.selectedAddons[productId]).forEach(key => {
                this.selectedAddons[productId][key] = false;
            });
            
            this.selectedAddons[productId][addonId] = true;
        } else {
            
            this.selectedAddons[productId][addonId] = !this.selectedAddons[productId][addonId];
        }
    },
    
    getTotalPrice() {
        if (!this.selectedItem || !this.selectedItem.id) return 0;
        
        let total = this.selectedItem.price;
        const productAddons = this.selectedAddons[this.selectedItem.id];
        
        if (productAddons && this.selectedItem.addons) {
            this.selectedItem.addons.forEach(addon => {
                if (productAddons[addon.id]) {
                    total += addon.price;
                }
            });
        }
        
        return total;
    },
    
    getItemWithAddons() {
        const item = { ...this.selectedItem };
        const productAddons = this.selectedAddons[item.id];
        
        if (productAddons && item.addons) {
            item.selectedAddons = item.addons.filter(addon => 
                productAddons[addon.id]
            );
            
            item.price = this.getTotalPrice();
            
            if (item.selectedAddons.length > 0) {
                const addonNames = item.selectedAddons.map(addon => addon.name).join(' + ');
                item.name = `${item.name} + ${addonNames}`;
            }
        }
        
        return item;
    }
    });
    // Re-initialize Feather icons
    Alpine.nextTick(() => {
        feather.replace();
    });
});


document.addEventListener('alpine:init', () => {
    Alpine.store('checkout', {
        formType: '', 
        showAdditionalFields: false, 

        formatMessage(items, total, customerData) {
            const itemsList = items.map(item => 
                `${item.name} (${item.quantity} x ${USD(item.price)} = ${USD(item.total)})`
            ).join('\n');

            // Dynamically format message based on form type
            let customerInfo = '';
            if (customerData.formType === 'simcard') {
                customerInfo = `
                    *SIM Card Format*
                    Nama (sesuai passport): ${customerData.simcard_name}
                    Nama universitas: ${customerData.simcard_university}
                    Nomor passport: ${customerData.simcard_passport}
                    Tanggal lahir: ${customerData.simcard_birthdate}
                    No. Telp Indo: ${customerData.simcard_phone}
                    Tanggal kedatangan: ${customerData.simcard_arrival}`;
            } else if (customerData.formType === 'other') {
                customerInfo = `
                    *Other Format*
                    Nama: ${customerData.other_name}
                    Nomor telp: ${customerData.other_phone}
                    Email: ${customerData.other_email}
                    Tanggal kedatangan: ${customerData.other_arrival}
                    Jenis kelamin: ${customerData.other_gender}
                    Alamat Dorm: ${customerData.other_address}
                    Warna Masker/Bed: ${customerData.other_color}`;

                // Include additional fields if selected
                if (customerData.showAdditionalFields) {
                    customerInfo += `
                    *Informasi Tambahan*
                    Nomor passport: ${customerData.other_passport}
                    Tanggal lahir: ${customerData.other_birthdate}
                    Nama universitas: ${customerData.other_university}`;
                }
            }
            return `*Order Details*
${customerInfo}

*Order Items*
${itemsList}

*Total: ${USD(total)}*`;
        },

        submit(event) {
            event.preventDefault();
            
            const form = event.target;
            const formData = new FormData(form);
            
            const customerData = {
                formType: formData.get('formType'),
                showAdditionalFields: this.showAdditionalFields
            };

            // Collect data based on form type
            if (customerData.formType === 'simcard') {
                customerData.simcard_name = formData.get('simcard_name');
                customerData.simcard_university = formData.get('simcard_university');
                customerData.simcard_passport = formData.get('simcard_passport');
                customerData.simcard_birthdate = formData.get('simcard_birthdate');
                customerData.simcard_phone = formData.get('simcard_phone');
                customerData.simcard_arrival = formData.get('simcard_arrival');
            } else if (customerData.formType === 'other') {
                customerData.other_name = formData.get('other_name');
                customerData.other_phone = formData.get('other_phone');
                customerData.other_email = formData.get('other_email');
                customerData.other_arrival = formData.get('other_arrival');
                customerData.other_gender = formData.get('other_gender');
                customerData.other_address = formData.get('other_address');
                customerData.other_color = formData.get('other_color');

                // Additional fields
                if (this.showAdditionalFields) {
                    customerData.other_passport = formData.get('other_passport');
                    customerData.other_birthdate = formData.get('other_birthdate');
                    customerData.other_university = formData.get('other_university');
                }
            }
            
            const items = Alpine.store('cart').items;
            const total = Alpine.store('cart').total;
            
            const message = this.formatMessage(items, total, customerData);
            const whatsappUrl = `https://wa.me/+6287837022288?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
        }
    });
});
  
  // USD function
  const USD = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(number);
  };

document.addEventListener('alpine:init', () => {
    Alpine.data('productFilter', () => ({
        activeFilter: 'all',
        groups: [
            { name: 'Bed & Comfort', category: 'bed', items: [1, 2, 3, 4] },
            { name: 'Tech & Communication', category: 'tech', items: [11, 12, 13, 14] },
            { name: 'Daily Essentials', category: 'daily', items: [5, 6, 7, 8, 9, 10] }
        ],
        
        setFilter(filter) {
            this.activeFilter = filter;
        },
        
        isVisible(item) {
            if (this.activeFilter === 'all') return true;
            
            const matchingGroup = this.groups.find(group => 
                group.category === this.activeFilter && 
                group.items.includes(item.id)
            );
            
            return !!matchingGroup;
        }
    }));
});