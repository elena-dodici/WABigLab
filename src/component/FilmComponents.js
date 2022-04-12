import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {  Col, Table } from "react-bootstrap";
import { BsStarFill,BsStar,BsPencilSquare,BsTrash } from "react-icons/bs";
import './Film.css';
function FilmLists(props){
    return(
        <Col sm={8} >
          <h1 className='txt-left'>Filter:All</h1>
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
  // 声明一个叫 "count" 的 state 变量
  let [mychecked,setChecked]=React.useState(false);
  const stars= [];
  for(let i=0;i<props.film.rating;++i){
    stars.push(<BsStarFill/>);
  }
  for(let i=0;i<5-props.film.rating;++i){
    stars.push(<BsStar/>);
  }
  if(props.film.rating ===undefined){
    for(let i=0;i<5;++i){
      stars.push(<BsStar/>);
    }
  }
  const handleChange=()=>{
    setChecked(!mychecked);
    
  }
    return(
        <>
        {/* 必须有个single root  */}
            <td className='column-left'><BsPencilSquare/><BsTrash/>{props.film.title}</td>
            {/* <td>{String(props.film.favorite)}</td> */}
            {/* <td><input  name='favorite' type={"checkbox"} />favorite</td> */}
            <td>
              <Checkbox 
                label='favorite'
                value={mychecked}
                onChange={handleChange}
              />
            </td>
            
            <td>{props.film.date !==undefined && 
            props.film.date.format('YYYY-MM-DD')}</td>
            
            <td>{stars}</td>
        </>
    );
}
function Checkbox({label,value,onChange}){
  return (
    <label>
      <input type={"checkbox"} checked={value} onChange={onChange} />
      {label}
    </label>
  );
}
// function FilmAction(){
//     return <td><Button variant='danger'><i className='bi bi-trash2'>X</i></Button></td>
// }

// export写文件最后  只有FilmLists才需要再文件外使用 
 export {FilmLists};