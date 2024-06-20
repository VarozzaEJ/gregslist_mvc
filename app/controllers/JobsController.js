import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";


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


}