//const sidebar = document.querySelector(".sidebar");
//const sidebarClose = document.querySelector("#sidebar-close");
//const menu = document.querySelector(".menu-content");
//const menuItems = document.querySelectorAll(".submenu-item");
//const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

//sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

//menuItems.forEach((item, index) => {
  //item.addEventListener("click", () => {
    //menu.classList.add("submenu-active");
    //item.classList.add("show-submenu");
    //menuItems.forEach((item2, index2) => {
      //if (index !== index2) {
        //item2.classList.remove("show-submenu");
     // }
   // });
 // });
//});

//subMenuTitles.forEach((title) => {
  //title.addEventListener("click", () => {
   // menu.classList.remove("submenu-active");
  //});
//})

// Get the sidebar and hamburger menu elements
// Function to toggle submenus
document.querySelectorAll('.submenu-item').forEach((submenuItem) => {
    submenuItem.addEventListener('click', function () {
      let submenu = this.nextElementSibling;
      let icon = this.querySelector('i');
  
      // Toggle the submenu
      if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
      } else {
        submenu.style.display = 'block';
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
      }
    });
  });
  
  // Get all buttons and side panels
  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


