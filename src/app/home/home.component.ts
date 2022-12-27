import { Component } from '@angular/core';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user;
    cinemas = [{
        image: 'https://images.theconversation.com/files/501182/original/file-20221214-14389-tahjkr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip',
        name: 'Avatar'
    },{
        image: 'https://images.theconversation.com/files/501182/original/file-20221214-14389-tahjkr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip',
        name: 'Quiet'
    },{
        image: 'https://images.theconversation.com/files/501182/original/file-20221214-14389-tahjkr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip',
        name: 'Avengers'
    },{
        image: 'https://images.theconversation.com/files/501182/original/file-20221214-14389-tahjkr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip',
        name: 'Fall'
    },{
        image: 'https://images.theconversation.com/files/501182/original/file-20221214-14389-tahjkr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip',
        name: 'Interstellar'
    },{
        image: 'https://images.theconversation.com/files/501182/original/file-20221214-14389-tahjkr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip',
        name: 'Inception'
    }]
    cinemaFilteredList = this.cinemas
    constructor() {
    }

    search(evn) {
        let text = evn.target.value
        if(text == '') {
            this.cinemaFilteredList = this.cinemas
        } else {
            this.cinemaFilteredList = this.cinemas.filter((c) => c.name.toLowerCase().includes(text.toLowerCase()))
        }
    }
}