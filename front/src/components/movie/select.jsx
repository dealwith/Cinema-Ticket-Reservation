import React from 'react'
import Select from 'react-select'
import { cityOptions , movieOptions } from './dataSelect';


export const CitySelect = () => (
    <Select
        options={ cityOptions }
        defaultValue={ cityOptions[0] }
        isClearable
    />
)

// // export const CinemaSelect = () => (
// //     <Select
// //         options={ cinemaOptions }
// //         defaultValue={cityOptions[0] }
// //         isSearchable
// //     />
// // )

// export const MovieSelect = () => {
//     return (
//         <Select
//             options={ city }
//             // defaultValue={cityOptions[0]}
            
//         />
//     )
// }

// import React from 'react'
// import Select from 'react-select'

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
// ]

// const MyComponent = () => (
//     <Select options={options} />
// )