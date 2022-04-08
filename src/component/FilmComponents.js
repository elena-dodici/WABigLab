import 'bootstrap/dist/css/bootstrap.min.css'
import {  Col, Table } from "react-bootstrap";

function FilmLists(props){
    return(
        <Col>
            <FilmTable films={props.films}></FilmTable>
        </Col>
    );
}

function FilmTable(props) {
    return(
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorite</th>
            <th>Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
             {/* films = {xxxx} 前面的films是属性下一个调用的props科通过 '.films'获得，props.films返回的是{xxx}的值 */}
          {
            props.films.map((f) => <FilmRow film={f} key={f.title}/>)
          }
        </tbody>
      </Table>
    );
  }
  
function FilmRow(props){
    return(
        // <tr><FilmData film={props.film} /><FilmAction /></tr>
        <tr><FilmData film={props.film} /></tr>
    );
}
function FilmData(props){
    return(
        <>
        {/* 必须有个single root  */}
            <td>{props.film.title}</td>
            <td>{String(props.film.favorite)}</td>
            {/* <td>{(()=>{

            })() }</td> */}

            <td>{props.film.date !=undefined && 
            props.film.date.format('YYYY-MM-DD')}</td>
            <td>{props.film.rating}</td>
        </>
    );
}
// function FilmAction(){
//     return <td><Button variant='danger'><i className='bi bi-trash2'>X</i></Button></td>
// }

// export写文件最后  只有FilmLists才需要再文件外使用 
 export {FilmLists};