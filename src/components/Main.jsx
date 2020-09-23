import React, {useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';


function Main(props) {
	const [userName, setUserName] = React.useState('');
	const [userDescription, setUserDescription] = React.useState('');
	const [userAvatar, setUserAvatar] = React.useState('');
	const [cards, setCards] = React.useState([]);

	useEffect(() => {
		Promise.all([api.getInitialUser(),api.getInitialCards()])
		.then(([user,data]) => {
			setUserName(user.name);
			setUserDescription(user.about);
			setUserAvatar(user.avatar);
			setCards(data);
		})
	}, []);


	return (
		<main className="content">
		<section className="lead">
			<a href="#" className="lead__avatar-cover" onClick = {props.onEditAvatar}>
				<img  alt={userName} src= {userAvatar} className="lead__avatar" />
			</a>
			<div className="lead__profile-info">
				<div className="lead__profile-header">
					<h1 className="lead__name">{userName}</h1>
					<button type="button" title="Редактировать" className="lead__edit-button" onClick={props.onEditProfile}></button>
				</div>
					<p className="lead__text">{userDescription}</p>
			</div>
			<button type="button" className="lead__add-button" title="Добавить" onClick={props.onAddPlace}></button>
		</section>

		<section className="elements">
			<ul className="elements__list">
				{cards.map(card  => <Card key={card._id} {...card}  onCardClick={props.onCardClick} />)}
			</ul>
		</section>
		</main>
	);
}

export default Main;
