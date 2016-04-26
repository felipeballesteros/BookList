
export function selectBook(book){
	// selectBook is an action creator, it needs to create an action
	// An object with a type property
	return{
		type: 'BOOK_SELECTED',
		payload: book
	};
}