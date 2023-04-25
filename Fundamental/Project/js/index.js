let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
   mainNav.classList.toggle('active')
});

let biodata = document.getElementById('js-biodata');
let iconProfile = document.getElementById('icon-profile');

iconProfile.addEventListener('click', function() {
   biodata.classList.toggle('active-biodata');
   
});