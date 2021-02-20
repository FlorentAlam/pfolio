class CursorAnimation{
    constructor(cursor){
        this.cursor = cursor;
        this.targetPosition = {x: 0, y: 0};
        this.currPosition = {x: 0, y: 0};
        this.time = new Date().getTime();
        // this.distance = {x: 0, y: 0};

        this.initEvent();

        this.animate = this.animate.bind(this);
        requestAnimationFrame(this.animate);
    }

    initEvent(){
        window.addEventListener('mousemove', (e) => {
            this.targetPosition = {x: e.clientX, y: e.clientY};
        });
    }

    animate(){
        const currTime = new Date().getTime();
        const distance = {
            x: this.targetPosition.x - this.currPosition.x,
            y: this.targetPosition.y - this.currPosition.y
        }
        if(Math.abs(distance.x) > 0 && Math.abs(distance.y) > 0 && Math.abs(currTime - this.time) > 10){
            this.currPosition = {x: this.currPosition.x + distance.x * 0.2, y: this.currPosition.y + distance.y * 0.2};
            this.cursor.style.transform = `translateX(${this.currPosition.x - 20}px) translateY(${this.currPosition.y - 20}px)`;
            this.time = currTime;
        }
        requestAnimationFrame(this.animate);
    }
}

export default CursorAnimation;