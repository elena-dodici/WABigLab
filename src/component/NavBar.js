import {Col, Navbar,Container, ListGroup} from 'react-bootstrap';
import './NavBar.css';
import { BsCollectionPlay,BsPersonCircle } from "react-icons/bs";
function MyNavBar(props){
    return(
    <Col sm={4}>  {/*offset 指定列向右的偏移量，span指定列宽 */}
          <ListGroup className='bar txt-left' varient="flush">
            <ListGroup.Item className='lg-item' action href="#link1">
              All
            </ListGroup.Item>
            <ListGroup.Item className='lg-item' action href="#link2">
              Favorites
            </ListGroup.Item>
            {/* <ListGroup.Item action onClick={alertClicked}> */}
            <ListGroup.Item className='lg-item' action >
              Best Rated
            </ListGroup.Item>
            <ListGroup.Item className='lg-item' action >
              Last Seen
            </ListGroup.Item>
            <ListGroup.Item className='lg-item' action >
              Seen Last Month
            </ListGroup.Item>
          </ListGroup>
        </Col>
    );
}

function TopNavbar(props){
    return(
        <Navbar bg="primary" variant="dark">
          <Container>
              <Col sm={3}>
                <Navbar.Brand href="#home">
                <BsCollectionPlay />
                    Film Library
                </Navbar.Brand>          
              </Col>
              <Col sm={3}>
                <input className='searchbox' type={"search"} value="search" />
              </Col>
              <Col sm={6} className='user'>
                  <BsPersonCircle  fontSize="large"/>
              </Col>
          </Container>
        </Navbar>
    );
}

export {MyNavBar,TopNavbar};
