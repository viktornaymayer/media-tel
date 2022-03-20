// import axios from "axios"

export default class CityService {
  static getCities(){
    // const response = await axios.get('https://somesite.com/cities');
    const response = [
      { id: "f8279d8a-bbd2-44d7-b590-91ee9a6eaefa", name: "Ivanovo" },
      { id: "7c4c67b6-b2a3-4514-94b1-f004a94a8fc3", name: "Semenovo" },
      { id: "d1fb084b-86b2-4775-8d61-5b218d3f7712", name: "Sidorovo" },
    ]
    return response
  }
  static getCityById(id){
    // const response = await axios.get(`https://somesite.com/city/${id}`);
    const response = id;
    return response
  }
}