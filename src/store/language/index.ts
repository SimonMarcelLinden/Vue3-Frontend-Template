import { LanguageState } from './types';
import { RootState } from '@/store/types';
import { Module } from 'vuex';
import i18n from '@/i18n';

export const state: LanguageState = {
	language: process.env.VUE_APP_I18N_LOCALE || 'en',
};

export const language: Module<LanguageState, RootState> = {
	namespaced: true,
	state,
	// state: {
	// 	language: localStorage.getItem('language'),
	// },
	mutations: {
		SET_LANGUAGE(state: any, language: string) {
			localStorage.setItem('language', language);
			state.language  	= language;
			i18n.global.locale 	= language;
		},
	},
	actions: {
		// @ts-ignore-next-line
		setLanguage({ commit }: any, language: string) {
			commit('SET_LANGUAGE', language);
		},
	},
	getters: {
		getLanguage() {
			return localStorage.getItem('language');
		}
	  }
}
