import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";

export class HouseController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
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