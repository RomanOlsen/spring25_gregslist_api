import { dbContext } from "../db/DbContext.js"

class HouseService {

  async getCertainKindsOfHouses(queries) { // bad name of function. since it could just get all houses but only with pageNumber as a query. getHousesByQuery is likely better
    const arrangement = queries.sort
    delete queries.sort
    
    let pageNumber = queries.page
    delete queries.page

    if (pageNumber == null) {
      pageNumber = 'No page specified'
    }
    
    const allHouses = await dbContext.Houses.countDocuments()
    const houses = await dbContext.Houses
    .find(queries)
    .sort(arrangement) // only works if we specify to sort in get request

    const output = {
      message: 'heres your request',
      page: pageNumber,
      requestedHouses: houses,
    }


    return output
  }
  
  // SECTION //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  async getSecretSearch() {
    const secretHouses = await dbContext.Houses.find({ bedrooms: 5 })
    return secretHouses
  }
  

  async getHousebyID(requestedHouse) {
    const foundHouse = await dbContext.Houses.findById(requestedHouse)
    return foundHouse

  }
  async getHouses() {
    const houses = await dbContext.Houses.find()
    const houseStats = {
      message: 'Here they are!',
      totalHouses: await dbContext.Houses.countDocuments(),
      houses: houses
    }
    return houseStats
  }
}

export const houseService = new HouseService()