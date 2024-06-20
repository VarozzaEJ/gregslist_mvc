import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { loadState, saveState } from "../utils/Store.js";

class HousesService {

    createHouse(houseData) {

        const houses = AppState.houses

        const newHouse = new House(houseData)

        houses.push(newHouse)
        this.saveHouses()
    }

    destroyHouse(houseId) {
        const house = AppState.houses
        const houseIndex = house.findIndex((house) => house.id == houseId)
        if (houseIndex == -1) {
            console.error('You messed up stinker')
            return
        }

        console.log(houseIndex)
        house.splice(houseIndex, 1)
        this.saveHouses()
    }

    saveHouses() {
        saveState('houses', AppState.houses)
        console.log("Saving Houses to Local Storage", AppState.houses)
    }

    loadHouses() {
        AppState.houses = loadState('houses', [House])
    }

}

export const housesService = new HousesService()