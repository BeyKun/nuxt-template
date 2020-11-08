export const state = () => ({
    users: {
        data: [],
        total: 0,
        current_page: 1
    },
    userLoader: false
})
  
export const mutations = {
    setUsers(state, data) {
      state.users = data
    },
    setLoader(state){
        state.userLoader = !state.userLoader
    },
    setPage(state, data){
        state.users.current_page = data
    }
}

export const getters = {
    getUsers(state) {
         return state.users
    },
    getLoader(state){
        return state.userLoader
    },
    setPage(state, data){
        state.users.current_page = data
    }
};

export const actions = {
    getAll(context, {showall = 1, search = '', defaultPage = false}){
        context.commit("setLoader")
        let page = defaultPage ? 1 : context.state.users.current_page
        this.$axios.get(`/users?showall=${showall}&page=${page}&search=${search}`).then(resp => {
            context.commit('setUsers', resp.data)
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            context.commit("setLoader")
        })
    }
}