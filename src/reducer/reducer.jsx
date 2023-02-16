const reducer = (state, action) => {
	switch (action.type) {
		case 'OPEN_MENU':
			return { isOpenMenu: !state.isOpenMenu };
			break;

		default:
			return state;
	}
	// if (action.type === 'OPEN_MENU') {
	// 	return { ...state, isOpenMenu: true };
	// }
};

export default reducer;
