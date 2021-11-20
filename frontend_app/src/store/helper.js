
export const userToken = 'userToken'
export const getUserToken = () => {
    try {
        return localStorage.getItem('userToken')
    } catch (e) {
        console.info('error get user token')
        return ''
    }
}
