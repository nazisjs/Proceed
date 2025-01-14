const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const courseResults=document.querySelector(".course_results");
const tableGrades=document.querySelector(".table-of-grades");
const homework=document.querySelector(".homework");
const footer=document.querySelector(".footer-content")

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    adjustLayout();
});

function adjustLayout() {
    if (sidebar.classList.contains("collapsed")) {
        courseResults.style.marginLeft = "25px";
        tableGrades.style.marginLeft = "25px";
        homework.style.marginLeft = "25px";
        footer.style.marginLeft="85px";
        
    } else {
        courseResults.style.marginLeft = "15px";
        tableGrades.style.marginLeft = "15px";
        homework.style.marginLeft = "300px";
        footer.style.marginLeft="200px";
    }
}
