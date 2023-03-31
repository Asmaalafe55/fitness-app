import jwtDecode from 'jwt-decode'

const isAuthorized = (role, arrOfRoles) => {
  if (arrOfRoles.includes(role)) return true
}
const getRole = (tokenLog) => {
  let status = ''

  if (tokenLog) {
    const decoded = jwtDecode(tokenLog)
    const access_tier = decoded.access_tier

    return status
  }
}
export { getRole, isAuthorized }
