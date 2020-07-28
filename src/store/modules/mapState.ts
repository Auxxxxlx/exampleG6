export default {
    state: {
        currentMapSpaceIndex: 0,
        mapSpaceList: [
            {
                name: "默认空间",
                gid: "V1StGXR8_Z5jdHi6B-myT"
            }
        ]
    },
    mutations: {
        // 设置当前的 mapSpace Index
        set_MapSpaceIndex: (state, value) => {
            state.currentMapSpaceIndex = value
        },
        // 修改 MapSpace
        set_MapSpaceName: (state, value) => {
            state.mapSpaceList[value.index] = value.name
        },
    },
    actions: {
        // 设置当前的 mapSpace Index
        onSet_MapSpace: ({ commit, state }, value) => {
            let tempIndex = state.mapSpaceList.findIndex((mapSpace) => {
                return mapSpace.gid = value
            })
            if (tempIndex > -1) {
                commit('set_MapSpaceIndex', tempIndex)
            }
        },
        // 修改当前的 mapSpace Index
        onSet_ChangeMapSpaceName: ({ commit, state }, value) => {
            if (state.mapSpaceList.length - 1 > value.index) {
                commit('set_MapSpaceName', value)
            }
        }
    }
}