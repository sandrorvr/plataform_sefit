//'http://localhost:3000/esc'
class ControllerStateInit{
    constructor(date = '08-04-2023', stateInit='fiveDefault'){
        //this.urlAPI = `http://127.0.0.1:8000/api/v1/operacao/${date}`;
        this.urlAPI = 'http://localhost:3000/esc';
        this.date = date
    }

    async getData() {
        const res = await fetch(this.urlAPI);
        const newData = await res.json();
        const area = await newData.filter((e)=>this.date === e.date);
        return area[0].areas;
    }


    

}

export default ControllerStateInit;