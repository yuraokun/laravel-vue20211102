// npm install vue-router@next --save

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/items",
        name: "Items",
        component: () => import("../components/items.vue"),
    },
    {
        path: "/items-edit",
        name: "Items-edit",
        component: () => import("../components/items-edit.vue"),
    },
    {
        path: "/items/:id",
        name: "Item",
        component: () => import("../components/item.vue"),
        props: true,
    },
    {
        path: "/images",
        name: "Images",
        component: () => import("../components/images.vue"),
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/notFound",
    },
    {
        path: "/notFound",
        name: "notFound",
        component: () => import("../components/404.vue"),
    },
    {
        path: "/error",
        name: "error",
        component: () => import("../components/error.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
