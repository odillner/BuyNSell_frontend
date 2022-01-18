import axios from 'axios'

import {API_URL} from '../utils/config'
import logger from '../utils/logger'

const extension = 'api/listings/'
const baseUrl = API_URL + extension

const listingService = {
    getAll: async () => {
        try {
            logger.info(extension, 'Fetching listings')

            const res = await axios.get(baseUrl)

            logger.info(extension, 'Listings fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },

    /* Example newListing object:
        {
             title: "title1234",
             description: "desc134",
             price: "1234",
             location: "Bromma",
             imageUrl: "pathtoimage"
         }

         a token is attained by logging in
     */
    create: async (newListing, token) => {
        try {
            logger.info(extension, 'Creating listing', newListing)

            const res = await axios.post(baseUrl, newListing, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'content-type': 'multipart/form-data'
                }
            })

            logger.info(extension, 'DetailedListing created', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    getById: async (id) => {
        try {
            logger.info(extension, 'Fetching listing', id)

            const res = await axios.get(baseUrl + id)

            logger.info(extension, 'DetailedListing fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    remove: async (id, token) => {
        try {
            logger.info(extension, 'Deleting listing', id)

            const res = await axios.delete(baseUrl + id, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })

            logger.info(extension, 'DetailedListing deleted', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    search: async (query) => {
        try {
            logger.info(extension, 'Fetching listings')

            const res = await axios.get(API_URL + 'api/search/' + query)

            logger.info(extension, 'Listings fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    nearbyLocation: async (query) => {
        try {
            logger.info(extension, 'Fetching listings')

            const res = await axios.get(API_URL + 'api/location/' + query)

            logger.info(extension, 'Listings fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    nearbyCoords: async (longitude, latitude) => {
        try {
            logger.info(extension, 'Fetching listings')

            const res = await axios.get(API_URL + 'api/location/' + latitude + "/" + longitude)

            logger.info(extension, 'Listings fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    update: async (id, newListing, token) => {
        try {
            logger.info(extension, 'Updating listing', id, newListing)

            const res = await axios.put(`${baseUrl}${id}`, newListing, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })

            logger.info(extension, 'DetailedListing updated', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    }
}

export default listingService