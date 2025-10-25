document.addEventListener('DOMContentLoaded', function() {
  // Direct search
  const searchInput = document.getElementById('searchInput');
  const directSearchBtn = document.getElementById('directSearchBtn');
  if (searchInput && directSearchBtn) {
    directSearchBtn.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm === '') {
        showSearchMessage('⚠️ Silakan masukkan kata kunci pencarian terlebih dahulu!', 'warning');
        return;
      }
      if (keywordLinks[searchTerm]) {
        showSearchMessage(`🎯 Mengarahkan ke ${searchTerm}...`, 'success');
        setTimeout(() => {
          window.open(keywordLinks[searchTerm], '_blank', 'noopener,noreferrer');
        }, 1000);
      } else {
        showAvailableKeywords();
      }
    });

    // Enter key
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        directSearchBtn.click();
      }
    });
  } else {
    console.warn('Element searchInput atau directSearchBtn tidak ditemukan.');
  }

  // Keyword mapping tetap
  // Gunakan bagian ini jika belum ada di dom readiness
  // (Pastikan keywordLinks sudah didefinisikan sebelum dipakai di listener)
  // ...

  // Navigation links
  const berandaLink = document.getElementById('berandaLink');
  const tentangLink = document.getElementById('tentangLink');
  const kontakLink = document.getElementById('kontakLink');
  const navigationLinks = {
    beranda: 'https://www.facebook.com/groups/pedang88pagcor',
    tentang: 'https://pedang88hoki.net/id/games/sv388-cock-fight',
    kontak: 'https://api.whatsapp.com/send/?phone=6281384089220&text&type=phone_number&app_absent=0'
  };

  if (berandaLink) {
    berandaLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(navigationLinks.beranda, '_blank', 'noopener,noreferrer');
    });
  }
  if (tentangLink) {
    tentangLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(navigationLinks.tentang, '_blank', 'noopener,noreferrer');
    });
  }
  if (kontakLink) {
    kontakLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(navigationLinks.kontak, '_blank', 'noopener,noreferrer');
    });
  }

  // Close buttons
  const closeAbout = document.getElementById('closeAbout');
  const closeContact = document.getElementById('closeContact');
  if (closeAbout) {
    closeAbout.addEventListener('click', function() {
      const aboutSection = document.getElementById('aboutSection');
      if (aboutSection) aboutSection.classList.add('hidden');
    });
  }
  if (closeContact) {
    closeContact.addEventListener('click', function() {
      const contactSection = document.getElementById('contactSection');
      if (contactSection) contactSection.classList.add('hidden');
    });
  }

  // Helper: map untuk keywordLinks dan showMessage masih bisa ditempatkan di sini
  // Pastikan keywordLinks didefinisikan sebelum listener di atas (kalau di luar DOMContentLoaded, pastikan didefinisikan dulu)
});
