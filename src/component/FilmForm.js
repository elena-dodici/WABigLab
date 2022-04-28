import {Button, Form,Row,Col} from 'react-bootstrap';
import { useState } from 'react';
import dayjs from 'dayjs';

function FilmForm(props){
    
    const [title,setTitle] = useState(props.film? props.film.title:'');
    const [fav,setFav] = useState(props.film? props.film.favorite:false);
   
    // const [date,setDate] = useState(dayjs());
    const [date,setDate] = useState(props.film.date? props.film.date.format('YYYY-MM-DD'):undefined);
    const [rating,setRating] = useState(props.film.rating? props.film.rating:0);
    const handleSubmit=(event)=>{
        event.preventDefault();
        let film={}
        if(date===undefined){
            film = {title:title,favorite:fav,rating:rating}; 
        }else{
            film = {title:title,favorite:fav,date:dayjs(date),rating:rating};
        }
        
        if(props.film === undefined)
            props.addFilm(film);
        else
            props.editFilm(film);
    }
    return(
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3 align-items-center" >
                <Form.Group as={Col} >
                    {/* 要加个验证！不能添加重复的title，并且edit的时候不能修改这个位置！ */}
                    <Form.Label column  >Film Title</Form.Label>
                    <Form.Control type="text" required={true} value={title} placeholder="Film Title" onChange={event => setTitle(event.target.value)}/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label column >Date</Form.Label>
                    {/* <Form.Control type="date"   value={()=>{if(date==="") return date; else return date.format('YYYY-MM-DD');}} onChange={event => setDate(event.target.value)}/> */}
                    <Form.Control type="date"   value={date} onChange={event => setDate(event.target.value)}/>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label column>Rating</Form.Label>
                    <Form.Control type="number" min={0} max={5} value={rating} onChange={event => setRating(event.target.value)}/>
                </Form.Group>
                <Form.Group className='mb-3' as={Col}>
                    <Col sm={3}>
                        <Form.Check  type="checkbox" label="Favorite" checked={fav} onChange={event => setFav(!fav)}/>     
                    </Col>
                </Form.Group>
            </Row>
            <Form.Group className='mb-3'>
                <Button variant='primary' type='submit' >Save</Button> &nbsp;
                <Button variant='danger' onClick={props.cancel}>cancel</Button>
            </Form.Group>
        </Form>
    )
}
export{FilmForm}