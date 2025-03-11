import { dbContext } from "../db/DbContext.js"

class HouseService {
  async getHousebyID(requestedHouse) {
    const foundHouse = await dbContext.Houses.findById(requestedHouse)
    return foundHouse

  }
  async getHouses() {
    const houses = await dbContext.Houses.find()
    return houses
  }
}

export const houseService = new HouseService()