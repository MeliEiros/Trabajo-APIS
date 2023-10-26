const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const seeView = (vistaAMostrar) => {
$$(".view").forEach((view) => view.classList.add("is-hidden"));
$(`#${vistaAMostrar}`).classList.remove("is-hidden");
};

$("#list-jobs").addEventListener("click", () =>
    vistaAMostrar("seeView")
);

$("#create-job").addEventListener("click", () => 
    vistaAMostrar("Seeview")
);




renderJobs = (jobs) => {
    console.log(jobs);
    seeView('list-jobs');
}



