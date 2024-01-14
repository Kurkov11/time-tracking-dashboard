let dailyCurrentList = [];
let dailyPreviousList = [];

let monthlyCurrentList = [];
let monthlyPreviousList = [];

let weeklyCurrentList = [];
let weeklyPreviousList = [];

document.getElementById('weekly').style.fontWeight = '500'; //Initially selected
document.getElementById('weekly').style.color = 'white'; //Initially selected

//Update arrays with data from json file

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            dailyCurrentList.push(element.timeframes.daily.current)
            dailyPreviousList.push(element.timeframes.daily.previous)
            monthlyCurrentList.push(element.timeframes.monthly.current)
            monthlyPreviousList.push(element.timeframes.monthly.previous)
            weeklyCurrentList.push(element.timeframes.weekly.current)
            weeklyPreviousList.push(element.timeframes.weekly.previous)
        });
    });

// period onclick functions

document.getElementById('daily').onclick = function(){
    document.getElementById('daily').style.color = 'white';
    document.getElementById('daily').style.fontWeight = '500';
    document.getElementById('monthly').style.color = 'var(--pale-blue)';
    document.getElementById('monthly').style.fontWeight = '300';
    document.getElementById('weekly').style.color = 'var(--pale-blue)';
    document.getElementById('weekly').style.fontWeight = '300';
    updateTime('daily');
}
document.getElementById('monthly').onclick = function(){
    document.getElementById('monthly').style.color = 'white';
    document.getElementById('monthly').style.fontWeight = '500';
    document.getElementById('daily').style.color = 'var(--pale-blue)';
    document.getElementById('daily').style.fontWeight = '300';
    document.getElementById('weekly').style.color = 'var(--pale-blue)';
    document.getElementById('weekly').style.fontWeight = '300';
    updateTime('monthly');
}
document.getElementById('weekly').onclick = function(){
    document.getElementById('weekly').style.color = 'white';
    document.getElementById('weekly').style.fontWeight = '500';
    document.getElementById('monthly').style.color = 'var(--pale-blue)';
    document.getElementById('monthly').style.fontWeight = '300';
    document.getElementById('daily').style.color = 'var(--pale-blue)';
    document.getElementById('daily').style.fontWeight = '300';
    updateTime('weekly');
}

//Ellipsis hover states

document.getElementById('work-ellipsis-area').onmouseover = function(){
    document.getElementById('work-ellipsis').style.display = 'none';
    document.getElementById('work-bold-ellipsis').style.display = 'block';
}

document.getElementById('work-ellipsis-area').onmouseout = function(){
    document.getElementById('work-ellipsis').style.display = 'block';
    document.getElementById('work-bold-ellipsis').style.display = 'none';
}

document.getElementById('play-ellipsis-area').onmouseover = function(){
    document.getElementById('play-ellipsis').style.display = 'none';
    document.getElementById('play-bold-ellipsis').style.display = 'block';
}

document.getElementById('play-ellipsis-area').onmouseout = function(){
    document.getElementById('play-ellipsis').style.display = 'block';
    document.getElementById('play-bold-ellipsis').style.display = 'none';
}

document.getElementById('study-ellipsis-area').onmouseover = function(){
    document.getElementById('study-ellipsis').style.display = 'none';
    document.getElementById('study-bold-ellipsis').style.display = 'block';
}

document.getElementById('study-ellipsis-area').onmouseout = function(){
    document.getElementById('study-ellipsis').style.display = 'block';
    document.getElementById('study-bold-ellipsis').style.display = 'none';
}

document.getElementById('exercise-ellipsis-area').onmouseover = function(){
    document.getElementById('exercise-ellipsis').style.display = 'none';
    document.getElementById('exercise-bold-ellipsis').style.display = 'block';
}

document.getElementById('exercise-ellipsis-area').onmouseout = function(){
    document.getElementById('exercise-ellipsis').style.display = 'block';
    document.getElementById('exercise-bold-ellipsis').style.display = 'none';
}

document.getElementById('social-ellipsis-area').onmouseover = function(){
    document.getElementById('social-ellipsis').style.display = 'none';
    document.getElementById('social-bold-ellipsis').style.display = 'block';
}

document.getElementById('social-ellipsis-area').onmouseout = function(){
    document.getElementById('social-ellipsis').style.display = 'block';
    document.getElementById('social-bold-ellipsis').style.display = 'none';
}

