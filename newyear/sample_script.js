const upcomingYear=new Date().getFullYear()+1;
const destinationTime=new Date(""+upcomingYear+"-01-01 23:59:59").getTime()
const yearLoc=document.getElementById("upcomingYear")
yearLoc.textContent=upcomingYear
setInterval(()=>{
    const timer=document.getElementById("timer")
    const currentTime=new Date().getTime()
    const remainingTime=destinationTime-currentTime

    const totalSeconds=parseInt(remainingTime/1000)
    const hrs=parseInt(totalSeconds/60/60)
    const mins=parseInt(parseInt(totalSeconds-hrs*3600)/60)
    const seconds=parseInt(totalSeconds-hrs*3600-mins*60)
    timer.textContent=[hrs,mins>9?mins:`0${mins}`,seconds>9?seconds:`0${seconds}`].join(':')
},1000);