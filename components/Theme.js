// import { useEffect, useState } from 'react';
// import styles from '../styles/Theme.module.css';

// const lightModeOn = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4b91a890" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
// <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/></svg>

// const lightModeOff = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4b91a860" className="bi bi-lightbulb-off-fill" viewBox="0 0 16 16">
// <path d="M2 6c0-.572.08-1.125.23-1.65l8.558 8.559A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm10.303 4.181L3.818 1.697a6 6 0 0 1 8.484 8.484zM5 14.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5zM2.354 1.646a.5.5 0 1 0-.708.708l12 12a.5.5 0 0 0 .708-.708l-12-12z"/></svg>

// export default function Theme() {

//     let [lightMode, setLightMode] = useState(false);

//     useEffect(() => {
//         toggleTheme();
//     }, [lightMode])

//     const toggleTheme = function() {
//         let body = document.getElementsByTagName("BODY")[0];
//         let theme = document.getElementsByClassName("theme");
//         let on = document.getElementById("icon-on").style;
//         let off = document.getElementById("icon-off").style;
//         for (let element of [...theme, body]) {
//             if (lightMode) {
//                 element.style.backgroundColor = "#eaeaea";
//                 element.style.color='#000000';
//             } else {
//                 element.style.backgroundColor = "#000000";
//                 element.style.color='#c0c0c0';
//             }
//         }
//         if (lightMode) {
//             on.display = 'inline-block';
//             off.display = 'none';
//         } else {
//             on.display = 'none';
//             off.display = 'inline-block';
//         }
//     }
//     return (
//         <div className={`${styles.header} ${'theme'}`}>
//           <label className={styles.switch}>
//             <input className={styles.toggle} type="checkbox" onClick={ () => setLightMode(!lightMode) }></input>
//             <span className={styles.slider}></span>
//           </label>
//           <p className={styles.icons}><span id="icon-on">{lightModeOn}</span><span id="icon-off">{lightModeOff}</span></p>
//         </div>
//     )
// }