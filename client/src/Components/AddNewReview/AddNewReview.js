import React,{useState} from 'react';
import api from '../../API/api';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { TrabajadoresContext } from '../../Context/Context';
import { useHistory } from 'react-router';

const AddReview = () => {
    const history = useHistory();
    const {userInfo} = useContext(TrabajadoresContext)
    const [review,setReview] = useState("")
    const [rating,setRating] = useState(5   )
    const {id} = useParams()


    const handleSubmit = async (e) => {
        console.log(userInfo)
        e.preventDefault() 
        try{
       const response = await api.post("users/reviews/"+id,{
            "trabajador_id":id,
           "user_id": userInfo.user_id,
            "review": review,
            "rating":rating
        })
        if (response.data.statusRequest == 'ok')
        {
            window.alert('Reseña creada!')
            window.location.reload()
        }
        if (response.data.statusRequest == 'yaTieneReseña')
        {
            window.alert(response.data.reviewInfo)
        }   

    }
    catch(err){
        window.alert('Tienes que iniciar sesión para hacer una reseña')
    }
    }

    const handleRating = (e) => {
        setRating(e.target.value)
    }

    const handleReview = (e) => {
        setReview(e.target.value)
    }

    return(
            <form className="form3">
            <div className='reseñas'>
                    <div className="reseña">
                            <label htmlFor="reseña">Reseña:</label>
                            <textarea required placeholder='escribe tu reseña...' value={review} onChange={handleReview}></textarea>
                    </div>
                    <div className="valoracion">
                            <label htmlFor="valoracion">Valoracion:</label>
                                <select name="Rating" value={rating} onChange={handleRating}>
                                    <option disabled>valoracion</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                    </div>
            </div>             
                                <button className="buttonSubmit" onClick={handleSubmit}>Añade reseña</button>        
             </form>
    )
}

export default AddReview;