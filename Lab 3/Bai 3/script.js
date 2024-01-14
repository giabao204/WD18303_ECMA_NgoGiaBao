function Entity(name, delay) {
    this.name = name;
    this.delay = delay;
}

Entity.prototype.greet = function () {
    setTimeout(() => {
        console.log('Xin chào, tôi tên là ',this.name, this.delay);
    },1000);
};

let java = new Entity('Java', 500);
let cpp = new Entity('C++', 30);

java.greet();
cpp.greet();
