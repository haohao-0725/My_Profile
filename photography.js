document.addEventListener('DOMContentLoaded', () => {
  const data = window.PHOTOGRAPHY_DATA || { instagram: {}, albums: [] };
  const instagramLink = document.querySelector('[data-photography-instagram]');
  const albumList = document.querySelector('[data-photography-albums]');
  const escapeHtml = (value) => String(value || '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);

  if (instagramLink && data.instagram?.url) {
    instagramLink.href = data.instagram.url;
    instagramLink.textContent = data.instagram.label || data.instagram.url;
  }

  if (!albumList) {
    return;
  }

  if (!data.albums?.length) {
    albumList.innerHTML = '<li class="album-empty">目前尚未新增公開相簿。</li>';
    return;
  }

  albumList.innerHTML = data.albums.map((album, index) => {
    const number = String(index + 1).padStart(2, '0');
    const title = escapeHtml(album.title || `公開相簿 ${number}`);
    const description = escapeHtml(album.description || '公開活動相簿');
    const url = escapeHtml(album.url);
    return `
      <li class="album-item">
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="album-link glass-panel">
          <span class="album-number">${number}</span>
          <span class="album-copy">
            <strong>${title}</strong>
            <small>${description}</small>
            <span>${url}</span>
          </span>
          <span class="album-arrow" aria-hidden="true">&rarr;</span>
        </a>
      </li>
    `;
  }).join('');

  document.querySelectorAll('.photo-reveal').forEach((element, index) => {
    element.style.animationDelay = `${index * 90}ms`;
    element.classList.add('visible');
  });
});
