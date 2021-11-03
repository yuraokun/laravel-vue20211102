import getData from "./getData";

class Items extends getData {
    constructor() {
        super();
    }

    setItems() {
        const items = ref([]);
        const search = ref("");

        // onWatch(search, () => {
        //     console.log("hehe");
        // });
        const Effect = watchEffect(() => {
            // console.log(search.value);
        });

        const getItems = async () => {
            return await this.getData("/api/items");
        };

        const searchItems = computed(() => {
            return items.value.filter((item) => {
                return item.item_name.includes(search.value);
            });
        });

        const stopEffect = () => {
            Effect();
        };

        onMounted(() => {
            getItems();
        });

        return { items, getItems, search, searchItems, stopEffect };
    }
}

export default Items;
