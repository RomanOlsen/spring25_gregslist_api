import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";

export class HouseController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .get('/search', this.getCertainKindsOfHouses) // QUESTION why search has to be used?
      .get('/:houseID', this.getHousebyID) //dont forget the slash
      .get('/search/SecretSearch', this.SecretSearch)
  }

  async SecretSearch(request, response, next) {
    try {
      const houses = await houseService.getSecretSearch()
      response.send(houses)
    } catch (error) {
      next(error)
    }
  }
  // NOTE request, response and next is from Express
  async getCertainKindsOfHouses(request, response, next) {
    try {
      const queries = request.query
      const houses = await houseService.getCertainKindsOfHouses(queries)
      response.send(houses)
    } catch (error) {
      next(error)
    }
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