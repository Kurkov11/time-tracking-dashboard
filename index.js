
fetch('data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            console.log(element.title);
        });
    });

document.getElementById('daily').onclick = function(){
    document.getElementById('daily').style.color = 'white';
    document.getElementById('daily').style.fontWeight = '500';
    document.getElementById('monthly').style.color = 'var(--pale-blue)';
    document.getElementById('monthly').style.fontWeight = '300';
    document.getElementById('weekly').style.color = 'var(--pale-blue)';
    document.getElementById('weekly').style.fontWeight = '300';
}
document.getElementById('monthly').onclick = function(){
    document.getElementById('monthly').style.color = 'white';
    document.getElementById('monthly').style.fontWeight = '500';
    document.getElementById('daily').style.color = 'var(--pale-blue)';
    document.getElementById('daily').style.fontWeight = '300';
    document.getElementById('weekly').style.color = 'var(--pale-blue)';
    document.getElementById('weekly').style.fontWeight = '300';
}
document.getElementById('weekly').onclick = function(){
    document.getElementById('weekly').style.color = 'white';
    document.getElementById('weekly').style.fontWeight = '500';
    document.getElementById('monthly').style.color = 'var(--pale-blue)';
    document.getElementById('monthly').style.fontWeight = '300';
    document.getElementById('daily').style.color = 'var(--pale-blue)';
    document.getElementById('daily').style.fontWeight = '300';
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


