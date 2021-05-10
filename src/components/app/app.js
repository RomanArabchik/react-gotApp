import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import './app.css';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import {CharacterPage, BooksPage, HousesPage, BooksItem, MainPage} from '../pages';
import GotSercvice from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';



export default class App extends Component {

    gotService = new GotSercvice();

    state = {
        showRandomChar:true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomChar ? <RandomChar getData={this.gotService.getCharacter} />: null
        return (
            <Router>
                <div className='app'> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                            </Col>
                        </Row>
                        <Row>
                            <Button className='button' color="primary" 
                                onClick={this.toggleRandomChar}>
                                    Toggle Random Character
                            </Button>
                        </Row>
                        <Route path='/' exact component={MainPage}/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books/:id' render={
                            ({match})=> {
                                const {id} = match.params;
                                return <BooksItem bookId={id}/>}
                        } />
                    </Container>
                </div>
            </Router>
        );
    }
    
};

