// const $ = (selector) => document.querySelector(selector);
// const $$ = (selector) => document.querySelectorAll(selector);

// const seeView = (view) => {
//     $$(".view").forEach((view) => view.classList.add("is-hidden"));
//     $(`#${view}`).classList.remove("is-hidden");
// };


getJobs = async () => {
    seeView("loading");
let response = await fetch (
    "https://653809a8a543859d1bb12bb1.mockapi.io/careers/api/Jobs"
);
let data = await response.json();
console.log(data);
}


const seeJobs = (trabajos) => {
$("#list-jobs").innerHTML= '';
for (let trabajos of trabajos) {
    $("#list-jobs").innerHTML += `
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">${trabajos.title}</p>
                    <p class="subtitle is-6">${trabajos.description}</p>
                </div>
            </div>
        </div>
    </div>
    `;
}
}
// setTimeout(() => { 
//     renderJobs(data);
// }, 3000);

// renderJobs = (jobs) => {
//         console.log(jobs);
//         seeView('list-jobs');
//     }
    
    getJobs ();


//fetch(
    //"https://653809a8a543859d1bb12bb1.mockapi.io/careers/api/Jobs", {
      //  method: 'DELETE'
    //});


    