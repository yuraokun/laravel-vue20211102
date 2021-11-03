export const items = {
    namespaced: true,
    state: {
        title: "Items Edit",
        items: [],
    },
    getters: {},
    actions: {
        async getItems({ commit }) {
            const data = await axios.get("/api/items");
            commit("setItems", data);
        },
        async addItem({ commit }, newItem) {
            try {
                const data = await axios.post("/api/add_item", newItem);
                if (data.status == 200) {
                    commit("setItems", data);
                }
                return data;
            } catch (err) {
                // console.log(err.response);
                return err.response;
            }

            // console.log(data);
        },
        async deleteItem({ commit }, index) {
            try {
                const data = await axios.post("/api/delete_item", {
                    id: index,
                });
                if (data.status == 200) {
                    commit("setItems", data);
                }
                return data;
            } catch (err) {
                // console.log(err.response);
                return err.response;
            }
        },
    },
    mutations: {
        setItems(state, data) {
            state.items = data.data;
        },
    },
};
