(() => {
  // Selecting elements
  const typingText = document.querySelector('.text2');
  const menuBtn = document.querySelector('.navbar .menu-btn');
  const menuList = document.querySelector('.navbar .nav-list');
  const menuListItems = document.querySelectorAll('.nav-list li a');
  const homeSection = document.querySelector('.home');

  // Roles for dynamic display in the text element
  const roles = [
    "Software Engineer",
    "Lifelong Learner",
    "Product Manager",
    "Student at Oxford"
  ];
  let index = 0;

  // Function to cycle through roles for display
  function textReplace() {
    setInterval(() => {
      typingText.innerHTML = roles[index];
      index = (index + 1) % roles.length; // Cycles back after the last role
    }, 5000);
  }

  // Event handler to toggle active class on menu
  function toggleActiveClass() {
    menuList.classList.toggle('active');
  }

  // Event handler to remove active class from menu
  function removeActiveClassFromMenu() {
    menuList.classList.remove('active');
  }

  // Event handler to manage the active class based on scroll
  function handleScroll() {
    requestAnimationFrame(() => {
      if (window.scrollY > 80) {
        homeSection.classList.add('active');
      } else {
        homeSection.classList.remove('active');
      }
    });
  }

  // Initializing the text replacement functionality
  textReplace();

  // Event listeners for menu interactions
  if (menuBtn && menuList) {
    menuBtn.addEventListener('click', toggleActiveClass);
  }

  menuListItems.forEach(item => {
    item.addEventListener('click', removeActiveClassFromMenu);
  });

  // Event listeners for scroll and load to handle active class toggling
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
})();
