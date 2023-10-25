const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const seeView = (view) => {
$$(".view").forEach((view) => view.classList.add("is-hidden"));
//$(`#${view}`).classList.remove("is-hidden");
};

renderJobs = (jobs) => {
    console.log(jobs);
    seeView('list-jobs');
}



