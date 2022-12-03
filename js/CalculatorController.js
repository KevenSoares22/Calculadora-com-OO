class CalculatorController{
    constructor(){
        this._hourEl = document.querySelector('#hour')
        this._dateEl = document.querySelector('#date')

        this.displayHour
        this.displayDate
        this.currentTime
        this.initialize()

    }


    initialize(){
        this.calculateTime()
        setInterval(()=>{this.calculateTime()}, 1000)




    }
    calculateTime(){
        this.displayHour = this.currentTime.toLocaleTimeString('pt-BR')
        this.displayDate = this.currentTime.toLocaleDateString('pt-BR')


    }
    get currentTime(){
        return new Date()
    }

    get displayHour(){
        return this._hourEl.innerHTML
    }
    set displayHour(hour){
        this._hourEl.innerHTML = hour
    }

    get displayDate(){
        return this._dateEl.innerHTML
    }
    set displayDate(date){
        this._dateEl.innerHTML = date
    }




}