document.getElementById('self-care-ellipsis-area').onmouseover = function(){
    document.getElementById('self-care-ellipsis').style.display = 'none';
    document.getElementById('self-care-bold-ellipsis').style.display = 'block';
}

document.getElementById('self-care-ellipsis-area').onmouseout = function(){
    document.getElementById('self-care-ellipsis').style.display = 'block';
    document.getElementById('self-care-bold-ellipsis').style.display = 'none';
}

//update time function used in period onclick

function updateTime(period){
    if(period == 'daily'){
        document.getElementById('work-hours').innerHTML = dailyCurrentList[0];
        document.getElementById('play-hours').innerHTML = dailyCurrentList[1];
        document.getElementById('study-hours').innerHTML = dailyCurrentList[2];
        document.getElementById('exercise-hours').innerHTML = dailyCurrentList[3];
        document.getElementById('social-hours').innerHTML = dailyCurrentList[4];
        document.getElementById('self-care-hours').innerHTML = dailyCurrentList[5];

        document.getElementById('work-previous').innerHTML = 'Yesterday - '+dailyPreviousList[0]+'hrs';
        document.getElementById('play-previous').innerHTML = 'Yesterday - '+dailyPreviousList[1]+'hrs';
        document.getElementById('study-previous').innerHTML = 'Yesterday - '+dailyPreviousList[2]+'hrs';
        document.getElementById('exercise-previous').innerHTML = 'Yesterday - '+dailyPreviousList[3]+'hrs';
        document.getElementById('social-previous').innerHTML = 'Yesterday - '+dailyPreviousList[4]+'hrs';
        document.getElementById('self-care-previous').innerHTML = 'Yesterday - '+dailyPreviousList[5]+'hrs';
    }

    if(period == 'weekly'){
        document.getElementById('work-hours').innerHTML = weeklyCurrentList[0];
        document.getElementById('play-hours').innerHTML = weeklyCurrentList[1];
        document.getElementById('study-hours').innerHTML = weeklyCurrentList[2];
        document.getElementById('exercise-hours').innerHTML = weeklyCurrentList[3];
        document.getElementById('social-hours').innerHTML = weeklyCurrentList[4];
        document.getElementById('self-care-hours').innerHTML = weeklyCurrentList[5];

        document.getElementById('work-previous').innerHTML = 'Last Week - '+weeklyPreviousList[0]+'hrs';
        document.getElementById('play-previous').innerHTML = 'Last Week - '+weeklyPreviousList[1]+'hrs';
        document.getElementById('study-previous').innerHTML = 'Last Week - '+weeklyPreviousList[2]+'hrs';
        document.getElementById('exercise-previous').innerHTML = 'Last Week - '+weeklyPreviousList[3]+'hrs';
        document.getElementById('social-previous').innerHTML = 'Last Week - '+weeklyPreviousList[4]+'hrs';
        document.getElementById('self-care-previous').innerHTML = 'Last Week - '+weeklyPreviousList[5]+'hrs';
    }

    if(period == 'monthly'){
        document.getElementById('work-hours').innerHTML = monthlyCurrentList[0];
        document.getElementById('play-hours').innerHTML = monthlyCurrentList[1];
        document.getElementById('study-hours').innerHTML = monthlyCurrentList[2];
        document.getElementById('exercise-hours').innerHTML = monthlyCurrentList[3];
        document.getElementById('social-hours').innerHTML = monthlyCurrentList[4];
        document.getElementById('self-care-hours').innerHTML = monthlyCurrentList[5];

        document.getElementById('work-previous').innerHTML = 'Last Month - '+monthlyPreviousList[0]+'hrs';
        document.getElementById('play-previous').innerHTML = 'Last Month - '+monthlyPreviousList[1]+'hrs';
        document.getElementById('study-previous').innerHTML = 'Last Month - '+monthlyPreviousList[2]+'hrs';
        document.getElementById('exercise-previous').innerHTML = 'Last Month - '+monthlyPreviousList[3]+'hrs';
        document.getElementById('social-previous').innerHTML = 'Last Month - '+monthlyPreviousList[4]+'hrs';
        document.getElementById('self-care-previous').innerHTML = 'Last Month - '+monthlyPreviousList[5]+'hrs';
    }
}
