export const state = () => ({
    users: {
        data: [],
        total: 0,
        current_page: 1
    },
    userLoader: false,
    summary: {
        aktif: 0,
        non_aktif: 0
    }
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
    },
    setSummary(state, data){
        state.summary = data
    }
}

export const getters = {
    getUsers(state) {
         return state.users
    },
    getLoader(state){
        return state.userLoader
    },
    getSummary(state){
        return state.summary
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
    },
    getUserSummary(context){
        this.$axios.get(`/user-summary`).then(resp => {
            context.commit('setSummary', resp.data.data)
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            // context.commit("setLoader")
        })
    }
}