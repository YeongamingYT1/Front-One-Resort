// js/main.js
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error("Gagal memuat komponen:", error);
    }
}

// Panggil saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar-placeholder", "components/navbar.html");
    loadComponent("footer-placeholder", "components/footer.html");
});

// Contoh mengambil data daftar layanan dari Database Supabase
const SUPABASE_URL = 'https://xyz.supabase.co';
const API_KEY = 'anon-public-key-anda';

async function fetchServices() {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/services?select=*`, {
        headers: {
            'apikey': API_KEY,
            'Authorization': `Bearer ${API_KEY}`
        }
    });
    const data = await response.json();
    
    // Render ke HTML seperti biasa
    data.forEach(item => {
        // Logika merender data seperti di Bagian 1
        console.log(item.nama_layanan);
    });
}