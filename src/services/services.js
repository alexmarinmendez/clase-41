import MongoDAO from "../models/MongoDAO.js";
import UserService from "./Users.js";
// import ProductService from "./Products.js";
import config from '../config/config.js'

let dao
switch (config.app.persistence) {
    case "MONGO":
        dao = new MongoDAO(config.mongo)
        break;
    // case "FIREBASE":
    //     dao = new FirebaseDAO(config.firebase)
    //     break;
}

export const userService = new UserService(dao)
// export const productService = new ProductService(dao)