import data from "../data/data.json"

export const traerDatos = ()=>{
    return new Promise ((res)=>{
        setTimeout(()=>{
            res(data)
        },1000)
    })
}