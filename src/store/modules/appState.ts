export default {
    state: {
        preferenceState: {
            locale: 'zh',
            useTouchIDUnlockApp: true,
            useTouchIDUnlockDocument: false,
            maxNotificationQuantity: 200,
        },
        uiState: {
            leftPanel: true,
            bottomPanel: true,
        },
        themeState: {
            currentLightTheme: "dayLight",
            currentDarkTheme: "nightDark",
        },
        routerState: {
            thornMap: "DocumentMap",
            thornNetwork: "DocumentNetwork",
        },
    },
    mutations: {
        // preferenceState
        set_preferenceState: (state, value) => {
            state.preferenceState[value.key] = value.value;
        },
        // uiState
        set_uiState: (state, value) => {
            state.uiState[value.key] = value.value;
        },
        // themeState
        set_themeState: (state, value) => {
            state.themeState[value.key] = value.value;
        },
        // themeState
        set_routerState: (state, value) => {
            state.routerState[value.key] = value.value;
        }
    },
    actions: {
        // preferenceState
        onSet_preferenceState: ({ commit }, value) => {
            commit('set_preferenceState', value);
        },
        // uiState
        onSet_uiState: ({ commit }, value) => {
            commit('set_uiState', value);
        },
        // themeState
        onSet_themeState: ({ commit }, value) => {
            commit('set_themeState', value);
        },
        // routerState
        onSet_routerState: ({ commit }, value) => {
            commit('set_routerState', value);
        }
    }
}