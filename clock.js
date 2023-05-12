let time = document.querySelector('#time')
function setTime(){
    let d = new Date()
    let hours = d.getHours()
    let mints =  d.getMinutes()
    let sec = d.getSeconds()
    
    if(hours <= 9){
        hours = '0' + hours
    }
    if(mints <= 9){
        mints = '0' + mints
    }
    if(sec <= 9){
        sec = '0' + sec
    }

    let t = hours + ' : ' + mints + ' : ' + sec
    time.innerText = t
}
setInterval(setTime, 1000)