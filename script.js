const app= new Vue({
    el:'#app',
    data:{
        mails:[]
    },

    mounted(){
        this.printemails()
    },

    methods:{
        printemails(){
            for(let i=0;  i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(risposta =>{
                    this.mails.push(risposta.data.response);
                    console.log(this.mails);
                })
                //console.log('ciao');
            }
        }
        
    }
})