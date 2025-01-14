const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const scheduleNaming = document.querySelector(".schedule-table");
const schedule = document.querySelector(".schedule");
const footer=document.querySelector(".footer-content");

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    adjustLayout();
});

function adjustLayout() {
    if (sidebar.classList.contains("collapsed")) {
        schedule.style.marginLeft = "85px";
        footer.style.marginLeft="15px";
        
        
    } else {
        schedule.style.marginLeft = "50px";
        footer.style.marginLeft="85px";
        
    }
}
