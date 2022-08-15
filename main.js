// let arrayOfDiscs;
// let consoleData;


window.onload = function () {
    //  *Call functions on page load.
    discGolf();
};

// const consoleData = () => {
//     console.log(arrayofDiscs);
//     // console.log(veryOverstable)
//     // console.log(overstable)
//     // console.log(stable)
//     // console.log(understable)
//     // console.log(veryUnderstable)
// // }

// };


const discGolf = () =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b9b204a9bfmsha70410478fb879bp14895ejsn323afe06f9ce',
            'X-RapidAPI-Host': 'disc-golf.p.rapidapi.com'
        }
    };
// this function does a fetch of the data directly from the api, and then returns the array of objects
    // in the API on the console, if it doesn't work it will run a catch and display an error
    fetch('https://disc-golf.p.rapidapi.com/all', options)
        .then(response => response.json())
        .then(arrayOfDiscs => {
            const {veryOverstable, overstable, stable, understable, veryUnderstable} = arrayOfDiscs
            // console.log(veryOverstable)
            // - Very Overstable Discs in expert, novice, and beginner categories
                const expertDiscVeryOverstable = veryOverstable.filter(disc=> disc.speed >= 11 && disc.glide >= 3 && disc.turn >= 0 && disc.fade >= 4)
                const noviceDiscVeryOverstable = veryOverstable.filter(disc=> (disc.speed < 11 && disc.speed > 5) && disc.glide > 0 && disc.turn >0 && disc.fade >= 0)
                const beginnerDiscVeryOverstable = veryOverstable.filter(disc=> disc.speed <= 5 && disc.glide >= 0 && disc.turn >= 0 && disc.fade>0)
                console.log('Very Overstable Discs - Expert: ', expertDiscVeryOverstable)
                console.log('Very Overstable Discs - Intermediate: ', noviceDiscVeryOverstable)
                console.log('Very Overstable Discs - Beginner: ', beginnerDiscVeryOverstable)

            // console.log(overstable)
            // - Overstable Discs in expert, novice, and beginner categories
                const expertDiscOverstable = overstable.filter(disc=> disc.speed >= 11 && disc.glide >= 3 && disc.turn >= 0 && disc.fade >= 4)
                const noviceDiscOverstable = overstable.filter(disc=> (disc.speed < 11 && disc.speed > 5) && disc.glide > 0 && disc.turn >0 && disc.fade >= 0)
                const beginnerDiscOverstable = overstable.filter(disc=> disc.speed <= 5 && disc.glide >= 0 && disc.turn >= 0 && disc.fade>0)
                console.log('Overstable Discs - Expert: ', expertDiscOverstable)
                console.log('Overstable Discs - Intermediate: ', noviceDiscOverstable)
                console.log('Overstable Discs - Beginner: ', beginnerDiscOverstable)

            // console.log(stable)
            // - Stable Discs in expert, novice, and beginner categories
                const expertDiscStable = stable.filter(disc=> disc.speed >= 10 && disc.glide >= 5 && disc.turn >= -3 && disc.fade >= 3)
                const noviceDiscStable = stable.filter(disc=> (disc.speed < 10 && disc.speed >= 6) && disc.glide > 4 && disc.turn > -.5 && disc.fade >= 0)
                const beginnerDiscStable = stable.filter(disc=> disc.speed <= 5 && disc.glide >= -1 && disc.turn >= 0 && disc.fade >= 0)
                console.log('Stable Discs - Expert: ', expertDiscStable)
                console.log('Stable Discs - Intermediate: ', noviceDiscStable)
                console.log('Stable Discs - Beginner: ', beginnerDiscStable)

            // console.log(understable)
            // - Understable Discs in expert, novice, and beginner categories
                const expertDiscUnderstable = understable.filter(disc=> disc.speed >= 10 && disc.glide >= 5 && disc.turn >= -3 && disc.fade >= 3)
                const noviceDiscUnderstable = understable.filter(disc=> (disc.speed < 10 && disc.speed >= 6) && disc.glide > 3 && disc.turn > -5 && disc.fade >= 0)
                const beginnerDiscUnderstable = understable.filter(disc=> disc.speed <= 5 && disc.glide >= -3 && disc.turn >= 0 && disc.fade >= 0)
                console.log('Understable Discs - Expert: ', expertDiscUnderstable)
                console.log('Understable Discs - Intermediate: ', noviceDiscUnderstable)
                console.log('Understable Discs - Beginner: ', beginnerDiscUnderstable)

            // console.log(veryUnderstable)
            // - Very Understable Discs in expert, novice, and beginner categories
                const expertDiscVeryUnderstable = veryUnderstable.filter(disc=> disc.speed >= 10 && disc.glide >= 3 && disc.turn >= -4 && disc.fade >= 0)
                const noviceDiscVeryUnderstable = veryUnderstable.filter(disc=> (disc.speed < 10 && disc.speed >= 6) && disc.glide > 3 && disc.turn >= -4 && disc.fade >= 0)
                const beginnerDiscVeryUnderstable = veryUnderstable.filter(disc=> disc.speed <= 5 && disc.glide >= 3 && disc.turn >= -4 && disc.fade >= 0)
                console.log('Very Understable Discs - Expert: ', expertDiscVeryUnderstable)
                console.log('Very Understable Discs - Intermediate: ', noviceDiscVeryUnderstable)
                console.log('Very Understable Discs - Beginner: ', beginnerDiscVeryUnderstable)

            //creating button selecting variables
            //Very Overstable Discs
            const button1e = document.getElementById('button-1e')
            button1e.addEventListener('click', ()=> {getDisc(expertDiscVeryOverstable)
            })

            const button1n = document.getElementById('button-1n')
            button1n.addEventListener('click', ()=> {getDisc(noviceDiscVeryOverstable)
            })

            const button1b = document.getElementById('button-1b')
            button1b.addEventListener('click', ()=> {getDisc(beginnerDiscVeryOverstable)
            })

            //Overstable Discs
            const button2e = document.getElementById('button-2e')
            button2e.addEventListener('click', ()=> {getDisc(expertDiscOverstable)
            })

            const button2n = document.getElementById('button-2n')
            button2n.addEventListener('click', ()=> {getDisc(noviceDiscOverstable)
            })

            const button2b = document.getElementById('button-2b')
            button2b.addEventListener('click', ()=> {getDisc(beginnerDiscOverstable)
            })

            //Stable Discs
            const button3e = document.getElementById('button-3e')
            button3e.addEventListener('click', ()=> {getDisc(expertDiscStable)
            })

            const button3n = document.getElementById('button-3n')
            button3n.addEventListener('click', ()=> {getDisc(noviceDiscStable)
            })

            const button3b = document.getElementById('button-3b')
            button3b.addEventListener('click', ()=> {getDisc(beginnerDiscStable)
            })

            //Understable Discs
            const button4e = document.getElementById('button-4e')
            button4e.addEventListener('click', ()=> {getDisc(expertDiscUnderstable)
            })

            const button4n = document.getElementById('button-4n')
            button4n.addEventListener('click', ()=> {getDisc(noviceDiscUnderstable)
            })

            const button4b = document.getElementById('button-4b')
            button4b.addEventListener('click', ()=> {getDisc(beginnerDiscUnderstable)
            })

            //Very Understable Discs
            const button5e = document.getElementById('button-5e')
            button5e.addEventListener('click', ()=> {getDisc(expertDiscVeryUnderstable)
            })

            const button5n = document.getElementById('button-5n')
            button5n.addEventListener('click', ()=> {getDisc(noviceDiscVeryUnderstable)
            })

            const button5b = document.getElementById('button-5b')
            button5b.addEventListener('click', ()=> {getDisc(beginnerDiscVeryUnderstable)
            })

        })
        .catch(err => console.error(err, 'You are a moron, stop throwing errors'))

};


