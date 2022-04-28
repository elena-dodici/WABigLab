import {FilmLists} from './component/FilmTable'
import {MyNavBar,TopNavbar} from './component/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Container,Col, Row} from 'react-bootstrap';
import dayjs from 'dayjs' ; 
import { useState } from 'react';
import { id_filter } from './component/NavBar';
// 后面的字符串dayjs是library 
const fakeFilms=[
  // {title:'Pulp Fiction',favorite:true,date:dayjs('2022-03-10'),rating:5},
  {title:'Pulp Fiction',favorite:true,date:dayjs('2022-03-10'),rating:5},
  {title:'21 Grams',favorite:true,date:dayjs('2022-04-17'),rating:4},
  {title:'Star Wars',favorite:false},
  {title:'Matrix',favorite:false},
  {title:'Shrek',favorite:false,date:dayjs('2022-03-21'),rating:3},
  
];
// function alertClicked() {
//   //alert('You clicked the third ListGroupItem');
// }

function App() {
  const [films,setFilms] = useState(fakeFilms);
  const [filterStatus,setFilterStatus] = useState(id_filter.All)

  const changeFav=(filmTitle)=>{
    //fms是原来的state
    let tempFilm = [...films]
    tempFilm.forEach((x)=>{
      if(x.title === filmTitle){
        x.favorite = !x.favorite;
        
      }
    })
    setFilms(tempFilm)
    // alert(filmTitle,"changeFav");

  }
  
  const filterFunc =(myfilter)=>{
    //console.log(myfilter);
    if(filterStatus !== myfilter)
        setFilterStatus(myfilter);
  }

//????????? 为什么被调用了两次？？？？  react的问题
  const filterFilms=()=>{ 
    let myfilms = [];
    // alert(1);
    switch (filterStatus) {
      case id_filter.All:
        //执行filter的动作
        myfilms = films.filter(x=>{
          return x;
        });
        // console.log("all");
        break;
      case id_filter.Favorites:
        myfilms = films.filter(x=>{
          return x.favorite === true;
        })
        // console.log("Favorites");
        break;
      case id_filter.BestRate:
        myfilms = films.filter(x=>{
          return x.rating ===5;
        })
        // console.log("BestRate");
        break;
      case id_filter.SeenLastMonth:
        let today = dayjs().format('YYYY-MM-DD');
        myfilms = films.filter(x=>{
          // console.log(dayjs(today).diff(x.date,'day'));//返回相差的天数
          if(x.date !== undefined)
            return (dayjs(today).diff(x.date,'day') <= 30);
          else return false;
        })
        // console.log("SeenLastMonth");
        break;
      case id_filter.Unseen:
        myfilms = films.filter(x=>{
          return x.date === undefined;
        })
        // console.log("Unseen");
        break;
      default:
        break;
    }
    return myfilms;
  }

  return (
    <Container className="App">
      <Row>
        <Col>
        {/* <h1>My Films</h1> */}        
          <TopNavbar></TopNavbar>
        </Col>
      </Row>
      <Row>
         
        {/* <MyNavBar showAllFilm = {showAll} showFavFilm = {showFav} showBRFilm = {showBR}
        showLSFilm = {showLS} showSLMFilm = {showSLM} ></MyNavBar> */}
        <MyNavBar filterFunction ={filterFunc} ></MyNavBar>
        {/* <FilmLists films={films}></FilmLists> */}
        <FilmLists films={filterFilms()} changeFav ={changeFav} filterStatus ={filterStatus}></FilmLists>
        
      </Row>
    </Container>
  );
}

export default App;
