import cookie from 'js-cookie'

const app = {
  state: {
    username: cookie.get('username') ? cookie.get('username') : ''
  },
  mutations: {

  },
  actions: {

  }
}

export default app
