const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const seeView = (view) => {
//$$(".view").forEach((view) => view.classList.add("is-hidden"));
//$(`#${view}`).classList.remove("is-hidden");
    $(".view").forEach((view) => view.classList.add("is-hidden"));
    $(`#${view}`).classList.remove("is-hidden");
};

$("#crear").addEventListener("click", () =>
    seeView("create-jobs")
);

$("#list-jobs").addEventListener("click", () => 
    seeView("main")
);




renderJobs = (jobs) => {
    console.log(jobs);
    seeView('list-jobs');
}



