// CONSEGNA
Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// faccio attivare l'estensione di vuejs
Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
            todos: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Portare fuori il cane',
                    done: true
                },
                {
                    text: 'Fai la spesa per il cane',
                    done: true
                },
                
            ]
        },
        methods:{

        }
    }
)