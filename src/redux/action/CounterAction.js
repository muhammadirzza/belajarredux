export const KaliMotorAction = () =>{
    return {
        type:'KALIMOTOR'
    }
}

export const KaliMobilAction = () => {
    return {
        type : 'KALIMOBIL'
    }
}

export const inputdurasi = (jam) => {
    return {
        type:'INPUT',
        payload:jam
    }
}

export const Back = () => {
    return {
        type : 'KEMBALI'
    }
}

// export const pilihkendaraan = (kendaraan) => {
//     return {
//         type:'PILIH',
//         payload:kendaraan
//     }
// }