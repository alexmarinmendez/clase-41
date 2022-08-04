import { userService } from '../services/services.js'

const getUsers = async(req, res) => {
    let results = await userService.get()
    //DTO
    res.send(results)
}

const saveUser = async(req, res) => {
    let { first_name, last_name, email } = req.body
    if (!first_name||!last_name||!email) return res.status(400).send({ error: 'Incomplete fields'})
    let result = await userService.save({ first_name, last_name, email })
    res.send(result)
}

export default {
    getUsers, saveUser
}