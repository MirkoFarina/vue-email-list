const { createApp } = Vue;

createApp ({
    data(){
        return {
            emailGenerated: [],
            nEmail: 10
        }
    },
    methods: {
        getApi(){
            for(let i = 0; i < this.nEmail; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(email => {
                    this.emailGenerated.push(email.data.response);
                })
            }
        }
    }
}).mount('#app')

