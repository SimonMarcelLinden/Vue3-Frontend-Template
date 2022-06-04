import { createStore } from 'vuex'
import { RootState } from '@/store/types';

import { language } from './language';

export default createStore<RootState>({
	state: {
		version: '1.0.0',
	},
	modules: {
		language,
	},
})
