import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails, {Field} from '../itemDetails/itemDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import GotSercvice from '../../services/gotService';
import RowBlock from '../RowBlock/rowBlock';

export default class HousesPage extends Component {
    
    state = {
        selectedHouse: null,
        error: false
    }
    gotService = new GotSercvice();
    
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        
        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name} />
        )

        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedHouse}
                getData={this.gotService.getHouse}>
                    <Field field='region' label='Region'/>
                    <Field field='words' label='Words'/>
                    <Field field='titles' label='Titles'/>
                    <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>)

        return (
            <RowBlock 
                left={itemList}
                right={itemDetails}/> 
        )
    }
    
}