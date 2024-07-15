var typed = new Typed(".text", {
  strings: ["Frontend Developer" , "Web Developer" , "Backend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
}
);
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
  // Open modals
  const viewMoreButtons = document.querySelectorAll('.view-more');
  viewMoreButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          const modalId = this.getAttribute('data-modal');
          document.getElementById(modalId).style.display = 'block';
      });
  });

  // Close modals
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const modalId = this.getAttribute('data-close');
          document.getElementById(modalId).style.display = 'none';
      });
  });

  // Close modal when clicking outside of the modal content
  window.onclick = function(event) {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
          if (event.target == modal) {
              modal.style.display = 'none';
          }
      });
  };
});