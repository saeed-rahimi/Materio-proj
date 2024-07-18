let hideTimeout;

function showDiv() {
    clearTimeout(hideTimeout);
    document.getElementById('myDiv').style.display = 'block';
}

function hideDiv() {
    hideTimeout = setTimeout(function() {
        document.getElementById('myDiv').style.display = 'none';
    }, 200); // Delay to allow moving from link to div
}

document.getElementById('myLink').addEventListener('mouseenter', showDiv);
document.getElementById('myLink').addEventListener('mouseleave', hideDiv);
document.getElementById('myDiv').addEventListener('mouseenter', showDiv);
document.getElementById('myDiv').addEventListener('mouseleave', hideDiv);