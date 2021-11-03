import axios from "axios";
import { createStore } from "vuex";
import { items } from "./modules/items.js";
import { test } from "./modules/test.js";

import createPersistedState from "vuex-persistedstate";
// import Cookies from "js-cookie";

const store = createStore({
    modules: {
        items: items,
        test,
    },
    plugins: [
        createPersistedState({
            key: "title",
            storage: window.sessionStorage,
        }),
    ],
});

export default store;
