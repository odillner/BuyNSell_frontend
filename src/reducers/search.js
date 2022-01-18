import listingService from '../services/listings'
import logger from '../utils/logger'

const initialState = {
    loading: false,
    results: [],
}

/* Reducer handling search results */
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SET_SEARCH_RESULTS': {
        return {
            loading: false,
            results: action.data
        }
    }
    case 'SET_SEARCH_LOADING': {
        return {
            ...state,
            loading: true,
        }
    }
    default: return state
    }
}
//TODO: limit api calls more?
export const performSearch = (type, query) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'SET_SEARCH_LOADING',
            })

            let res

            if (type == 0) {
                if (query) {
                    res = await listingService.search(query)
                } else {
                    res = await listingService.getAll()
                }
            } else if (type == 1) {
                res = await listingService.nearbyLocation(query)
            } else if (type == 2) {
                res = await listingService.nearbyCoords(query.longitude, query.latitude)
            } else {
                res = []
            }



            dispatch({
                type: 'SET_SEARCH_RESULTS',
                data: res
            })
        } catch (err) {
            dispatch({
                type: 'SET_SEARCH_RESULTS',
                data: []
            })

            logger.error('Search failed', err)
        }
    }
}

export default searchReducer