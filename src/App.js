import {FilmLists} from './component/FilmComponents'
import {MyNavBar,TopNavbar} from './component/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Container,Col, Row} from 'react-bootstrap';
import dayjs from 'dayjs' ; 
// 后面的字符串dayjs是library 
const fakeFilms=[
  // {title:'Pulp Fiction',favorite:true,date:dayjs('2022-03-10'),rating:5},
  {title:'Pulp Fiction',favorite:true,date:dayjs('2022-03-10'),rating:5},
  {title:'21 Grams',favorite:true,date:dayjs('2022-03-17'),rating:4},
  {title:'Star Wars',favorite:false},
  {title:'Matrix',favorite:false},
  {title:'Shrek',favorite:false,date:dayjs('2022-03-21'),rating:3},
  
];
function alertClicked() {
  //alert('You clicked the third ListGroupItem');
}
function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
        {/* <h1>My Films</h1> */}        
          <TopNavbar></TopNavbar>
        </Col>
      </Row>
      <Row>
         
        <MyNavBar></MyNavBar>
        <FilmLists films={fakeFilms}></FilmLists>
        
      </Row>
    </Container>
  );
}

export default App;
