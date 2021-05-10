import React, {useState, useEffect} from 'react';
import './itemDetails.css';
import Spinner from '../spinner/spinner';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}

function ItemDetails ({itemId, getData, children}) {

    const [elem, setElem] = useState({
        item: null,
        loading: true
    });

    useEffect(() => {
        updateItem();
    }, [itemId])

    
    function updateItem() {
        
        if(!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                setElem({
                    item,
                    loading: false
                })
            })
    }

    
    if (!elem.item) {
        return <span className='select-error'>Please select a item</span>
    }
    if (elem.loading) {
        return <Spinner/>
    }

    const {item} = elem;
    const {name} = item;

    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item}) //передаем в Field {item}
                    })
                }
            </ul>
        </div>
    );
    
}

export default ItemDetails;