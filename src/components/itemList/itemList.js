import React, {useState, useEffect} from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';

function ItemList ({getData, onItemSelected, renderItem}) {

    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data)
            })
    }, []) // пустой массив после запятой говорит хуку, что нужно выполнить эффект только при появлении компонента и его исчезновении


    function renderItems (arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item);
            return (
                <li key={id} 
                    className="list-group-item"
                    onClick={() => onItemSelected(id)}>
                        {label}
                </li> 
            )
        })
    }

    
    if(!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);                 

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default ItemList;