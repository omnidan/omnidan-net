function minMaxScaling (val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function bookEffect (container, rotateX, rotateY, brightness) {
  const img = container.querySelector('img');
  img.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  img.style.filter = `brightness(${brightness})`;
}

function applyBookEffect (container, e) {
  const rotateY = minMaxScaling(e.offsetX, 0, 200, -20, 20);
  const rotateX = minMaxScaling(e.offsetY, 0, 250, 20, -20);
  const brightness = minMaxScaling(e.offsetY, 0, 250, 1.2, 0.8);
  bookEffect(container, rotateX, rotateY, brightness);
}

function resetBookEffect (container) {
  bookEffect(container, 0, 0, 1);
}

document.querySelectorAll('.book').forEach(book => {
  book.addEventListener('mousemove', e => applyBookEffect(book, e));
  book.addEventListener('mousedown', e => resetBookEffect(book));
  book.addEventListener('mouseleave', e => resetBookEffect(book));
});
