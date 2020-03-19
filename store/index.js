export const state = () => ({
  route: 'initial'
})

export const mutations = {
  set_route(state, value) {
    state.route = value
  }
}

export const actions = {
  nuxtServerInit({commit}, {route, redirect}) {
    if (route.path !== '/') {
      console.log(route.path)
      commit('set_route', route.path)
      redirect('/')
    }
  }
}
