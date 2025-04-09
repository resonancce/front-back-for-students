
export const userToken = 'userToken'
export const getUserToken = () => {
    try {
        return localStorage.getItem(userToken)
    } catch (e) {
        console.info('error get user token')
        return ''
    }
}

export const setUserToken = (token) => {
    try {
        return localStorage.setItem(userToken, token)
    } catch (e) {
        console.info('error get user token')
        return ''
    }
}

export const clearUserToken = () => {
    try {
        return localStorage.removeItem(userToken)
    } catch (e) {
        console.info('error get user token')
        return ''
    }
}