export default [
    {
        title: "How to flat array",
        text: "",
        example: "const flatArray = arr => arr.reduce((a, c) => c instanceof Array ? a.concat(flatArray(c)) : [...a, c], []);"
    },
    {
        title: "Prototype expansion",
        text: "",
        example:
        `Number.prototype.add = function(term) { return term + this }\nNumber.prototype.minus = function(subtrahend) { return this - subtrahend }\nconsole.log((2).add(3).minus(1));`
    }
]