window.addEventListener('load', () => {
  const sound = document.getElementById('tudum-sound');
  sound.muted = false;
  sound.play().catch(err => console.log('Autoplay blocked:', err));

  // Redirect to browse.html after sound finishes (~3 sec)
  setTimeout(() => {
    window.location.href = 'browse.html';
  }, 3000);
});
