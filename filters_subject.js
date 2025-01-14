document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".filter");
    const resultContainers = document.querySelectorAll(".result-container");

    const filterSubjects = (e) => {
        const subjectValue = e.target.closest(".filter").getAttribute("data-filter");

        resultContainers.forEach((container) => {
           const containerFilters=container.getAttribute("data-filter");
           if(subjectValue === "all" || containerFilters.includes(subjectValue)){
            container.style.display="flex";
           }else{
            container.style.display="none";
           }
        });
    };
    filters.forEach((filter) => filter.addEventListener("click", filterSubjects));
});
