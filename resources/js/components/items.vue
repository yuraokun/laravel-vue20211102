<template>
    <div>
        <h2>Items</h2>
        {{ $store.state.test.test }}
        {{ $store.state.items.title }}
        <input type="text" v-model="$store.state.items.title" />
        <div class="search_box">
            Search
            <input type="text" v-model="search" />
            <!-- <button @click="stopEffect">Stop Searching</button> -->
            <p v-show="search">Searching with {{ search }}</p>
        </div>
        <div v-for="(item, index) in searchItems" :key="index">
            <item-list :item="item" :index="index + 1" />
        </div>
    </div>
</template>

<script>
import itemList from "./itemList.vue";
import Items from "../composables/items";

export default {
    components: { itemList },
    // Composition Api
    setup() {
        // console.log(Items.class().getItems());

        const { items, getItems, search, searchItems, stopEffect } =
            Items.class().setItems();

        onMounted(async () => {
            const data = await getItems();
            console.log(data);
            if (data.result) {
                items.value = data.result.data;
            }
        });

        return { items, getItems, search, searchItems, stopEffect };
    },
};
</script>

<style scoped>
.search_box {
    border: 1px solid teal;
    padding: 10px;
    margin-bottom: 30px;
}
</style>
