import { createContext,useState,useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";

const CrudContext = createContext()

const CrudProvider = ({children}) =>{
    const [db, setDb] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoagin] = useState(false)
    

    let api = helpHttp();
    let url = "http://localhost:5000/santos";

    useEffect(() => {
        setLoagin(true)
        helpHttp().get(url).then(res=>{
        if(!res.error){
            setDb(res)
            setError(null)
        }else{
            setDb(null)
            setError(res)
        }
        setLoagin(false)
        })

    }, [url])
  
    //funcion para crear registro
    const createData = (data)=>{
        data.id = Date.now();
        let options = {body:data,headers:{"content-type":"application/json"}}
        api.post(url,options).then(res=>{
        console.log(res)
        if(!res.error){
            setDb([...db,res])
        }else{
            setError(res)
        }
        setLoagin(false)
        })
        setDb(
        [...db,data]
        )
    }
    //funcion para actualizar registro
    const updateData = (data)=>{
        let endpoint = `${url}/${data.id}`
        let options = {body:data,headers:{"content-type":"application/json"}}
        api.put(endpoint,options).then(res=>{
        if(!res.error){
            let newData = db.map(el=>(el.id===data.id ? data: el))
            setDb(newData)
        }else{
            setError(res)
        }
        })
    }
    //funcion para borrar un registro
    const deleteData = (id)=>{
        let isDelete = window.confirm(`Estas seguro de eliminar el registro con el id ${id}?`)
        if(isDelete){
        let endpoint = `${url}/${id}`
        let options = {headers:{"content-type":"application/json"}}
        api.del(endpoint,options).then(res=>{
            if(!res.error){
            let newData = db.filter(el=>(el.id!==id))
            setDb(newData)
            }else{
            setError(res)
            }
        })
        }else{ return}
    }

    const data={createData,updateData,dataToEdit,setDataToEdit,loading,error,db,deleteData}
    return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>
}

export {CrudProvider}
export default CrudContext