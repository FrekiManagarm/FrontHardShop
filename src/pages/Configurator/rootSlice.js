import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        CPU: {},
        GPU: {},
        COOLING: {},
        HDD: {},
        MotherBoard: {},
        PSU: {},
        RAM: {},
        SSD: {},
        Case: {},
    },
    reducers: {
        chooseCPU: (state, action) => { state.CPU = action.payload },
        chooseMotherBoard: (state, action) => { state.MotherBoard = action.payload },
        chooseCooling: (state, action) => { state.COOLING = action.payload },
        chooseGPU: (state, action) => { state.GPU = action.payload },
        chooseHDD: (state, action) => { state.HDD = action.payload },
        choosePSU: (state, action) => { state.PSU = action.payload },
        chooseRAM: (state, action) => { state.RAM = action.payload },
        chooseSSD: (state, action) => { state.SSD = action.payload },
        chooseCase: (state, action) => { state.Case = action.payload },
    }
});

export const reducer = rootSlice.reducer;

export const { chooseCPU, chooseMotherBoard, chooseCooling, chooseGPU, chooseHDD, choosePSU, chooseRAM, chooseSSD, chooseCase } = rootSlice.actions;