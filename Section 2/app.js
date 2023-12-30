const vm = Vue.createApp({
    data()  {
        return {
            firstName : 'John',
            middleName : '',
            lastName : 'Doe',
            url : 'https://www.google.com.pk',
            raw_url : '<a href="https://www.google.com.pk" target="_blank">Google</a>',
            age : 20,
        }
    },
    methods : {
      increment() {
          this.age++;
      },
      updateLastName(msg, event) {
          //console.log(msg);
          this.lastName = event.target.value;
      },
      updateMiddleName(event) {
          this.middleName = event.target.value;
      }
    },
   computed : {
       fullName() {
           console.log('fullname method computed property is called');
           return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
       },
   },
   watch : {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20;
            }, 3000);
        }
   }
}).mount('#app');

/*
setTimeout(() => {
    vm.firstName = 'Bob';  //with proxy
    //vm.$data.firstName = 'Bob Smith'; //without proxy
}, 2000);*/
