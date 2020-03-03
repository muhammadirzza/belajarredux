const initialState= {
    harga : 0,
    // kendaraan : '',
    durasi : 0,
    // catatan : 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'KALIMOTOR':
            return {...state,
                harga:state.harga+(state.durasi*1000)
            }
        case 'KALIMOBIL':
            return {...state,
                harga:state.harga+(state.durasi*2000)
            }
        // case 'PILIH':
        //     return {...state,
        //         kendaraan:state.kendaraan
        //     }
        case 'INPUT':
            return {...state,
                durasi:state.durasi+action.payload
            }
        case 'KEMBALI':
            return {...state,
                harga:0,
                durasi:0
            }            
        default:
            return state;
    }
}