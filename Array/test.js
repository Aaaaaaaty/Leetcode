function Parent() {
    this.a = 1;
    this.b = [1, 2, this.a];
}
function Child() {
    this.a = 2;
    this.show = function() {
        this.a = 10
    }
    
}
Child.prototype = new Parent(); 
var parent = new Parent();
var child1 = new Child();
child1.a = 11;
child1.show()
console.log(parent.b)