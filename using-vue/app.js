Vue.createApp({
    data(){
        return{
            inputValue: '',
            liArr: [],
        };
    },
    methods: {
        clickBtn(){
            this.liArr.push(this.inputValue);
            this.inputValue = '';
        }
    }
}).mount('#app');