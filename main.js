let wateringPlants;
let days = 84;

let schedule = document.getElementById('schedule');
fetch('https://gist.githubusercontent.com/lenguage101/315dfdebc2c010ee899a2ddcaf79ed31/raw/71cde9402a8cf5753aa14f757eecfc24eb749bf3/apprentice-data.json')
    .then((resp) => {
        return resp.json();
    })
    .then((plants) => {
        wateringPlants = plants;
        wateringPlants.forEach( (plant, i) => {
            let firstDay = 1;
            plant.days = [firstDay];
            let numberOfDaysToAdd = Number(plant.water_after.match(/\d+/g).map(Number));
            //Creates a numbering system to help match the days
            for(let j = 0; j < days; j+=numberOfDaysToAdd) {
                if (plant.days.length === 1) {
                    plant.days.push(firstDay + numberOfDaysToAdd)
                } else {
                    plant.days.push(plant.days[plant.days.length - 1] + numberOfDaysToAdd)
                }
            }
        })
        //Loops through the wateringPlant database
        for (let i = 0; i < wateringPlants.length; i++) {
            //Loops through the array of days of each plants to see 
            console.log(wateringPlants[i]);;
            let list = document.createElement('ul');
            let para = document.createElement('p');
            let plantName = document.createTextNode(`${wateringPlants[i].name} is watered every ${wateringPlants[i].water_after}`);
            para.appendChild(plantName);
            schedule.appendChild(para);
            schedule.appendChild(list)
            for (let j = 0; j < wateringPlants[i].days.length; j++) {
                let daysArray = wateringPlants[i].days;                
                let weekNumber = daysArray[j] / 7;
                let li = document.createElement('li')
                weekNumber = Math.floor(weekNumber);
                if (daysArray[j] > days) {
                    // console.log('Skipped');
                } else if (daysArray[j] % 7 === 1) {
                    let liText = document.createTextNode( `Week ${weekNumber + 1} - ${wateringPlants[i].name} was watered on ` 
                                                        + `Day ${daysArray[j]} on Monday`);
                    li.appendChild(liText);
                    list.appendChild(li);
                } else if (daysArray[j] % 7 === 2) {
                    let liText = document.createTextNode( `Week ${weekNumber + 1} - ${wateringPlants[i].name} was watered on ` 
                                                        + `Day ${daysArray[j]} on Tuesday`);
                    li.appendChild(liText);
                    list.appendChild(li);
                } else if (daysArray[j] % 7 === 3) {
                    let liText = document.createTextNode( `Week ${weekNumber + 1} - ${wateringPlants[i].name} was watered on ` 
                                                        + `Day ${daysArray[j]} on Wednesday`);
                    li.appendChild(liText);
                    list.appendChild(li);                } 
                else if (daysArray[j] % 7 === 4) {
                    let liText = document.createTextNode( `Week ${weekNumber + 1} - ${wateringPlants[i].name} was watered on ` 
                                                        + `Day ${daysArray[j]} on Thursday`);
                    li.appendChild(liText);
                    list.appendChild(li);
                } else if (daysArray[j] % 7 === 5) {
                    let liText = document.createTextNode( `Week ${weekNumber + 1} - ${wateringPlants[i].name} was watered on ` 
                                                        + `Day ${daysArray[j]} on Friday`);
                    li.appendChild(liText);
                    list.appendChild(li);                
                } else if (daysArray[j] % 7 === 6) {
                    if ( (daysArray[j] - 1) % 7 !== 6 || 
                         (daysArray[j] - 1) % 7 !== 0 ) {
                            let liText = document.createTextNode( `Week ${weekNumber + 1} - ${wateringPlants[i].name} was watered on ` 
                                                                + `Day ${daysArray[j] - 1} on Friday instead of Day ${daysArray[j]} `
                                                                + `since falls on a Saturday`);
                            li.appendChild(liText);
                            list.appendChild(li);
                    }
                } else {
                    if ( (daysArray[j] + 1) % 7 !== 6 || 
                         (daysArray[j] + 1) % 7 !== 0 ) {
                        if(daysArray[j] + 1 >= 84){
                            console.log(`End of Cycle`);
                        } else {
                            let liText = document.createTextNode( `Week ${weekNumber + 1} - ${wateringPlants[i].name} was watered on ` 
                                                                + `Day ${daysArray[j] + 1} on Monday instead of Day ${daysArray[j]} `
                                                                + `since falls on a Sunday`);
                            li.appendChild(liText);
                            list.appendChild(li);
                        }
                    }
                } 
            }           
        }
    })
    .catch( err => {
        console.log(err)
    })

// let week = {
//     'Monday': [],
//     'Tuesday': [],
//     'Wednesday': [],
//     'Thursday': [],
//     'Friday': [],
//     'Saturday': [],
//     'Sunday': []
// }

// let addExtraWeek = ( week  => {
//     let weeksToWater = 12;
//     for (let i = 1; i <= weeksToWater; i++) {
//         let addSevenDays = 7;    
//         let weekNumber = 'Week ' + i;
//         Object.keys(week).forEach( (day , j) => {
//             let obj = {};
//             let addOneDay = 1;
//             if (i === 1) {  
//                 obj[weekNumber] = 'Day '+ (j + addOneDay);                
//             } else {
//                 //Finds how many days to skip between each watering session
//                 let daysToSkip = Number(week[day][i-2]['Week '+ (i - 1)].match(/\d+/g).map(Number));
//                 obj[weekNumber] = 'Day ' + (daysToSkip+ addSevenDays);                
//             }
//             week[day].push(obj);
//         })
//     }
//     console.log(week);
// })

// addExtraWeek(week)