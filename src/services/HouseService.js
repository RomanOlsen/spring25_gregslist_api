import { dbContext } from "../db/DbContext.js"

class HouseService {

  async getSecretSearch() {
    const houses = await dbContext.Houses.find({ bedrooms: 5 })
    return houses
  }
  async getCertainKindsOfHouses(queries) {
    const arrangement = queries.sort
    delete queries.sort


    const allHouses = await dbContext.Houses.countDocuments()
    // const houses = await dbContext.Houses.find(queries)
    const houses = await dbContext.Houses
      .find(queries)
      .sort(arrangement) // only works if we specify to sort in get request
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