const app=Vue.createApp({
    data(){
        return{
            counter:0,
            name:''
        };
    },
    methods:{
        setName(event){
            this.name=event.target.value;

        },
        add(num){
            return this.counter=this.counter + num;
        },
        reduce(num){
            return this.counter=this.counter - num;
        },
        resetInput(){
            return this.name='';
        },
        outputFullName(){
            if (this.name==''){
                return '';
            }
            return this.name+' '+'jankar';
        }
    }
}).mount('#events')
