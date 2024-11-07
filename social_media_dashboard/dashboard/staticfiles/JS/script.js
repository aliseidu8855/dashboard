// Sidebar Toggle

let sidebarOpen = false;
let sideBar = document.querySelector(".sidebar");

function openSidebar() {
  if (!sidebarOpen) {
    sideBar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sideBar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}
