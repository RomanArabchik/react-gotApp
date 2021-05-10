import React, { Component } from 'react';
import GotSercvice from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails/itemDetails';
import {Col, Row} from 'reactstrap';

export default class BooksItem extends Component {
    
    
    gotService = new GotSercvice();

    render() {
        return(
            <Row>
                <Col md='6'>
                    <ItemDetails 
                        itemId={this.props.bookId}
                        getData={this.gotService.getBook}>
                            <Field field='numberOfPages' label='Number of pages'/>
                            <Field field='publisher' label='Publisher'/>
                            <Field field='released' label='Released'/>
                    </ItemDetails>
                </Col>
            </Row>

        )
    }

}