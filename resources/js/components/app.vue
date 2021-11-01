<template>
    <div>
        <h1>Image Upload Test</h1>
        <!-- <input type="text" v-model="text" />
        <p>{{ text }}</p>
        <p>{{ data }}</p> -->

        <div style="display: flex; align-items: flex-start">
            <div v-for="(url, index) in fileData.urls" :key="index">
                <span style="font-size: 2.5rem" @click="deleteImage(index)"
                    >x</span
                >
                <img :src="url" style="width: 100px" />
            </div>
        </div>

        <div>
            <input type="file" id="" @change="upload" />
            <button @click="send">Send</button>
        </div>
        <hr />
        <h2>Registered Images</h2>
        <div
            style="
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            "
        >
            <div
                style="flex: 0 0 30%"
                v-for="(image, index) in images"
                :key="index"
            >
                <p>{{ image.original_name }}</p>
                <img
                    style="width: 100%"
                    :src="`/storage/${image.unique_path}`"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: null,
            fileData: {
                files: [],
                urls: [],
            },
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        deleteImage(index) {
            this.fileData.files.splice(index, 1);
            this.fileData.urls.splice(index, 1);
        },
        load() {
            axios.get("/api/images").then((res) => {
                this.images = res.data;
            });
        },
        upload(event) {
            const file = event.target.files[0];
            if (!file.type.match("image.*")) {
                // this.message = "画像ファイルを選択して下さい";
                // this.confirmedImage = "";
                alert("it is not image..");
                return;
            }
            this.preview(file);
        },
        preview(file) {
            // console.log(this.files);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                this.fileData.urls.push(e.target.result);
                this.fileData.files.push(file);
                console.log(this.fileData);
            };
        },
        send() {
            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };

            let formData = new FormData();
            // let requestFiles = this.files.filter((file) => file); // ファイルがあるものだけを取得
            // requestFiles.forEach((file, index) => {
            //     formData.append("files[" + index + "]", file); // formDataに追加していく
            // });

            this.fileData.files.forEach((file, index) => {
                formData.append("files[" + index + "]", file); // formDataに追加していく
            });

            formData.append("hodna", "text");
            // console.log(...formData);

            axios.post(`/api/image`, formData, config).then((rs) => {
                console.log(rs.data);
                this.load();
            });
        },
    },
};
</script>

<style></style>
