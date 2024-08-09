import data from "../data/data.json"

export const traerDatos = ()=>{
    return new Promise ((res)=>{
        setTimeout(()=>{
            res(data)
        },1000)
    })
}

export const traerItemPorId = (idItem)=> {
    
    const item = data.find((elem)=>elem.id === idItem)
    
    return new Promise((res)=>{
        setTimeout(()=>{
            res(item)
        },2000)
    })
}