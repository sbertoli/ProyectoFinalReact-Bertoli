import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore";

import ItemDetalle from "./ItemDetalle";
import { useParams } from "react-router-dom";
import { db } from "../firebase/data";


const PaginaDetalle = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id; 
    console.log(id)

    useEffect(() => {
       const docRef = doc(db, "productos", id);
       getDoc(docRef)
       .then((resp) => {
        setItem(
            {...resp.data(), id: resp.id }
        )
       })
    }, [id])

    return (
        <div>

            {item && <ItemDetalle item={item} />}


        </div>
    )
}

export default PaginaDetalle