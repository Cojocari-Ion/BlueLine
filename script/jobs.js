const jobs = [
    {
      id: 1,
      denumire: "JS Developer",
      descriere: "o descriere neinspirată pentru care nu e cazul să pierdem timpul",
      icon: "fab fa-js"
    },
  
    {
      id: 2,
      denumire: "PHP Developer",
      descriere: "o descriere neinspirată pentru care nu e cazul să pierdem timpul",
      icon: "fab fa-php"
    },
  
    {
      id: 3,
      denumire: "React.js Developer",
      descriere: "o descriere neinspirată pentru care nu e cazul să pierdem timpul",
      icon: "fab fa-react"
    },
  
    {
      id: 4,
      denumire: "Angular.js Developer",
      descriere: "o descriere neinspirată pentru care nu e cazul să pierdem timpul",
      icon: "fab fa-angular"
    },
  
    {
      id: 5,
      denumire: "Python Developer",
      descriere: "o descriere neinspirată pentru care nu e cazul să pierdem timpul",
      icon: "fab fa-python"
    },
  
    {
      id: 6,
      denumire: "Java Developer",
      descriere: "o descriere neinspirată pentru care nu e cazul să pierdem timpul",
      icon: "fab fa-java"
    },
  
];
const jobsSection = document.querySelector("#jobs-section");
const jobsContainer = document.querySelector(".jobs-container");

//display Jobs 
window.addEventListener("DOMContentLoaded", function() {
    displayJobItems(jobs);
});
  
  
function displayJobItems(jobItems) {
    let displayJobs = jobItems.map(function(item) {
  
        return `<div class="job-faded job-element flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="icon"> 
                            <i class="${item.icon}"></i> 
                            </div>
                            <h4>${item.denumire}</h4>
                        </div>
                        <div class="flip-card-back">
                            <p>${item.descriere}</p>
                            <button type="button">Apply Now</button>
                        </div>
                    </div>
                </div>`;

                
    })
  
    displayJobs = displayJobs.join("");
    jobsContainer.innerHTML = displayJobs;
};

//jobs animated


function mouseOverAppear() {

    
    var jobPosition = jobsContainer.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    const jobElements = document.querySelectorAll(".job-element");

    if(jobPosition > screenPosition) {
        frame();
    };

    var listOrder = -1;
    var interval = setInterval(frame, 100);
    var length = jobElements.length;

    function frame() {
        if (listOrder == length - 1) {
        clearInterval(interval);
        window.removeEventListener("scroll", scrollAppear);
        return;
        } else {
        listOrder++;
        jobElements[listOrder].classList.remove("job-faded");
        };
    };

    
};

jobsSection.addEventListener("onmouseover", mouseOverAppear);

