// MILESTONE 1
// 1) Replica della grafica con la possibilità di avere messaggi 
//    scritti dall’utente (verdi) e dall’interlocutore (bianco) 
//    assegnando due classi CSS diverse.
// 2) Visualizzazione dinamica della lista contatti: tramite la 
//    direttiva v-for, visualizzare nome e immagine di ogni contatto.
// MILESTONE 2
// 3) Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, 
//    visualizzare tutti i messaggi relativi al contatto attivo  
//    all’interno del pannello della conversazione.
// 4) Click sul contatto mostra la conversazione del contatto cliccato.
// MILESTONE 3
// 5) Aggiunta di un messaggio: l’utente scrive un testo nella parte 
//    bassa e digitando “enter” il testo viene aggiunto al thread
//    sopra, come messaggio verde.
// 6) Risposta dall’interlocutore: ad ogni inserimento di un messaggio,
//    l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// MILESTONE 4
// 7) Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono 
//    visualizzati solo i contatti il cui nome contiene le lettere inserite
//    (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e 
//    Martina) 
/////////////////////////////////////////////////////////////////////

// Istanza di VueJs
Vue.config.devtools = true;
new Vue({
    el: "#root",
    // DATA
    data: {
        index: 0,
        // invio messaggio
        myMessage: "",
        // filtro
        myFilter: "",
        // array principale
        contacts: [
            // Michele (0)
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            // Fabio (1)
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            // Samuele (2)
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            // Luisa (3)
            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    // METHODS
    methods: {
        // invia un messaggio
        sendMyMessage(index) {
            let timestamp = `${new Date().toLocaleDateString().substr(0, 10)} ${new Date().toLocaleTimeString()}`
            this.contacts[index].messages.push({
                date: timestamp,
                text: this.myMessage,
                status: 'sent'
            }),
                // risposta automatica dopo l'invio del messaggio
                setTimeout(() => {
                    let timestamp = `${new Date().toLocaleDateString().substr(0, 10)} ${new Date().toLocaleTimeString()}`
                    this.contacts[index].messages.push({
                        date: timestamp,
                        text: 'ok',
                        status: 'received'
                    });
                }, 2000);
            this.myMessage = "";
        },
        // filtro lista chat
        onChatFilter() {
            let contactsOnFilter = [];
            let wordToFilter = false;
            this.contacts.forEach((element, i) => {
                let wordOnFilter = element.name.toLowerCase();
                if (wordOnFilter.includes(this.myFilter.toLowerCase())) {
                    wordToFilter = true;
                    contactsOnFilter.push(this.contacts[i]);
                };
            });
            return contactsOnFilter;
        }
    }
});