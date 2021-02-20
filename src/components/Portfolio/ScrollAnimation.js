class ScrollAnimation{
    constructor(scrolledContent){
        this.content = scrolledContent;
        this.contentHeight = this.content.getBoundingClientRect().height - 400;
        this.targetPosition = 0;
        this.currPosition = 0;
        this.time = new Date().getTime();

        this.initEvent();

        this.animate = this.animate.bind(this);
        requestAnimationFrame(this.animate);
        return this;
    }

    get scrollPosition(){
        return this.currPosition;
    }

    initEvent(){
        window.addEventListener('mousewheel', (e) => {
            this.targetPosition -= e.deltaY;
        });
        window.addEventListener('keydown', (e) => {
            if(e.key === 'ArrowDown'){
                this.targetPosition -= 40;
            } else if(e.key === 'ArrowUp'){
                this.targetPosition += 40;
            } else if(e.key === 'Tab'){
                this.targetPosition -= (window.innerHeight / 1.66);
                console.log(this.targetPosition);
            }
        });
    }

    animate(){
        const currTime = new Date().getTime();
        const distance = this.targetPosition - this.currPosition;
        if(Math.abs(distance) > 0 && Math.abs(currTime - this.time) > 10){
            if(this.currPosition + distance * 0.1 > 0){
                this.currPosition = 0;
                this.targetPosition = 0;
            } else if(this.currPosition + distance * 0.1 < -this.contentHeight){
                this.currPosition = -this.contentHeight;
                this.targetPosition = -this.contentHeight;
            } else {
                this.currPosition += distance * 0.1;
            }
            this.content.style.transform = `translateY(${this.currPosition}px)`;
            this.time = currTime;
        }
        requestAnimationFrame(this.animate);
    }
}

export default ScrollAnimation;