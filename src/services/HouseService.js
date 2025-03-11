import { dbContext } from "../db/DbContext.js"

class HouseService {
  async getHouses() {
    const houses = await dbContext.Houses.find()
    return houses
  }
}

export const houseService = new HouseService()