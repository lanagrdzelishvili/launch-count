const d = document.getElementById('days')
const h = document.getElementById('hours')
const m = document.getElementById('minutes')
const s = document.getElementById('seconds')

const set = setInterval(() => {

    let start=new Data('may 25, 2023 00:00:01').getTime()
    let now=new Data().getTime()
    let time=start-now

    let days = Math.floor((time / (1000 * 60 * 60 * 24)));
    let hours = Math.floor((time % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((time % (1000 * 60)) / 1000);

    d.innerHTML = days;
    h.innerHTML = hours
    m.innerHTML = mins
    s.innerHTML = secs
    if(time < 0){
        clearInterval(set);
        d.innerHTML = 0;
        h.innerHTML = 0;
        m.innerHTML = 0;
        s.innerHTML = 0;
    }
})