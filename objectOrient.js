// Procedural

var width = 10
var height = 20

function calculateArea(width, height){
    return width * height
}

function calculateRange(width, height){
    return 2 * (width + height)
}

var area = calculateArea(width, height)
console.log(area)

var range = calculateRange(width, height)
console.log(range)



// Object Oriented

var ract = {
    width: 10,
    height: 20,

    calculateArea: function(){
        return this.width * this.height
    },
    calculateRange: function(){
        return 2 * (this.width + this.height)
    }
}

var area = ract.calculateArea()
console.log(area)

var range = ract.calculateRange()
console.log(range)