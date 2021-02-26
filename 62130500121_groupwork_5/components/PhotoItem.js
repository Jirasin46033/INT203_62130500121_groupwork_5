app.component('photo-item', {
    props: {
        picture:Object,
    },
    template:
    /*html*/
    `
    <div class="group relative">
        <img class="w-full md:w-72 block rounded" v-bind:src="picture.path" />

        
        <div
            class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">

            <!-- ปุ่มหัวใจ -->
            <button
                class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <i v-show="!picture.heart "
                    class="far fa-2x fa-heart text-black hover:text-red-600 transition duration-500 "
                        @click="like(picture.member)"></i>
                <i v-show="picture.heart " class="fas fa-2x fa-heart text-red-500 transition duration-500 "
                        @click="like(picture.member)"></i>
            </button>
 
        </div>
    </div>

    <!-- text ใน card -->
    <div class="p-5">
        <h3 class="text-white text-lg">Red Velvet</h3>
        <p class="text-gray-400">{{picture.member}}</p>
    </div>
  
    `,
    data() {
        return {}
    },
    methods: {
        like(text){
            this.$emit('likePic',text)
        }
    }
});