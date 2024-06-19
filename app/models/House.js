import { generateId } from "../utils/GenerateId.js";

export class House {
    constructor(data) {
        this.id = generateId()
        // this.dateListed = data.dateListed == undefined ? new Date() : new Date(data.dateListed)
        this.name = data.name
        this.year = data.year
        this.imgURL = data.imgURL
        this.price = data.price
        this.description = data.description
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
    }
    get cardHTMLTemplate() {
        return `
        <div class="col-12 mb-3">
        <div class="car-card shadow" style="border-color: black;">
            <div class="row">
                <div class="col-12 col-md-4 ">
                    <img class="img-fluid bg-dark"
                        src="${this.imgURL}"
                        alt="${this.name}">
                </div>
                <div class="col-12 col-md-8">
                    <div class="p-3">
                        <h2>${this.name}</h2>
                        <h2>$${this.price}</h2>
                        
                        <h4>Bedrooms: ${this.bedrooms}</h4>
                        <h4>Bathrooms: ${this.bathrooms}</h4>
                        <h5>
                            SquareFeet: ${this.sqft}
                        </h5>
                        <div class="text-end">
                            <button onclick="app.HousesController.destroyHouse('${this.id}')"
                                class="btn btn-outline-danger" type="button">Delete House</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}