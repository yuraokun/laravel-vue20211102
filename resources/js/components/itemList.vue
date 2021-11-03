<template>
    <div class="item">
        <router-link :to="{ name: 'Item', params: { id: index } }">
            <h4>{{ item.item_name }}</h4>
            <p>
                {{ snippet }}
            </p>
        </router-link>
    </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
    props: ["item", "index"],
    setup(props) {
        const snippet = computed(() => {
            return props.item.detail.substring(0, 80) + "....";
        });

        return { snippet };
    },
};
</script>

<style scoped>
.item {
    padding: 10px;
    box-shadow: 1px 2px 9px rgba(115, 115, 115, 0.8);
    margin-bottom: 10px;
}
</style>
