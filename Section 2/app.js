const vm = Vue.createApp({
    data()  {
        return {
            firstName : 'John',
            lastName : 'Doe',
        }
    }
}).mount('#app');

setTimeout(() => {
    vm.firstName = 'Bob';  //with proxy
    //vm.$data.firstName = 'Bob Smith'; //without proxy
}, 2000);