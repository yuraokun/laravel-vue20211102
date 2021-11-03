import { useRoute, useRouter } from "vue-router";
const getData = class {
    constructor(url) {
        this.url = url;
        this.result = null;
        this.test = "hey";
        this.err = null;
    }

    static class() {
        return new this();
    }

    async getData(url) {
        const router = useRouter();
        this.url = url;
        try {
            const data = await axios.get(url);
            this.result = data;
        } catch (err) {
            this.err = err.response;
            router.push({ name: "error" });
        }

        return this;
    }
};

export default getData;
