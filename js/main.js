const settings = {
    el: '#app', 
    data: {
       nome: '',
       cognome: '',
       colore: '',
       img: "https://picsum.photos/200/200",
       alt: "immagine random presa da Lorem Picsum"
    }
 };
 
const app = new Vue(settings); //da creare sempre per poter utilizzare vue