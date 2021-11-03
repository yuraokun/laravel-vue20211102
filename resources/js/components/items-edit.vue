<template>
    <div>
        <h1>{{ this.$store.state.items.title }}</h1>

        <div>
            <!-- <p ref="p">{{ name }}</p> -->

            <div v-for="(item, index) in items" :key="index">
                {{ item.item_name }} <span @click="remove(item.id)">x</span>
            </div>
        </div>
        <div class="addItem">
            <h3>Add Item</h3>
            <div>
                <p
                    class="red"
                    v-for="(err, index) in errMsgs.item_name"
                    :key="index"
                >
                    {{ err }}
                </p>
                name
                <input type="text" v-model="newItem.item_name" />
            </div>
            <div>
                <p
                    class="red"
                    v-for="(err, index) in errMsgs.price"
                    :key="index"
                >
                    {{ err }}
                </p>
                price
                <input type="number" v-model="newItem.price" />
            </div>
            <div>
                <p
                    class="red"
                    v-for="(err, index) in errMsgs.detail"
                    :key="index"
                >
                    {{ err }}
                </p>
                detail
                <textarea
                    v-model="newItem.detail"
                    cols="30"
                    rows="10"
                ></textarea>
            </div>

            <button @click="save">Save</button>
        </div>
    </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
// import { ref } from "vue";
export default {
    setup() {
        const store = useStore();
        // store.state.items.title = "hey";
        console.log(store);
        const errMsgs = ref({
            item_name: [],
            detail: [],
            price: [],
        });
        const newItem = ref({
            item_name: null,
            detail: null,
            price: null,
        });

        const save = async () => {
            const result = await store.dispatch("items/addItem", newItem.value);

            if (result.status != 200) {
                errMsgs.value = result.data.errors;
            } else {
                errMsgs.value = {
                    item_name: [],
                    detail: [],
                    price: [],
                };
                newItem.value = {
                    item_name: null,
                    detail: null,
                    price: null,
                };
            }
        };

        const items = computed(() => {
            return store.state.items.items;
        });
        const remove = (index) => {
            store.dispatch("items/deleteItem", index);
        };
        onMounted(() => {
            store.dispatch("items/getItems");
        });

        return { items, remove, newItem, save, errMsgs };
    },
};
</script>

<style>
.big {
    font-weight: bold;
}
.addItem {
    margin-top: 30px;
    padding: 10px;
    border: 1px solid black;
}
.red {
    color: red;
}
</style>
