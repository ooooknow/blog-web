const state = {
    freightDetail: JSON.parse(sessionStorage.getItem('freightDetail')) || null,
};
const mutations = {
    SET_FREIGHT_DETAIL: (state, freightDetail) => {
        state.freightDetail = freightDetail;
        sessionStorage.setItem('freightDetail', JSON.stringify(freightDetail));
    },
};

export default {
    // namespaced: true,
    state,
    mutations,
};
