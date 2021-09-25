const experts = [
    {
        id: "01",
        tittle: "ideation & evaluation",
        background: "analytics.jpg"
    },

    {
        id: "02",
        tittle: "product design",
        background: "sketching.jpg"
    },

    {
        id: "03",
        tittle: "Product Design",
        background: "sketching.jpg"
    },

    {
        id: "04",
        tittle: "Product Design",
        background: "sketching.jpg"
    },

    {
        id: "05",
        tittle: "Product Design",
        background: "sketching.jpg"
    },

    {
        id: "06",
        tittle: "Product Design",
        background: "sketching.jpg"
    },
];

const expertContainer = document.querySelector(".expert-container");

//display Jobs 
window.addEventListener("DOMContentLoaded", function() {
    displayJobs(experts);
});
  
  
function displayJobs(experts) {
    let displayExperts = experts.map(function(item) {
  
        return `<div data-aos="fade-left" class="exp-elem" style="background-image: url(media/imgs/${item.background});">
                    <div class="overlay">
                    <span class="id">${item.id}</span>
                    <h4>${item.tittle}</h4>
                    </div>
                </div>`

                
    })
  
    displayExperts = displayExperts.join("");
    expertContainer.innerHTML = displayExperts;
}; 