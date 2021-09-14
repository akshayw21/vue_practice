// Vue.createApp({
//     data(){
//         return{
//             goals:[],
//             enteredValue:''
//         };
//     },
//     methods:{
//         addGoal(){
//             this.goals.push(this.enteredValue);
//             this.enteredValue='';

//         }
//     }
// }).mount('#app') 


    Vue.createApp({
        data(){
            return{
                coursegoal:'finish the course and leran vue.',
                coursegoalA:'<h2>finish the course and leran vue.</h2>',
                coursegoalB:'finish the leran vue.',

                vuelink:'https://www.google.com'
            };
        },
        methods:{
            outputGoal(){
                const randomnumber=Math.random();
                if (randomnumber<0.5){
                    return this.coursegoalA;
                }else{
                    return this.coursegoalB;
                }
            }
        }
    }).mount('#user-goal')



// const buttonEl=document.querySelector('button');
// const inputEl=document.querySelector('input');
// const listEl=document.querySelector('ul');


// function addGoal(){
//     const enteredValue=inputEl.value;
//     const listItemEl=document.createElement('li');

//     listItemEl.textContent=enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value='';
// }

// buttonEl.addEventListener('click',addGoal);


