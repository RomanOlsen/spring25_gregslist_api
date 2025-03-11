import { dbContext } from "../db/DbContext.js"

class HouseService {

  async getSecretSearch() {
    const houses = await dbContext.Houses.find({ bedrooms: 5 })
    return houses
  }
  async getCertainKindsOfHouses(queries) {
    // queries.b
    // const houses = await dbContext.Houses.countDocuments()
    const houses = await dbContext.Houses.find(queries)
    return houses
  }
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