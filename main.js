let week = {
    'Monday': [],
    'Tuesday': [],
    'Wednesday': [],
    'Thursday': [],
    'Friday': [],
    'Saturday': [],
    'Sunday': []
}

let wateringPlants;

let addExtraWeek = ( week  => {
    for (let i = 1; i <= 3; i++) {
        let addSevenDays = 7;    
        let weekNumber = 'Week ' + i;
        Object.keys(week).forEach( (day , j) => {
            let obj = {};
            let addOneDay = 1;
            if (i === 1) {  
                obj[weekNumber] = 'Day '+ (j + addOneDay);                
            } else {
                obj[weekNumber] = 'Day ' + (Number(week[day][i-2]['Week '+ (i - 1)].match(/\d+/g).map(Number)) + addSevenDays);                
            }
            week[day].push(obj);
        })
    }
    // console.log(week);
})

addExtraWeek(week)

fetch('https://gist.githubusercontent.com/lenguage101/315dfdebc2c010ee899a2ddcaf79ed31/raw/71cde9402a8cf5753aa14f757eecfc24eb749bf3/apprentice-data.json')
    .then((resp) => {
        return resp.json();
    })
    .then((plants) => {
        wateringPlants = plants;
        plants.forEach( (plant, i) => {
            let nums = plant.water_after.match(/\d+/g).map(Number);
            console.log(nums[0])
            // if ((nums % 7 === 0) && 
            //     i === 0 || i === 4 || i === 8) {
            //         console.log(`${plant.name} has been water every week, ${nums[0]}`)
            // } else if ((nums % 14 === 0) && 
            //     i === 1 || i === 2 || i === 7 || i === 9) {
            //         console.log(`${plant.name} has been water every 2 weeks, ${nums[0]}`)
            // }
        })
        for (let i = 1; i <= 84; i++) {
            for (let j = 0; j < wateringPlants.length; j++) {
               if (Number(wateringPlants[i].water_after.match(/\d+/g).map(Number)) % 7 === 1){
                    console.log(`${i} has a reminder of 1`)
                } else if (Number(wateringPlants[i].water_after.match(/\d+/g).map(Number)) % 7 === 2){
                    console.log(`${i} has a reminder of 2`);
                } else if (Number(wateringPlants[i].water_after.match(/\d+/g).map(Number)) % 7 === 3){
                    console.log(`${i} has a reminder of 3`);
                } else if (Number(wateringPlants[i].water_after.match(/\d+/g).map(Number)) % 7 === 4){
                    console.log(`${i} has a reminder of 4`);
                } else if (Number(wateringPlants[i].water_after.match(/\d+/g).map(Number)) % 7 === 5){
                    console.log(`${i} has a reminder of 5`);
                } else if (Number(wateringPlants[i].water_after.match(/\d+/g).map(Number)) % 7 === 6){
                    console.log(`${i} has a reminder of 6`);
                } else {
                    console.log(`${i} has a reminder of 0`);
                } 
            }  
            
        }
    })
    .catch( err => {
        console.log(err)
    })


//Adds number to the corresponding day
