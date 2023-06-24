import React from 'react'
import app from './firebase/config'
import { getDownloadURL, getStorage, listAll, ref, uploadBytes ,deleteObject } from "firebase/storage"

const Mediastore = () => {
    const storage = getStorage(app);
    const uploadhandler = async (e)=>{
        let file = e.target.files[0]
        let fileext = file.name.split(".").at(-1);  
        let modifiedname = e.target.name + "-"+ Date.now() +"." +fileext
        // console.log(modifiedname)
        // console.log(fileext)
        const storageref = ref(storage, modifiedname)
        console.log("uploaded")
       const snapshot = await uploadBytes(storageref,file)
       
        if(snapshot){
            const url = await getDownloadURL(storageref)
            console.log(url)
        }
        else{
            console.log("Error in upload")
        }
       
      
    }
    const readfile = async ()=>{
        const stroageref = ref(storage,"")
        const res = await listAll(stroageref)
        res.prefixes.forEach((folderref)=>{
            console.log(folderref)
        })
       res.items.forEach(async(itemref)=>{
        const url = await getDownloadURL(ref(storage,itemref.name))
        console.log(url)
            console.log(itemref.name,itemref.fullPath)
        })
    }
    const deletefile = async ()=>{
        const storageref = ref(storage,"firebase-1674853669079.jpg")
        await deleteObject(storageref)
        console.log("image delete")
    }
  return (
    <div className='container'>
        <h3>Upload media</h3>
        <input type="file"  onChange={uploadhandler} name="firebase" />
        <button onClick={readfile} >Read All</button>
        <button onClick={deletefile} >Delete file</button>
    </div>
  )
}

export default Mediastore