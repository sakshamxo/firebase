import React from 'react'
import { getFirestore,collection, addDoc,getDocs,doc,getDoc,query ,where,setDoc,deleteDoc} from "firebase/firestore";
import app from './firebase/config';
import { async } from '@firebase/util';

const Cloudstore =  () => {
    const db = getFirestore(app)
    const schema = collection(db,'users')
    const createuser =  async ()=>{
        const docref = await addDoc(schema,{
            name : 'Anney',
            email : "example@anney.com"
        });
        console.log(docref.id)
        .catch((err)=>{
            console.log(err)
        })
    }
    const readuser = async ()=>{
        try {
            const querySnapshot = await getDocs(schema)
            querySnapshot.forEach((doc)=>{
                console.log({id:doc.id,...doc.data()})
            })
        } catch (err) {
            console.log(err)
        }
    }
    const readsingle = async ()=>{
        try {
            const docref = await doc(schema,'1vMEynWPEE9T6G6DBaNX')
            const docsnap = await getDoc(docref)
            console.log(docsnap.data())
          
        } catch (err) {
            console.log(err)
        }
    }
    const updateuser = async ()=>{
        // const docref = await doc(schema,'1vMEynWPEE9T6G6DBaNX')
        // const docsnap = await getDoc(docref)
        // console.log(docsnap.data())
        // const docref = await doc(schema,"name")
        // await setDoc(doc(docref,'john'),{
        //     name:"johnn",
        //     email : "johnndoe@example.com"
        // })
        try {
           const docref = await doc(schema,"fefDsLNldPhMcINsRpAa") 
         await setDoc(docref,{
            name: "John doe",
            email: "johndoe@example.com"
         })
        console.log("user updated")
        } catch (err) {
            console.log(err)
        }
    }
    const deleteuser = async ()=>{
        try {
            const docref = await doc(schema,"fefDsLNldPhMcINsRpAa") 
          await deleteDoc(docref,{
             name: "John doe",
             email: "johndoe@example.com"
          })
         console.log("user deleted")
         } catch (err) {
             console.log(err)
         } 
    }

  return (
    <div><button className='btn btn-dark' onClick={createuser}  >create</button>
        <button className='ms-3 btn btn-primary' onClick={createuser}  >Read</button>
        <button className='ms-3 btn btn-primary' onClick={readsingle}  >find</button>
        <button className='ms-3 btn btn-primary' onClick={updateuser}  >update</button>
        <button className='ms-3 btn btn-primary' onClick={deleteuser}  >delete</button>
    </div>
  )
}

export default Cloudstore