require("./bootstrap.js");

import router from "./router/router";
import { createApp } from "vue";
import App from "./main/main.vue";
import store from "./store/index";

import { ref, reactive, computed, onMounted, watch, watchEffect } from "vue";
import { useStore } from "vuex";

window.ref = ref;
window.reactive = reactive;
window.computed = computed;
window.onMounted = onMounted;
window.onWatch = watch;
window.watchEffect = watchEffect;
window.useStore = useStore;

// import axios from "axios";
// import vueAxios from "vue-axios";

createApp(App).use(router).use(store).mount("#app");
