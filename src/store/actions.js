import { fetchAskList, fetchItem, fetchJobsList, fetchNewsList, fetchUser } from '@/api';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(res => {
            context.commit('SET_NEWS', res.data);
        })
        .catch(console.log);
    },
    FETCH_JOBS({commit}) {
        fetchJobsList()
        .then(res => {
            commit('SET_JOBS', res.data);
        })
        .catch(console.log);
    },
    FETCH_ASK(context) {
        fetchAskList()
        .then(res => {
            context.commit('SET_ASK', res.data);
        })
        .catch(console.log);
    },
    FETCH_USER({commit}, name) {
        fetchUser(name)
        .then(({data}) => {
            commit("SET_USER", data)
        })
        .catch(console.log);
    },
    FETCH_ITEM({commit},id) {
        fetchItem(id)
        .then(({data}) => {
            commit("SET_ITEM", data )
        })
        .catch(console.log);
    }
}