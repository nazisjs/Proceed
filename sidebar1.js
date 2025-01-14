const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const thirdNav = document.querySelector(".third_nav");
const courses = document.querySelector(".courses");
const learnings = document.querySelector(".learnings");
const calendarcontainer=document.querySelector('calendar-container');
const footer=document.querySelector(".footer-content")


sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    adjustLayout();
});

function adjustLayout() {
    if (sidebar.classList.contains("collapsed")) {
        courses.style.marginLeft = "85px";
        learnings.style.marginLeft = "85px";
        learnings.style.marginTop="100px";
        footer.style.marginLeft="85px";
        
    } else {
        courses.style.marginLeft = "200px";
        learnings.style.marginLeft = "200px";
        learnings.style.marginTop="100px";
        footer.style.marginLeft="200px";
        calendarcontainer.style.marginLeft="500px";
    }
}
