
export  const getAll = (req,res)=> {
    res.send("List of product...")

}
export const getID =( req,res)=>{
    res.send(`${req.params.id} is found....`)
}
export const update = (req,res)=>{
    res.send('produst is updated...')
}
export const create = (req,res)=>{
    res.send('The product has been created...')
}
export const distoy = (req,res) =>{
    res.send("Product his been deleted.....")
}