window.onload = function() {
    const progress = document.querySelector('.progress');
    const percent = 71; 
    const circumference = 440; 
    const offset = circumference - (percent / 100) * circumference;
    progress.style.strokeDashoffset = offset;

    const progress2 = document.querySelector('.progress2');
    const percent2 = 95; 
    const circumference2 =440; 
    const offset2 = circumference2 - (percent2 / 100) * circumference2;
    progress2.style.strokeDashoffset = offset2;
                                                                    
    const progress3 = document.querySelector('.progress3');
    const percent3 = 85; 
    const circumference3 = 440;
    const offset3 = circumference3 - (percent3 / 100) * circumference3;
    progress3.style.strokeDashoffset = offset3;

    const progress4 = document.querySelector('.progress4');
    const percent4 = 100; 
    const circumference4 =440; 
    const offset4 = circumference4 - (percent4 / 100) * circumference4;
    progress4.style.strokeDashoffset = offset4;

};
