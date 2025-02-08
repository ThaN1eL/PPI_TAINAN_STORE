document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        group1: [
            { id: 1, name: 'Paket Klasik Tidur Nyenyak (5 items)', img: 'packet1.png',modalImg: 'packetA.png', price: 1000, description: '123' },
            { id: 2, name: 'Paket Nyaman Tidur Nyenyak (6 items)',img: 'packet1.png',modalImg: 'packetB.png', price: 300, description: '123' },
            { id: 3, name: 'Paket Mewah Tidur Nyenyak (6 items)',img: 'packet1.png',modalImg: 'packetC.png', price: 5555, description: '123' },
        ],
        group2: [
            { id: 4, name: 'Seprai yang bisa dicuci', img: 'seprai.png', price: 2250, description: '123' },
            { id: 5, name: 'Paket Barang Sehari-hari', img: 'utensil.png', price: 2250, description: '123' },
            { id: 6, name: 'Hair Dryer Ion Negatif', img: 'hairdryer.png', price: 2250, description: '123' },
            { id: 7, name: 'Stop Kontak 3 lubang&USB', img: 'stopkontak.png', price: 2250, description: '123' },
            { id: 8, name: 'Feel Cool Guling', img: 'guling.png', price: 2250, description: '123' },
            { id: 9, name: 'Mask 50pcs', img: 'mask.png', price: 100, description: '123' },
            { id: 10, name: 'FET 90 Hari', img: 'FET90D.png', price: 1250, description: '90 Hari Unlimited Internet, 30GB/Bulan <br>(Penurunan cepatan hingga 5Mbps setelah melewati batas kuota) <br>Pulsa telepon 150NTD. <br>Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya. <br>2.Pembelian pulsa telepon dapat dipakai selama 180 hari.' },
            { id: 11, name: 'FET 360 Hari', img: 'FET.png', price: 3850, description: '360 Hari Unlimited Internet, 570GB/Bulan <br>(Penurunan kecepatan hingga 10Mbps setelah melewati batas kuota), <br>Pulsa telepon 600NTD(berlaku 60 hari setelah pengaktifan kartu) <br>Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya.<br> 2.Pembelian pulsa telepon dapat dipakai selama 180 hari.' },
            { id: 12, name: 'Taiwan Mobile 180 Hari', img: 'OK.png', price: 2200, description: '180 Hari Unlimited Internet.<br> Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya.<br>2.Pembelian pulsa telepon dapat dipakai selama 180 hari.' },
            { id: 13, name: 'Taiwan Mobile 360 Hari', img: 'OK.png', price: 4200, description: '360 Hari Unlimited Internet, Pulsa Telepon 300NTD. <br>Catatan: <br>1. Sebelum internet habis bisa diperpanjang kuotanya. <br>2.Pembelian pulsa telepon dapat dipakai selama 180 hari.' }
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
  Color: ${customerData.color}
  Color Description: ${customerData.colorDescription}
  
  *Order Items*
  ${itemsList}
  
  *Total: ${USD(total)}*
  
  Thank you for your order!`;
      },
  
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
        const whatsappUrl = `https://wa.me/886970615931?text=${encodeURIComponent(message)}`;
        
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