document.addEventListener("DOMContentLoaded",function(){
    const filterSelect=document.getElementById("data-filter");

    function filterTables(){
        const filterValue=filterSelect.value;
        const tables=document.querySelectorAll('.table-content table')
        tables.forEach(table=>{
            const Datefilter=table.getAttribute('data-filter')
                if(filterValue=='all' || Datefilter==filterValue){
                    table.style.display='table';
                }
                else{
                    table.style.display='none';
                }
    })
    }
    filterSelect.addEventListener("click",filterTables)
    filterTables();
})


document.addEventListener("DOMContentLoaded",function(){
    const filterSelect=document.getElementById("data-select");

    function filterTables(){
        const filterValue=filterSelect.value;
        const tables=document.querySelectorAll('.table-content table')
        tables.forEach(table=>{
            const Datefilter=table.getAttribute('data-select')
                if(filterValue=='all' || Datefilter==filterValue){
                    table.style.display='table';
                }
                else{
                    table.style.display='none';
                }
        })
    }
    filterSelect.addEventListener("click",filterTables)
    filterTables();
})