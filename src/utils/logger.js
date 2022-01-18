/* Used as a central module for logging */
const logger = {
    info: (...params) => {
        if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'production' && process.env.NODE_ENV) {
            console.log(...params)
        }
    },

    error: (...params) => {
        if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'production' && process.env.NODE_ENV) {
            console.error(...params)
        }
    }
}


export default logger