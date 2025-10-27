// Data dummy
const layananData = [
  {
    id: 1,
    nama: "Desain Web",
    deskripsi: "Saya membuat tampilan website yang menarik, sederhana, dan responsif dengan menggunakan HTML dan CSS.",
    gambar: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
  },
  {
    id: 2,
    nama: "Pemrograman",
    deskripsi: "Saya menulis kode sederhana dengan HTML, CSS, dan JavaScript untuk membuat halaman web interaktif dan dinamis.",
    gambar: "https://cdn-icons-png.flaticon.com/512/906/906343.png"
  },
  {
    id: 3,
    nama: "Editing",
    deskripsi: "Saya mengedit gambar atau video sederhana untuk tugas sekolah menggunakan software seperti Canva dan CapCut.",
    gambar: "https://cdn-icons-png.flaticon.com/512/1157/1157109.png"
  }
];

// Ambil elemen
const serviceCardList = document.getElementById("serviceCardList");
const modal = document.getElementById("modalDetail");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Generate card dari data dummy
layananData.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${item.gambar}" alt="${item.nama}">
    <h3>${item.nama}</h3>
    <p>${item.deskripsi.substring(0, 60)}...</p>
  `;
  
  // Ketika diklik → buka modal dengan data detail
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = item.nama;
    modalDesc.textContent = item.deskripsi;
    modalImage.src = item.gambar;
  });
  
  serviceCardList.appendChild(card);
});

// Tutup modal ketika tombol X diklik
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Tutup modal jika klik area luar modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
