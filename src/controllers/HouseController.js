import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";

export class HouseController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .get('/:houseID', this.getHousebyID) //dont forget the slash
  }
  async getHousebyID(request, response, next) {
    try {
      const requestedHouse = request.params.houseID
      const house = await houseService.getHousebyID(requestedHouse)
      response.send(house)
    } catch (error) {
      next(error)
    }
  }

  async getHouses(request, response, next) {
    try {
      const houses = await houseService.getHouses()
      response.send(houses)
    } catch (error) {
      next(error)
    }
  }




}