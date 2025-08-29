const media = document.getElementById('media');
const btn = document.getElementById('toggle');

btn.addEventListener('click', () => {
  const isAlt = media.classList.toggle('is-alt');
  btn.setAttribute('aria-pressed', String(isAlt));
});
