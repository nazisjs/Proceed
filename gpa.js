document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        { gpa: 4 },
        { gpa: 3.67 },
        { gpa: 4 },
        { gpa: 3.67 },
        { gpa: 3.67 }
    ];
    let totalGPA = 0;
    courses.forEach(course => {
        totalGPA += course.gpa;
    });
    let averageGPA = totalGPA / courses.length;
    document.getElementById("overall-gpa").innerText = "Overall GPA: " + averageGPA.toFixed(2);
});
