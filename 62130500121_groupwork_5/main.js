const app = Vue.createApp({
    data(){
        return{
            pictures:[
                {path: './images/irene2.jpg', member:'Irene', heart: false, showModal: false},
                {path: './images/seulgi2.jpg', member:'Seulgi', heart: false, showModal: false},
                {path: './images/wendy2.jpg', member:'Wendy', heart: false, showModal: false},
                {path: './images/joy2.jpg', member:'Joy', heart: false, showModal: false},
                {path: './images/yeri2.jpg', member:'Yeri', heart: false, showModal: false}
            ],
            searchPic:'',
            toggleSearch: false,
            
        }
    },
    methods:{
        like(text){
            const index = this.pictures.findIndex(p => p.member == text)
            this.pictures[index].heart = !this.pictures[index].heart
        },
        startSearch(){
            this.toggleSearch =! this.toggleSearch
        },
        cancelSearch(){
            this.toggleSearch =! this.toggleSearch
            this.searchPic = ''
        },
        toggleModel(text){
            const index = this.pictures.findIndex(p => p.member == text)
            this.pictures[index].showModal = !this.pictures[index].showModal;
        }
    },
    computed:{
        countPic(){
            return this.pictures.length
        },
        filteredPhoto(){
            console.log(this.searchPic)
            return this.pictures.filter(pictures => {
                return pictures.member.toLowerCase().includes(this.searchPic.toLowerCase())
            })
        },
        countLike() {
            return this.pictures.filter(p => p.heart).length;
        },
    }
});
