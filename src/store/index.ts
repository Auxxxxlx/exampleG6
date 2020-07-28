import { createStore } from "vuex";

import appState from "./modules/appState"
import mapState from "./modules/mapState"

export default createStore({
    modules: {
        appState,
        mapState
    }
})