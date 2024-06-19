import { generateId } from "../utils/GenerateId.js"

export class Car {
  /**
   * @param {{ make: string; model: string; year: number; imgURL: string; mileage: number; price: number; color: string; description: string; runs: boolean; fuelType: string; hasCleanTitle: boolean; dateListed: string }} data
   */
  constructor(data) {
    this.id = generateId()
    // if there is no dateListed in the object, we create a new Date, otherwise we create a new Date using the date stored on the object
    this.dateListed = data.dateListed == undefined ? new Date() : new Date(data.dateListed)
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.imgURL = data.imgURL
    this.mileage = data.mileage
    this.price = data.price
    this.color = data.color
    this.description = data.description
    this.runs = data.runs
    this.fuelType = data.fuelType
    this.hasCleanTitle = data.hasCleanTitle
  }

  get cardHTMLTemplate() {
    return `
    <div class="col-12 mb-3">
      <div class="car-card shadow" style="border-color: ${this.color};">
        <div class="row">
          <div class="col-12 col-md-4 ">
            <img class="img-fluid bg-dark" src="${this.imgURL}" alt="${this.make} ${this.model}">
          </div>
          <div class="col-12 col-md-8">
            <div class="p-3">
              <h2>${this.year} ${this.make} ${this.model}</h2>
              <h2>$${this.price}</h2>
              <h3>Listed on ${this.formattedListedDate} at ${this.formattedListedTime}</h3>
              <h3>${this.mileage} miles ${this.hasCleanTitle ? 'Clean Title' : 'Not Clean Title'}</h3>
              <h4>Runs on ${this.fuelType}</h4>
              <p>${this.description}</p>
              <h5>
                ${this.carRunsIcon}
              </h5>
              <div class="text-end">
                <button onclick="app.CarsController.destroyCar('${this.id}')" class="btn btn-outline-danger" type="button">Delete Car</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get carRunsIcon() {
    if (this.runs) {
      return '<i class="mdi mdi-car" title="Runs great"></i>'
    }

    // else
    return '<i class="mdi mdi-car-off" title="The car is broken"></i>'
  }

  get formattedListedDate() {
    return this.dateListed.toLocaleDateString()
  }
  get formattedListedTime() {
    return this.dateListed.toLocaleTimeString()
  }

}
