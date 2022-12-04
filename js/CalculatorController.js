class CalculatorController{
    constructor(){
        this._hourEl = document.querySelector('#hour')
        this._dateEl = document.querySelector('#date')
        this._screenEl = document.querySelector('#result')

        this._calcElements = []
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
        events.split(', ').forEach(sinEvent => {
            element.addEventListener(sinEvent, functn)



        })



    }    

    getLastElement(){
        return this._calcElements[this._calcElements.length - 1]



    }

    setLastElement(value){
        this._calcElements[this._calcElements.length - 1] = value
        console.log(this._calcElements)


    }
    addElement(element){
        if (isNaN(element)) {
            if (isNaN(this.getLastElement())) {
                this.setLastElement(element)
            } else {
                this._calcElements.push(element)
                console.log(this._calcElements)



            }




        } else {
            if (isNaN(this.getLastElement())) {
                this._calcElements.push(parseInt(element))
                console.log(this._calcElements)

            } else {


                this.setLastElement(parseInt(this.getLastElement().toString() + element.toString()))
                
                
                
                
            
            }
        }


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
                this.addElement(button)
            break;

            case 'soma':
                this.addElement('+')

            break;                                              
            case 'subtracao':
                this.addElement('-')

            break;
        
            default:
                break;
        }



    }
    getButtons(){
        let btns = document.querySelectorAll('.line > button')
        btns.forEach(btn =>{
            let btnData = btn.className.replace("button-", "")

                 


            this.addEventListenerAll(btn, "click, drag", e=>{
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