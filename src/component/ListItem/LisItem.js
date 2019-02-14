import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    console.log("props", props);
    return(
        <div className="list-item">
            <ul>
                {
                    props.list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ListItem;