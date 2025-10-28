class Store{

    constructor(){}
  
    getStoredDates(){
        if(!localStorage.getItem("myDates")){
            localStorage.setItem("myDates", JSON.stringify([]));
        }
        return JSON.parse(localStorage.getItem("myDates"));
    }

    clearStoredDates(){
        localStorage.removeItem("myDates");
    }

    addDate(date){
        const dates = this.getStoredDates(); 
        dates.push(date);
        localStorage.setItem("myDates", JSON.stringify(dates));
    }
}


export default Store;

