// import React, { Component } from 'react';

// export default class SearchAttackDefenseDrpdn extends Component {

//     state = {
//         data: [],
//         attack: 0,
//         defense: 0,
//         statSelection: 'attack',
//     }

//     //event handler to get the value of the dropdown selection and sets state of selection to that value
//     handleStatDropdown = (e) => {
//         const value = e.target.value;
//         this.setState({ statSelection: value })
//     }

//     render() {
//         return (
//             <div>
//                 <div className="dropdown-attack-defense">
//                 <label>Choose Attack or Defense:  </label>
//                     <select className="attack-defense" onChange={this.handleStatDropdown}>
//                         <option value="attack">Attack</option>
//                         <option value="defense">Defense</option>
//                     </select>
//                 </div>
//             </div>
//         )
//     }
// }
