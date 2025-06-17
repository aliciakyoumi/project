// --- FUNGSI UNTUK HALAMAN UTAMA ---
function showWelcomeMessage() {

    const welcomeElement = document.getElementById('welcome-message');

    if (welcomeElement) {
        alert("Halo Cat Lovers!!");
        const username = prompt("Siapakah nama Anda?");

        // Cek jika pengguna memasukkan nama (bukan kosong atau spasi saja)
        if (username && username.trim() !== '') {
            welcomeElement.innerText = "Hi " + username + ", Welcome to Website CAT LOVERS!!";
        } else {
            // Default message jika pengguna tidak memasukkan apa-apa
            welcomeElement.innerText = "Welcome to Website CAT LOVERS!!";
        }
    }
}

function validateSuggestionForm() {
    const name = document.forms['suggestion-form']['full-name'].value;
    const email = document.forms['suggestion-form']['email'].value;
    const suggestion = document.forms['suggestion-form']['suggestion'].value;

    if (!name || !email || !suggestion) {
        alert("Harap lengkapi semua kolom sebelum mengirim!");
        return false;
    }
    
    document.getElementById('sender-full-name-suggestion').innerText = name;
    document.getElementById('sender-email-suggestion').innerText = email;
    document.getElementById('sender-suggestion').innerText = suggestion;
    
    document.getElementById('form-output-section-suggestion').style.display = 'block';
    
    return false;
}

window.addEventListener('DOMContentLoaded', showWelcomeMessage);
