const initialState = [
    {
        id: 1,
        name : 'Trà Shan Tuyết',
        img: 'https://i.pinimg.com/originals/a0/cf/88/a0cf88fda5e332d00ba2749b03f3e2fa.jpg',
        description : 'Sản phẩm trà pha ...',
        price: 100000,
        inventory: 20,
        status: true,
    
    },
    {
        id: 2,
        name : 'Trà sen',
        img: 'https://i.pinimg.com/originals/a0/cf/88/a0cf88fda5e332d00ba2749b03f3e2fa.jpg',
        description : 'Sản phẩm trà pha ...',
        price: 120000,
        inventory: 20,
        status: true,
    
    },
    {
        id: 1,
        name : 'Trà hoa cúc',
        img: 'https://i.pinimg.com/originals/a0/cf/88/a0cf88fda5e332d00ba2749b03f3e2fa.jpg',
        description : 'Sản phẩm trà pha ...',
        price: 138000,
        inventory: 10,
        status: true,
    
    },  {
        id: 1,
        name : 'Trà một ong',
        img: 'https://qph.fs.quoracdn.net/main-qimg-df9a4b3b82c78b5fe324195c7ea72c3e',
        description : 'Sản phẩm trà pha ...',
        price: 100000,
        inventory: 5,
        status: true,
    
    },
    {
        id: 1,
        name : 'Trà Shan Tuyết',
        img: 'https://qph.fs.quoracdn.net/main-qimg-df9a4b3b82c78b5fe324195c7ea72c3e',
        description : 'Sản phẩm trà pha ...',
        price: 100000,
        inventory: 20,
        status: true,
    
    }
]

const products = (state = initialState, action)=>{
    switch (action.type) {
        default:
            return [...state];
    }
}
export default products