import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class HousesController {

    constructor() {
        console.log("HousesController is Loaded");
        AppState.on('houses', this.drawHouses)
        housesService.loadHouses()
    }

    drawHouses() {
        const houses = AppState.houses
        let innerHTMLString = ''
        houses.forEach((house) => innerHTMLString += house.cardHTMLTemplate)
        setHTML('houseListings', innerHTMLString)
    }

    createHouse() {
        event.preventDefault()
        const form = event.target
        const houseData = getFormData(form)
        console.log(houseData)
        housesService.createHouse(houseData)
    }

    destroyHouse(houseId) {
        const wantsToDelete = window.confirm("Are you sure you want to delete this awesome listing?")

        if (!wantsToDelete) {
            return
        }
        housesService.destroyHouse(houseId)
    }
}