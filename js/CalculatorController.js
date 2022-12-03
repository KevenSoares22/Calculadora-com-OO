class CalculatorController{
    constructor(){
        this._hourEl = document.querySelector('#hour')
        this._dateEl = document.querySelector('#date')
        this._screenEl = document.querySelector('#result')
        this.displayHour
        this.displayDate
        this.currentTime
        this.initialize()
        this.getButtons()
    }


    initialize(){
        this.calculateTime()
        setInterval(()=>{this.calculateTime()}, 1000)
        



    














    }


    addEventListenerAll(element, events, functn){
        events.split(', ','').forEach(sinEvent => {
            element.addEventListener(sinEvent, functn)



        })



    }    
    
    startButton(button){

        switch (button) {

            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            
            break;

            
            case 'soma':
            case 'subtracao':
            case 'divisao':
            case 'multiplicacao':
            case 'porcento':
            case 'igual':
            case 'ponto':
            case 'ac':
            case 'ce':
            break;                                                           


        
            default:
                break;
        }



    }
    getButtons(){
        let btns = document.querySelectorAll('.line > button')
        btns.forEach(btn =>{
            let btnData = btn.className.replace("button-", "")
            this.addEventListenerAll(btn, "click, drag", ()=>{
                this.startButton(btnData)



            })
        })


    }




    calculateTime(){
        this.displayHour = this.currentTime.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})
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
    
    get displayCalc(){
        return this._screenEl.innerHTML

    }
    set displayCalc(value){
        this._screenEl.innerHTML = value

    }

}