import axios from 'axios'

import {API_URL} from '../utils/config'
import logger from '../utils/logger'

const extension = 'api/users'
const baseUrl = API_URL + extension

const signupService = {
    /* Example sign up object:
        {
            password: "password1234",
            username: "user1234",
            email: "mail@abc.se" ,
            phoneNumber: 123456789,
            name: "name1234",
            address: "address1234"
        }
    */
    signup: async (new_user) => {
        try {
            logger.info(extension, 'Authenticating user:', new_user)

            const res = await axios.post(baseUrl, new_user)

            logger.info(extension, 'User authenticated', new_user)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
}

export default signupService