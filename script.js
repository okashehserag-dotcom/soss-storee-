const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('.sections-nav button');

navButtons.forEach(btn => {
  btn.onclick = () => {
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(`section-${btn.dataset.section}`).classList.add('active');
  };
});

/* توليد المنتجات */
document.querySelectorAll('.slider').forEach(slider => {
  for (let i = 1; i <= 10; i++) {
    const id = `${slider.dataset.section}-${i}`;
    const liked = localStorage.getItem(id);

    slider.innerHTML += `
      <div class="product">
        <img src="images/soon.png" alt="soon">
        <div class="info">
          <p>وصف منتج تجريبي</p>
          <button class="like-btn" data-id="${id}">
            ${liked ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    `;
  }
});

/* لايك */
document.addEventListener('click', e => {
  if (e.target.classList.contains('like-btn')) {
    const id = e.target.dataset.id;
    if (!localStorage.getItem(id)) {
      localStorage.setItem(id, true);
      e.target.textContent = '❤️';
    }
  }
});

/* بحث */
document.querySelectorAll('.search').forEach(input => {
  input.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    const products = e.target.nextElementSibling.querySelectorAll('.product');

    products.forEach(p => {
      p.style.display = p.textContent.toLowerCase().includes(value)
        ? 'block'
        : 'none';
    });
  });
});
