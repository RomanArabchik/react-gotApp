import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails, {Field} from '../itemDetails/itemDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import GotSercvice from '../../services/gotService';
import RowBlock from '../RowBlock/rowBlock';

export default class CharacterPage extends Component {
    
    state = {
        selectedChar: null,
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
            selectedChar: id
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        console.log(this.state.selectedChar)
        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name,gender}) => `${name} (${gender})`} />
        )

        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedChar}
                getData={this.gotService.getCharacter} >
                    <Field field='gender' label='Gender' />
                    <Field field='born' label='Born' />
                    <Field field='died' label='Died' />
                    <Field field='culture' label='Culture' />
            </ItemDetails>)

        return (
            <RowBlock 
                left={itemList}
                right={itemDetails}/> 
        )
    }
    
}