//mapping through arrayOfDiscs to get the internals of the array of Very Overstable Discs to populate when you click the button
const getDisc = (arrayOfDiscs) => {
    const displayResults = document.getElementById('card-container');

    displayResults.innerHTML = ""
    arrayOfDiscs.map(disc => {

        const html = `
     <div id="card-container">

        <h1>${disc.name}</h1>
        
        <h6>${disc.dataId}</h6>
        <h6>${disc.flightType}</h6>
        <h6>${disc.flightPath}
            <picture>
                <img src="${disc.flightPath}" alt="user image" class="user-image" />
            </picture>
        </h6>
        
        
      </div>
    </div>
    </div>
    `;
        displayResults.insertAdjacentHTML('beforeend', html);
        // displayOverstable.insertAdjacentHTML('afterbegin', html);
        // displayStable.insertAdjacentHTML('afterbegin', html);
        // displayUnderstable.insertAdjacentHTML('afterbegin', html);
        // displayVeryUnderstable.insertAdjacentHTML('afterbegin', html);
    });
};

// const displayVeryOverstable = () => {
//     getVeryOverstableDiscs(arrayOfDiscs);
// };


// //mapping through arrayOfDiscs to get the internals of the array of Overstable Discs to populate when you click the button
// const getOverstableDiscs = (arrayOfDiscs) => {
//     arrayOfDiscs.map(disc => {
//         const displayOverstable = document.getElementById('page-container');
//         const html = `
//      <div id="card-container">
//
//         <h1>${disc.name}</h1>
//
//         <h6>${disc.dataId}</h6>
//         <h6>${disc.flightType}</h6>
//         <h6>${disc.flightPath}
//             <picture>
//                 <img src="${disc.picture.thumbnail}" alt="user image" class="user-image" />
//             </picture>
//         </h6>
//
//
//       </div>
//     </div>
//     </div>
//     `;
//         // displayVeryOverstable.insertAdjacentHTML('afterbegin', html);
//         displayOverstable.insertAdjacentHTML('afterbegin', html);
//         // displayStable.insertAdjacentHTML('afterbegin', html);
//         // displayUnderstable.insertAdjacentHTML('afterbegin', html);
//         // displayVeryUnderstable.insertAdjacentHTML('afterbegin', html);
//     });
// };
//
// const displayOverstable = () => {
//     getOverstableDiscs(arrayOfDiscs);
// };
//
//
// //mapping through arrayOfDiscs to get the internals of the array of Stable Discs to populate when you click the button
// const getStableDiscs = (arrayOfDiscs) => {
//     arrayOfDiscs.map(disc => {
//         const displayStable = document.getElementById('page-container');
//         const html = `
//      <div id="card-container">
//
//         <h1>${disc.name}</h1>
//
//         <h6>${disc.dataId}</h6>
//         <h6>${disc.flightType}</h6>
//         <h6>${disc.flightPath}
//             <picture>
//                 <img src="${disc.picture.thumbnail}" alt="user image" class="user-image" />
//             </picture>
//         </h6>
//
//
//       </div>
//     </div>
//     </div>
//     `;
//         // displayVeryOverstable.insertAdjacentHTML('afterbegin', html);
//         // displayOverstable.insertAdjacentHTML('afterbegin', html);
//         displayStable.insertAdjacentHTML('afterbegin', html);
//         // displayUnderstable.insertAdjacentHTML('afterbegin', html);
//         // displayVeryUnderstable.insertAdjacentHTML('afterbegin', html);
//     });
// };
//
// const displayStable = () => {
//     getStableDiscs(arrayOfDiscs);
// };
//
//
// //mapping through arrayOfDiscs to get the internals of the array of Understable Discs to populate when you click the button
// const getUnderstableDiscs = (arrayOfDiscs) => {
//     arrayOfDiscs.map(disc => {
//         const displayUnderstable = document.getElementById('page-container');
//         const html = `
//      <div id="card-container">
//
//         <h1>${disc.name}</h1>
//
//         <h6>${disc.dataId}</h6>
//         <h6>${disc.flightType}</h6>
//         <h6>${disc.flightPath}
//             <picture>
//                 <img src="${disc.picture.thumbnail}" alt="user image" class="user-image" />
//             </picture>
//         </h6>
//
//
//       </div>
//     </div>
//     </div>
//     `;
//         // displayVeryOverstable.insertAdjacentHTML('afterbegin', html);
//         // displayOverstable.insertAdjacentHTML('afterbegin', html);
//         // displayStable.insertAdjacentHTML('afterbegin', html);
//         displayUnderstable.insertAdjacentHTML('afterbegin', html);
//         // displayVeryUnderstable.insertAdjacentHTML('afterbegin', html);
//     });
// };
//
// const displayUnderstable = () => {
//     getUnderstableDiscs(arrayOfDiscs);
// };
//
//
// //mapping through arrayOfDiscs to get the internals of the array of Very Understable Discs to populate when you click the button
// const getVeryUnderstableDiscs = (arrayOfDiscs) => {
//     arrayOfDiscs.map(disc => {
//         const displayVeryUnderstable = document.getElementById('page-container');
//         const html = `
//      <div id="card-container">
//
//         <h1>${disc.name}</h1>
//
//         <h6>${disc.dataId}</h6>
//         <h6>${disc.flightType}</h6>
//         <h6>${disc.flightPath}
//             <picture>
//                 <img src="${disc.picture.thumbnail}" alt="user image" class="user-image" />
//             </picture>
//         </h6>
//
//
//       </div>
//     </div>
//     </div>
//     `;
//         // displayVeryOverstable.insertAdjacentHTML('afterbegin', html);
//         // displayOverstable.insertAdjacentHTML('afterbegin', html);
//         // displayStable.insertAdjacentHTML('afterbegin', html);
//         // displayUnderstable.insertAdjacentHTML('afterbegin', html);
//         displayVeryUnderstable.insertAdjacentHTML('afterbegin', html);
//     });
// };
//
// const displayVeryUnderstable = () => {
//     getVeryUnderstableDiscs(arrayOfDiscs);
// };
//
