import { configureStore, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

let dress = createSlice({
    name : 'dress',
    initialState : [
        {
            id : 0,
            title: 'COWL NECK LONG SLEEVE DRESS',
            price: '$89',
            img: 'dress0'
        },
        {
            id : 1,
            title: 'TECHNICAL CURVED PANEL SWEATSHIRT DRESS',
            price: '$59',
            img: 'dress1'
        },
        {
            id : 2,
            title: 'BOX PLEAT A-LINE DRESS',
            price: '$69',
            img: 'dress2'
        },
        {
            id : 3,
            title: 'CHECKED WOOL DRESS',
            price: '$125',
            img: 'dress3'
        },
        {
            id : 4,
            title: 'VOLUME SLEEVE WAISTED DRESS',
            price: '$79',
            img: 'dress4'
        },
    ]
})

let auter = createSlice({
    name : 'auter',
    initialState : [
        {
            id : 0,
            title: 'WOOL MIX MID-LENGTH COAT',
            price: '$180',
            img: '아우터0'
        },
        {
            id : 1,
            title: 'WOOL MIX BELTED COAT',
            price: '$225',
            img: '아우터1'
        },
        {
            id : 2,
            title: 'SHORT PUFFER JACKET',
            price: '$180',
            img: '아우터2'
        },
        {
            id : 3,
            title: 'WOOL MIX WORKWEAR BLAZER',
            price: '$135',
            img: '아우터3'
        },
        {
            id : 4,
            title: 'WOOL CLEAN CUT JACKET',
            price: '$115',
            img: '아우터4'
        },
        {
            id : 5,
            title: 'PADDED BUTTON-UP JACKET',
            price: '$99',
            img: '아우터5'
        },
        {
            id : 6,
            title: 'DOWN FILLED SHORT PUFFER JACKET',
            price: '$180',
            img: '아우터6'
        },
    ]
})

let top = createSlice({
    name : 'top',
    initialState : [
        {
            id : 0,
            title: 'RIBBED COLLAR WOOL-ALPACA TOP',
            price: '$69',
            img: 'top0'
        },
        {
            id : 1,
            title: 'V-NECK WOOL-ALPACA JUMPER',
            price: '$79',
            img: 'top1'
        },
        {
            id : 2,
            title: 'ORGANIC COTTON MIX OVERSHIRT',
            price: '$59',
            img: 'top2'
        },
        {
            id : 3,
            title: 'CROPPED WOOL MIX JUMPER',
            price: '$59',
            img: 'top3'
        },
        {
            id : 4,
            title: 'RELAXED ROLL NECK TOP',
            price: '$69',
            img: 'top4'
        },
        {
            id : 5,
            title: 'ROUND-NECT T-SHIRT',
            price: '$15',
            img: 'top5'
        },
        {
            id : 6,
            title: 'COTTON HALF-ZIP PULLOVER JUMPER',
            price: '$69',
            img: 'top6'
        },
        {
            id : 7,
            title: 'COTTON CORDUROY SHIRT',
            price: '$79',
            img: 'top7'
        },
    ]
})

let bottom = createSlice({
    name : 'bottom',
    initialState : [
        {
            id : 0,
            title: 'LONG WIDE-LEG WOOL PANTS',
            price: '$89',
            img: 'pants0'
        },
        {
            id : 1,
            title: 'ORGANIC COTTON STRAIGHT TURN-UP JEANS',
            price: '$69',
            img: 'pants1'
        },
        {
            id : 2,
            title: 'DRAPED MIDI SKIRT',
            price: '$69',
            img: 'pants2'
        },
        {
            id : 3,
            title: 'RECYCLED COTTON MID RISE STRAIGHT JEANS',
            price: '$79',
            img: 'pants3'
        },
        {
            id : 4,
            title: 'NAPPA LEATHER A-LINE MIDI SKIRT',
            price: '$250',
            img: 'pants4'
        },
        {
            id : 5,
            title: 'ORGANIC COTTON STRAIGHT-LEG CORDUROY',
            price: '$99',
            img: 'pants5'
        },
        {
            id : 6,
            title: 'ORGANIC COTTON STRAIGHT JEANS',
            price: '$69',
            img: 'pants6'
        },
    ]
})

export default configureStore({
  reducer: { 
    dress : dress.reducer,
    top : top.reducer,
    auter : auter.reducer,
    bottom : bottom.reducer
  }
}) 