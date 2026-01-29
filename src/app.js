document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "1.jpg", price: 20000 },
      { id: 2, name: "Arabica Blend", img: "1.jpg", price: 25000 },
      { id: 3, name: "Primo Passo", img: "1.jpg", price: 30000 },
    ],
  }));

  Alpine.store("itemDetail", {
    item: null,
    showModal: false,
    show(item) {
      this.item = item;
      this.showModal = true;
    },
    close() {
      this.showModal = false;
    },
  });

  Alpine.store("cart", {
    items: [],
    total: 0,
    qty: 0,

    add(newItem) {
      // cek apakah ada barang yg sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, qty: 1, total: newItem.price });
        this.qty++;
        this.total += newItem.price;
      } else {
        // jika barang sudah ada, cek kembali apakah sama atau tidak
        this.items = this.items.map((item) => {
          // jika barang beda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang nya sudah ada
            item.qty++;
            item.total = item.price * item.qty;
            this.qty++;
            this.total += item.price;
            return item;
          }
        });
      }
    },

    remove(id) {
      // ambil item yang mau di remove
      const cartItem = this.items.find((item) => item.id === id);

      // jika item tidak ditemukan
      if (!cartItem) {
        return;
      }

      // jika item lebih dari 1
      if (cartItem.qty > 1) {
        // telusuri 1 per 1
        this.items = this.items.map((item) => {
          // jika bukan barang yang di klik
          if (item.id !== id) {
            return item;
          } else {
            // jika barang nya lebih dari 1
            item.qty--;
            item.total = item.price * item.qty;
            this.qty--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.qty === 1) {
        // jika barang nya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.qty--;
        this.total -= cartItem.price;
      }
    },
  });

  // Validasi Form Checkout
  const checkoutButton = document.querySelector("#checkout-button");
  if (checkoutButton) {
    checkoutButton.disabled = true;

    const form = document.querySelector("#checkoutForm");
    if (form) {
      form.addEventListener("keyup", function () {
        let allFilled = true;
        for (let i = 0; i < form.elements.length; i++) {
          if (
            form.elements[i].type !== "submit" &&
            form.elements[i].value.length === 0
          ) {
            allFilled = false;
            break;
          }
        }
        if (allFilled) {
          checkoutButton.disabled = false;
          checkoutButton.classList.remove("disabled");
        } else {
          checkoutButton.disabled = true;
          checkoutButton.classList.add("disabled");
        }
      });
    }

    // Kirim data ketika tombol checkout di klik
    if (checkoutButton) {
      checkoutButton.addEventListener("click", function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = new Object();
        formData.forEach((value, key) => {
          data[key] = value;
        });
        alert("Terima kasih " + data.name + "! Pesanan anda sedang diproses.");
      });
    }
  }
});

// Mata Uang Indonesia
window.rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
