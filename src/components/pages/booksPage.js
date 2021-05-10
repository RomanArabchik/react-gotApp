import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import ErrorMessage from '../errorMessage/errorMessage';
import GotSercvice from '../../services/gotService';
import {withRouter} from 'react-router-dom';
import {Col, Row} from 'reactstrap';

 class BooksPage extends Component {
    
    state = {
        error: false
    }

    gotService = new GotSercvice();
    
    componentDidCatch() {
        this.setState({
            error: true
        })
    }


    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        
        const itemList = (
            <ItemList 
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId) // history это API которы помогает переходить на другие страницы
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name} />
        )

        return (
            <Row>
                <Col md='6'>
                    {itemList}
                </Col>
            </Row>
        )
    }
    
}

export default withRouter(BooksPage);