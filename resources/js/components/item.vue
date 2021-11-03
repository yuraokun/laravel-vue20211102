<template>
    <div>
        <h2>Item Detail</h2>
        <h3>Item Name</h3>
        {{ $store.state.items.title }}
        <p>{{ item_data.item_name }}</p>
        <h3>details</h3>
        <p>{{ item_data.detail }}</p>
        <h3>price</h3>
        <p>{{ item_data.price }}円</p>
        <button @click="back">Go Back</button>
    </div>
</template>

<script>
export default {
    props: ["id"],

    data() {
        return {
            item_data: {},
        };
    },
    methods: {
        getItemData() {
            // console.log(this.id);
            axios
                .get(`/api/items/${this.id}`)
                .then((res) => {
                    console.log(res);
                    this.item_data = res.data;
                })
                .catch((err) => {
                    console.log(err.response);
                    this.$router.replace({ path: "/notFound" });
                });
        },
        back() {
            this.$router.push({ name: "Items" });
            // this.$router.go(-1);
        },
    },
    mounted() {
        this.getItemData();
    },
};
</script>

<style scoped>
h2 {
    margin-bottom: 10px;
}
</style>
