app.component('photo-view', {
    props: {
        picture: Object,
    },
    template:
        /*html*/
        `
        <!-- ปุ่มขยายภาพ -->
    <div>
        <button @click="toggleModel(picture.member)"
            class="ml-5">
            <i
                class="fas fa-2x fa-search text-white hover:text-blue-600 transition duration-500 "></i>
        </button>

        <!-- หลังจากกดปุ่มขยายแล้วจะเด้ง popup -->
        <div v-if="picture.showModal"
            class="bg-black bg-opacity-90 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto  mx-auto">
                <!--content-->
                <div
                    class="border-0 rounded-lg shadow-lg relative flex flex-col w-screen outline-none focus:outline-none">
                    <!--body-->
                    <div class="relative p-6 flex-auto">
                        <img class="w-3/12 block rounded mx-auto" v-bind:src="picture.path" />
                        <div @click="toggleModel(picture.member)"
                            class="flex items-center justify-center p-2">
                            <button
                                class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
                                type="button" style="transition: all .15s ease">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {}
    },
    methods: {
        toggleModel(text){
            this.$emit('togglePic',text)
        }
    }
});