const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".toggle-btn");
    const mainContent = document.querySelector(".main-content");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        mainContent.classList.toggle("expanded");
    });
