
import {useState} from "react"
import {useEffect} from "react"

const UseItems = () => {
 
    const [items, setItems]= useState([])

    useEffect (() => {
        fetch('https://red-onion-backend.herokuapp.com/foods')

    .then(res=> res.json())
    .then(data=> setItems(data))


    },[])



    return[items,setItems]
};

export default UseItems;