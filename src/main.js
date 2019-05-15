import "./css/index.css"
import "./css/index.less"
import "./css/index.scss"
import "bootstrap/dist/css/bootstrap.css"

class Person {
    static info = { name: "张三", age: 23 }
}
console.log(Person.info);

// import Vue from ""
import login from "./components/login.vue"


// var Vm = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     },
//     render: c => c(login)
// })