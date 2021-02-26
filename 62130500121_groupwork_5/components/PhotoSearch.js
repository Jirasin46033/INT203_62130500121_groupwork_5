app.component('photo-search', {
    props: {
        search:Boolean,
        sField:String,
      },
      emits: ['update:sField'],
      template:
      /*html*/  
      `
      <div class="max-w-2xl mx-auto p-8">
          <span v-if="search" @click="searchStart">
            <i class="fas fa-2x fa-search text-black hover:text-gray-50 transition duration-500 "></i>
          </span>
          <div v-else>
            <div class="relative text-gray-600">
              <input :value="sField" @input="$emit('update:sField',$event.target.value)" type="text" name="serch" placeholder="Search"
                class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
              <button @click="searchEnd"
                class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded mt-2">Cancel
              </button>
            </div>
          </div>
        </div>
      `,
      data() {
          return {
              
          }
      },
      methods: {
        searchStart(){
          this.$emit('searchStart')
        },
    
        searchEnd(){
          this.$emit('searchEnd')
        }
      }
});