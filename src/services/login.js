import axios from 'axios'

import {API_URL} from '../utils/config'
import logger from '../utils/logger'

const extension = 'api/login/'
const baseUrl = API_URL + extension

const loginService = {
    /* Example user object:
        {
         password: "password1234",
         username: "user1234"
         }
    */
    auth: async (user) => {
        try {
            logger.info(extension, 'Authenticating user:', user)

            const res = await axios.post(baseUrl, user)

            logger.info(extension, 'User authenticated', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
}

export default loginService