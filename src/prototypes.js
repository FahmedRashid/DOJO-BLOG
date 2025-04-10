// Interactive button to update name upon a certain click. ------------------------------------------
// import { useState } from "react";

// // let name = 'Fahmed';
// const Home = () => {
//     const [name, setName] = useState('Fahmed')

//     const handleClick = () => {
//         setName('Rashid');
//     }
//     return ( 
//         <div className="home">
//             <h2>HomePage</h2>
//             <p>{ name }</p>
//             <button onClick={handleClick}>click me</button>
//         </div>
//      );
// }
// export default Home;
// --------------------------------------------------------------------------

//Update the name if you hit click me
// const Home = () => {
//     const [name, setName] = useState('Fahmed')

//     const handleClick = () => {
//         setName(prevName => {
//             if (prevName === 'Fahmed') {
//                 return 'Rashid';
//             } else {
//                 return 'Fahmed';
//             }
//         });
//     }
//     return ( 
//         <div className="home">
//             <h2>HomePage</h2>
//             <p>{ name }</p>
//             <button onClick={handleClick}>click me</button>
//         </div>
//      );
// }