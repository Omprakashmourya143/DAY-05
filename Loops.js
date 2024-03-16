// my_resume in JSON Format.

let my_resume = [
{
  "name": "OMPRAKASH",
  "email": "omprakash41@gamil.com",
},
{               
  "name": "JAIPRAKASH",
  "email": "jaiprakash41@gamil.com",
},
]

// For Loop.
for ( i=0;i<my_resume.length;i++){           
let obj = my_resume[i];
  console.log(obj.name)
  console.log(obj.email)
}

// // For in Loop.
for (let key in my_resume){                   
  console.log(my_resume[key].name)
  console.log(my_resume[key].email)
}

// // For of Loop.
for (let value of my_resume){                   
  console.log(value.name)
  console.log(value.email)
}

// // forEach Loop
my_resume.forEach((ele)=>{
  console.log(ele.name)
  console.log(ele.email)
})

// Accessing the object inside the array.
console.log(my_resume[0].name)
console.log(my_resume[0].email)
console.log(my_resume[1].name)
console.log(my_resume[1].email)