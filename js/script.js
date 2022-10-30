/*
Rifare l'esercizio della to do list argomento dell to-do list a piacere :faccia_che_festeggia:.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
x MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
x MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
x MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo, 
che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
x 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
x 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente 
    (se done era uguale a false, impostare true e viceversa)

*/


const {createApp} = Vue;
// Creo l'app
const app = createApp({
    // inserisco i data
    data(){
        return {
            // creo newTask che inizializzo vuota
            newTask: '',
            // creo hasError che setto false, e nel momento dell'errore poasserà a true
            // mostrando il div dell'errore
            hasError: false,
            //Creo l'array della to do list
            todoList: [
                { //primo oggetto
                    text: 'Portare il gatto dal veterinario',
                    done: false,
                },
                { //secondo oggetto
                    text: 'Fare la spesa',
                    done: true,
                },
                { //terzo oggetto
                    text: 'Andare dal dottore',
                    done: false,
                },
                { //quarto oggetto
                    text: 'Appuntamento con gli amici alle 21:00',
                    done: false,
                }
            ]
        }
    },
    //creo i methods, dove inserisco le funzioni
    methods: {
        //creo la funzione per aggiungere il nuovo task
        addTask(){
            if(this.newTask.length >= 5){
                console.log(this.newTask.length);
                //poi nella to do list aggiungo con unshift(verrà visualizzato
                //in alto a tutto) la task che inserirà l'utente
                this.todoList.unshift({text: this.newTask, done: false});
                //hasError rimane false
                this.hasError = false;
            }else{
                //altrimenti  hasError switcha a true e visualizza il div d'errore
                this.hasError = true;
            }
            //e poi svuoto il campo di input
            this.newTask= '';
        },
        //Creo la funzione che al click sul circle-xmark, cancelli la task
        //e per farlo ho bisogno del suo indice, altrimenti non cancellerebbe
        //come dovrebbe
        removeTask(ind){
            //dalla todoList cancella quell'indice, per uno solo
            this.todoList.splice(ind, 1);
        },
        //alla riga 38 del DOM aggiungo la funzione changeClick, che al cambio mdel valore
        //imposta la classe del CSS
        changeClick(todo){
            todo.done = !todo.done;
        }
    }
//monto tutto sul div #app
}).mount('#app')