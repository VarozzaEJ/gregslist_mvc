import { AppState } from "../AppState.js";
import { setHTML, setText } from "../utils/Writer.js";


export class JobsController {
    constructor() {
        console.log("Job Controller is loaded")
        AppState.on('jobs', this.drawJobs)
        this.drawJobs()
    }

    drawJobs() {
        const jobs = AppState.jobs
        let innerHTMLString = ''
        jobs.forEach((job) => innerHTMLString += job.cardHTMLTemplate)
        setHTML('jobListings', innerHTMLString)
    }

    applyForJob() {
        // const jobs = AppState.jobs
        // let HTML = `<div class="container" id="background"></div>`
        // let hiredEmployee = jobs.find((jobs) => jobs.hired == 'True')
        if (Math.random() >= 0.5) {
            // hiredEmployee.hired = 'True'
            window.alert("Yippee you got the job 😀")
        } else {
            window.alert("You didn't get the job 😕")
        }
    }
}