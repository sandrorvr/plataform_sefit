class ControllerStateInit{
    constructor(){
    }

    async getData(url) {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    async createAreas(date = '2023-05-20'){
        const url = `http://127.0.0.1:8000/api/v1/operacao/${date}`
        const data = await this.getData(url)
        const areas = []
        for(let id_area of data.map((el) => el.area.id)){
            const info_only_area = data.filter((el)=>el.area.id === id_area)
            const info_area = info_only_area[0]
            const area = {
                "id": info_area['area'].id,
                "area": info_area['area'].area,
                "sup": info_area['area'].sup,
                "desc": info_area['area'].desc,
                "servidores": info_only_area.map((el)=>{
                    return {
                        "id": el['road_map'],
                        "roteiro": el['road_map'],
                        "entrada": el['h_in'],
                        "saida": el['h_out'],
                        "funcao": el['function'],
                        "local": el['local'].name,
                        "equipamento": el['eqp'],
                        "guarnicao": el['servidor'].name
                    }
                })
            }
            areas.push(area)
        }
        return areas
    }


    async createWorkers(){
        const url = `http://127.0.0.1:8000/api/v1/servidores/`
        const data = await this.getData(url)
        return data.map((servidor)=>{
            return {
                name: servidor.name,
                matricula: servidor.mat
            }
        })
    }
}

export default ControllerStateInit;