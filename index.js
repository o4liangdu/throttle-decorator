class test {
    @throttle(1000)
    sendReq() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(0)
                resolve(111)
            })
        })
    }
}
const t = new test();

window.addEventListener("scroll", () => {
    t.sendReq()
})

function throttle(delay) {
    return (target, name, descriptor) => {
        let lastTime, timer;
        var oldFunction = descriptor.value;
        descriptor.value = function () {
            let nowTime = +new Date();
            if(lastTime && nowTime-lastTime<delay) {
                if(timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(()=>{
                    oldFunction.apply(this, arguments)
                    lastTime = nowTime
                }, delay)
            } else {
                oldFunction.apply(this, arguments)
                lastTime = nowTime;
            }
        }
        return descriptor;
    }

}
