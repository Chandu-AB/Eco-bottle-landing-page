// Typewriter runs once
const phrases = ["Reusable.", "Sustainable.", "Stylish."];
let currentPhrase = "", pIndex = 0, cIndex = 0;
const typeEl = document.querySelector("#hero h2");

function typeOnce() {
  if (pIndex >= phrases.length) return;
  const word = phrases[pIndex];
  if (cIndex < word.length) {
    currentPhrase += word[cIndex++];
    typeEl.textContent = currentPhrase;
    setTimeout(typeOnce, 150);
  } else {
    pIndex++;
    cIndex = 0;
    currentPhrase = "";
    setTimeout(typeOnce, 800);
  }
}
typeOnce();

// Learn More scroll
document.getElementById('learnMoreBtn').addEventListener('click', () =>
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' })
);

// Toast system
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-snackbar";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 50);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// Subscribe form
document.getElementById('subscribeForm').addEventListener('submit', e => {
  e.preventDefault();
  const input = e.target.email;
  input.style.borderColor = '#00c851';
  input.style.backgroundColor = '#e6fff2';
  showToast('✅ Thanks for subscribing!');
  e.target.reset();
});

// Buy Now buttons
document.querySelectorAll('.buy-btn').forEach(btn =>
  btn.addEventListener('click', () => {
    showToast(`🛒 You selected the ${btn.dataset.plan} Plan!`);
  })
);

// FAQ Accordion
document.querySelectorAll('.accordion-btn').forEach(btn => {
  const baseText = btn.textContent;
  btn.textContent = `➕ ${baseText}`;
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    btn.textContent = btn.classList.contains('active')
      ? btn.textContent.replace('➕', '➖')
      : btn.textContent.replace('➖', '➕');
    const panel = btn.nextElementSibling;
    panel.style.maxHeight = btn.classList.contains('active') ? `${panel.scrollHeight}px` : null;
  });
});

// Smooth nav scroll
document.querySelectorAll('nav a[href^="#"]').forEach(link =>
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  })
);
