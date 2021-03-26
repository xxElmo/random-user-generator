const app = Vue.createApp({
    data() {
        return{
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
            const ruser = results[0]
            this.firstName = ruser.name.first;
            this.lastName = ruser.name.last;
            this.email = ruser.email;
            this.gender = ruser.gender;
            this.picture = ruser.picture.large;
        }
    }
});

app.mount('#app')