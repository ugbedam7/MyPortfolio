document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('mobile-nav-menu');
  const menuItems = navMenu.querySelectorAll('a'); // Select all menu item links

  // Toggle the menu when the hamburger menu is clicked
  hamburgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.classList.toggle('active');
  });

  // Close the menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (
      !navMenu.contains(e.target) &&
      !hamburgerMenu.contains(e.target) &&
      navMenu.classList.contains('active')
    ) {
      navMenu.classList.remove('active');
    }
  });

  // Close the menu when a menu item is clicked
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
});
