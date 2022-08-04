import Repository from "./Repository.js";
import User from '../models/Users.js'

export default class UserService extends Repository {
    constructor(dao) {
        super(dao, User.model)
    }
}