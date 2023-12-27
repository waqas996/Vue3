const vm = Vue.createApp({
    data()  {
        return {
            firstName : 'John',
            lastName : 'Doe',
            url : 'https://www.google.com.pk',
            raw_url : '<a href="https://www.google.com.pk" target="_blank">Google</a>',
            age : 20,
        }
    },
    methods : {
      fullName() {
          return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
      increment() {
          this.age++;
      },
      updateLastName(msg, event) {
          event.preventDefault();
          console.log(msg);
          this.lastName = event.target.value;
      }
    },
}).mount('#app');

/*
setTimeout(() => {
    vm.firstName = 'Bob';  //with proxy
    //vm.$data.firstName = 'Bob Smith'; //without proxy
}, 2000);*/
