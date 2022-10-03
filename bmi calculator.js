"use strict";


const mark={
        name:'mark miller',
        mass:78,
        height:1.69,
        calcBmi:function(){ return this.mass/this.height**2}      
}
const john={
        name:'john smith',
        mass:92,
        height:1.95,
        calcBmi:function(){ return this.mass/this.height**2}      
}
mark.bmi=mark.calcBmi()
john.bmi=john.calcBmi()

mark.bmi > john.bmi ? console.log(`${mark.name}  (${mark.bmi}) bmi is higher than ${john.name +' '+'('+john.bmi+')'} ! `):console.log(`${john.name} (${mark.bmi}) bmi  is higher than ${mark.name +' '+john.bmi} ! `)

        



