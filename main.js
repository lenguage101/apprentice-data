let wateringPlants;
let days = 84;

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
            let addExtraWeek = i + 1;
            console.log(wateringPlants[i])
            for (let j = 0; j < wateringPlants[i].days.length; j++) {
                let daysArray = wateringPlants[i].days;                
                let weekNumber = daysArray[j] / 7;
                weekNumber = Math.round(weekNumber);
                if (daysArray[j] > days) {
                    console.log('Skipped');
                } else if (daysArray[j] % 7 === 1) {
                    console.log(`${wateringPlants[i].name} was watered on Day ${daysArray[j]} of week ${weekNumber} on Monday`);
                } else if (daysArray[j] % 7 === 2) {
                    console.log(`${wateringPlants[i].name} was watered of Day ${daysArray[j]} of week ${weekNumber} on Tuesday`);
                } else if (daysArray[j] % 7 === 3) {
                    console.log(`${wateringPlants[i].name} was watered of Day ${daysArray[j]} of week ${weekNumber} on Wednesday`);
                } else if (daysArray[j] % 7 === 4) {
                    console.log(`${wateringPlants[i].name} was watered of Day ${daysArray[j]} of week ${weekNumber} on Thursday`);
                } else if (daysArray[j] % 7 === 5) {
                    console.log(`${wateringPlants[i].name} was watered of Day ${daysArray[j]} of week ${weekNumber} on Friday`);
                } else if (daysArray[j] % 7 === 6) {
                    if ((daysArray[j] - 1) % 7 !== 6 || (daysArray[j] - 1) % 7 !== 0) {
                        console.log(`${wateringPlants[i].name} was watered on Day ${daysArray[j] - 1} of week ${weekNumber} on Friday ` + 
                                    `instead of Day ${daysArray[j]} on Saturday`)
                    }
                } else {
                    if ((daysArray[j] + 1) % 7 !== 6 || (daysArray[j] + 1) % 7 !== 0) {
                        if(daysArray[j] + 1 >= 84){
                            console.log(`End of Cycle`)
                        } else {
                            console.log(`${wateringPlants[i].name} was watered on Day ${daysArray[j] + 1} of week ${weekNumber} on Monday ` +
                                        `instead of Day ${daysArray[j]} on Sunday`)                        }
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