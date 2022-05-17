import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 0
})

var thisLoc = window.location.origin;
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") thisLoc = 'http://localhost:5000'

const api = axios.create({ 
    baseURL:  thisLoc,
    adapter: cache.adapter
  }
)

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axios, api }