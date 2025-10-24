// ======== MENU TOGGLE =========
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ======== SMOOTH SCROLLING (for nav links) =========
const links = document.querySelectorAll('a[href^="#"], .nav-links a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
      navLinks.classList.remove('active');
    }
  });
});

// ======== OPTIONAL: CLOSE NAVBAR ON OUTSIDE CLICK =========
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});


// ======== REVIEW FORM FUNCTIONALITY =========
const reviewForm = document.getElementById('reviewForm');
const confirmation = document.getElementById('confirmation');

if (reviewForm) {
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmation.textContent = "Thank you for your feedback! Your review has been submitted.";
    reviewForm.reset();
    setTimeout(() => (confirmation.textContent = ""), 4000);
  });
}


// ======== GALLERY POPUP FUNCTIONALITY =========
const artCards = document.querySelectorAll('.art-card');
const popupModal = document.getElementById('popupModal');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupDesc = document.getElementById('popupDesc');
const popupPrice = document.getElementById('popupPrice');
const closeModal = document.getElementById('closeModal');
const buyNowBtn = document.getElementById('buyNowBtn');
const buyFormModal = document.getElementById('buyFormModal');
const closeBuyForm = document.getElementById('closeBuyForm');
const buyForm = document.getElementById('buyForm');
const confirmationMsg = document.getElementById('confirmationMsg');

artCards.forEach(card => {
  card.addEventListener('click', () => {
    popupImage.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupDesc.textContent = card.dataset.desc;
    popupPrice.textContent = card.dataset.price;
    popupModal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => popupModal.style.display = 'none');
buyNowBtn.addEventListener('click', () => {
  popupModal.style.display = 'none';
  buyFormModal.style.display = 'flex';
});
closeBuyForm.addEventListener('click', () => buyFormModal.style.display = 'none');

buyForm.addEventListener('submit', e => {
  e.preventDefault();
  confirmationMsg.textContent = "✅ Thank you! Your interest has been recorded.";
  buyForm.reset();
  setTimeout(() => buyFormModal.style.display = 'none', 2000);
});

// Handle reviews
const reviewForm = document.getElementById("reviewForm");
const reviewsList = document.getElementById("reviewsList");

if (reviewForm) {
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reviewName").value;
    const message = document.getElementById("reviewMessage").value;
    const rating = document.getElementById("reviewRating").value;

    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong> (${rating})<br>${message}`;
    reviewsList.prepend(li);

    reviewForm.reset();
    alert("Thank you for your review!");
  });
}

// Handle commission form
const commissionForm = document.getElementById("commissionForm");
const commissionResponse = document.getElementById("commissionResponse");

if (commissionForm) {
  commissionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    commissionResponse.textContent =
      "Thank you for your request! We'll reach out to you via email soon.";
    commissionResponse.classList.remove("hidden");
    commissionForm.reset();
  });
}

// --- Review Form Logic ---
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reviewForm");
  const reviewList = document.getElementById("reviewList");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const rating = document.getElementById("rating").value;
      const comment = document.getElementById("comment").value;

      if (!name || !rating || !comment) return;

      const stars = "⭐".repeat(rating);
      const reviewHTML = `
        <div class="review-card">
          <h3>${name}</h3>
          <p class="stars">${stars}</p>
          <p>"${comment}"</p>
        </div>
      `;

      reviewList.insertAdjacentHTML("beforeend", reviewHTML);

      form.reset();
      alert("Thank you for your review!");
    });
  }
});
