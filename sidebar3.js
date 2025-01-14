const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const profile=document.querySelector(".profile")
const additionalInfo=document.querySelector(".additional-info")
const footer=document.querySelector(".footer-content")

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    adjustLayout();
});


function adjustLayout() {
    if (sidebar.classList.contains("collapsed")) {
        profile.style.marginLeft = "15px";
        additionalInfo.style.marginLeft = "15px";
        footer.style.marginLeft="15px";
        
        
    } else {
        profile.style.marginLeft = "80px";
        additionalInfo.style.marginLeft = "80px";
        footer.style.marginLeft="85px";
        
    }
}
