import { useEffect, useState } from "react"
import { pedirItemId } from "../helpers/pedirDatos";
import ItemDetalle from "./ItemDetalle";
import { useParams } from "react-router-dom";


const PaginaDetalle = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id; 
    console.log(id)

    useEffect(() => {
        pedirItemId(Number(id))
            .then((res) => {
                setItem(res);
            })


    }, [id])

    return (
        <div>

            {item && <ItemDetalle item={item} />}


        </div>
    )
}

export default PaginaDetalle