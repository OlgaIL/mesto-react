import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
	const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState(null);

	function handleEditAvatarClick () {
		setIsEditAvatarPopupOpen(true);
	}

	function handleEditProfileClick () {
		setIsEditProfilePopupOpen(true);
	}

	function handleAddPlaceClick () {
		setIsAddPlacePopupOpen(true);
	}

	function handleDeleteClick () {
		setIsDeletePopupOpen(true);
	}

	function handleCardClick (card) {
		setIsImagePopupOpen(true);
		setSelectedCard(card);
	}

	function closeAllPopups () {
				setIsEditProfilePopupOpen(false);
				setIsAddPlacePopupOpen(false);
				setIsEditAvatarPopupOpen(false);
				setIsDeletePopupOpen(false);
				setIsImagePopupOpen(false);
				setSelectedCard(null);
	}


	return (
		<div className="App">
					<div className="page">
							<Header />
							<Main
							onEditAvatar={handleEditAvatarClick}
							onEditProfile ={handleEditProfileClick}
							onAddPlace ={handleAddPlaceClick}
							onCardClick={handleCardClick}
							onDeleteImg = {handleDeleteClick} />

							<Footer />
					</div>

				<PopupWithForm 
							name = "edit"
							title = "Редактировать профиль"
							submitText = "Сохранить"
							isOpen = {isEditProfilePopupOpen}
							onClose = {closeAllPopups}>
							<input	type="text" className="form__edt-text" name="name" minLength="2" maxLength="40" required placeholder="Имя" />
							<span id="name-error" className="form__error"></span>
							<input type="text" className="form__edt-text" name="about" minLength="2" maxLength="200" required placeholder="О себе" />
							<span id="about-error" className="form__error"></span>
				</PopupWithForm>

				<PopupWithForm 
							name = "add"
							title = "Новое место"
							submitText = "Создать"
							isOpen = {isAddPlacePopupOpen}
							onClose = {closeAllPopups}>
										<input type="text" className="form__edt-text" name="name" placeholder="Название" required minLength="1" maxLength="30" />
										<span id="name-error" className="form__error"></span>
										<input className="form__edt-text" name="link" placeholder="Ссылка на картинку" required type="url" pattern="https://.*" />
										<span id="link-error" className="form__error"></span>
				</PopupWithForm>

				<PopupWithForm 
							name="avatar" 
							title = "Обновить аватар"
							submitText="Сохранить"
							isOpen = {isEditAvatarPopupOpen}
							onClose = {closeAllPopups}>
								<input className="form__edt-text" name="link" placeholder="Ссылка на картинку" required type="url" pattern="https://.*" />
								<span id="link-error" className="form__error"></span>
				</PopupWithForm>


				<PopupWithForm 
							name ="delete"
							title = "Вы уверены?"
							submitText = "Да"
							isOpen = {isDeletePopupOpen}
							onClose = {closeAllPopups} />

				<ImagePopup 
						isOpen = {isImagePopupOpen}
						onClose = {closeAllPopups}
						card = {selectedCard} />

		</div>
	);
}

export default App;
