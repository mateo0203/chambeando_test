import React,{useState} from 'react';
import Axios from 'axios';
import api from '../../API/api';
import { useParams } from 'react-router';
import Button from 'react-bootstrap/Button';

const AddReview = () => {
    const [review,setReview] = useState("")
    const [rating,setRating] = useState("Rating")
    const [status, setStatus] = useState(1)
    const {id} = useParams()


    const handleSubmit = async () => {
        try{
        const response = await api.post("reviews/"+id,{
            "trabajador_id":id,
            "user_id": ":(",
            "review": review,
            "review_rating": rating
        })
    }
    catch(err){
        console.log(err)
    }
    }

    const handleRating = (e) => {
        setRating(e.target.value)
    }

    const handleReview = (e) => {
        setReview(e.target.value)
    }

    return(
        <div className='reseñas'>
            {
                status === 1 ?
                    <div className="reseña">
                        <form >
                            <label htmlFor="reseña">Reseña:</label>
                            <input type="text" required name='reseña' onChange={handleReview} id='reseña'/>
                            <Button  variant="primary" size="lg">Crear reseña</Button>
                        </form>
                    </div>
                    :
                    <div className="valoracion">
                        <form>
                            <label htmlFor="valoracion">Valoracion:</label>
                            <div className="options">
                                <select name="Rating" value={rating} onChange={handleRating}>
                                    <option disabled>valoracion</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <button>Agrega puntuación</button>
                            </div>
                            <button>Volver a Inicio</button>
                        </form>
                    </div>
            }
        </div>
    )
}

export default AddReview;