class Clock {
    constructor({ template }) {
        this.template = template;
        this.timer = null;
    }

    render() {
        const date = new Date();

        const hours = date.getHours().toString().padStart(2, '0');
        const mins = date.getMinutes().toString().padStart(2, '0');
        const secs = date.getSeconds().toString().padStart(2, '0');

        const output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.clear(); // Xóa màn hình console
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000); // Bind this to the render method
    }
}

const clock = new Clock({ template: 'h:m:s' });
clock.start();

