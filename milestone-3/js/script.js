// CONSEGNA
Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante,
// il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto
// alla lista dei todo esistenti.

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
            deleteTodo: function(index) {
                this.todos.splice(index, 1)
            }

        }
    }
)