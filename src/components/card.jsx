import React from 'react';

function Card (props) {

    function handleClick() {
        props.onCardClick({name: props.name, link: props.link});
    } 

    return(
            <li className="element">
                <button type="button" className="element__delete" title="Удалить"></button>
                <img  className="element__image" src={props.link} alt={props.name} onClick={handleClick} />
                <div className="element__name">
                    <h3 className="element__title">{props.name}</h3>
                    <div className="element__likesinfo">
                        <button type="button" className="element__like" title="Нравится"></button>
            <div className="element__likecount">{props.likes.length}</div>
                    </div>
                </div>
            </li>
    )
}

export default Card;