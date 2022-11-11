// **Descrizione:**
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// **Bonus**
// Creare un loading e far comparire gli indirizzi email solamente quando sono stati TUTTI generati.


const {createApp} = Vue;





createApp({

  data(){

    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailAddresses: []
    }
  },

  methods: {

    getApi(){
      axios.get(this.apiUrl)
      .then( risultato => {
        this.emailAddresses.push(risultato.data.response) 
      })
      .catch( error => console.log(error))
    }
  },

  mounted(){
    for(let i = 0; i < 11; i++){
      this.getApi()
    }
  }
}).mount("#app")


