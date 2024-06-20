import { generateId } from "../utils/GenerateId.js";

export class Job {
    constructor(data) {
        this.id = generateId()
        this.imgURL = data.imgURL
        this.salary = data.salary
        this.description = data.description
        this.company = data.company
        this.name = data.name
        this.hired = data.hired
    }

    get cardHTMLTemplate() {
        return `
        <div class="col-12 mb-3" id="background">
            <div class="car-card shadow">
                <div class="row">
                    <div class="col-12 col-md-4 ">
                        <img class="img-fluid bg-dark"
                            src="${this.imgURL}"
                            alt="${this.company}, ${this.name}">
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="p-3">
                            <h2>${this.name}</h2>
                            <h2>${this.salary}</h2>
                            <h3>${this.company}</h3>
                            <p>${this.description}</p>

                            <div class="text-end">
                                <button onclick="app.JobsController.applyForJob()" class="btn btn-success" type="button">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    get backgroundHTMLTemplate() {
        return `
            <div class="container" id="background"></div>        
            `
    }
}