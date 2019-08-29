import ShopActionTypes from './shop.types';

//import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
	collections: null
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ShopActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				collections: payload
			};
		default:
			return state;
	}
};

export default shopReducer;
