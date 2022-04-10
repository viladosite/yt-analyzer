function langMenu(){
    let menu = document.getElementById('langOptions');
    menu.classList.toggle("none")
}

function changeLang(lang){
    let menu = document.getElementById('langOptions');
    let langName = document.getElementById('langName');
    let langFlag = document.getElementById('langFlag');

    menu.classList.toggle("none")
    langName.textContent = `${lang}`
    if (lang == 'pt-br'){
        langFlag.classList.remove('fa-flag-usa')
        langFlag.classList.add('fa-flag')
    }
    if (lang == 'en-us'){
        langFlag.classList.remove('fa-flag')
        langFlag.classList.add('fa-flag-usa')
    }
}

function searchChannel(){
    let channelURL = document.getElementById('channelSelect').value;
    let channelSplit = channelURL.split("https://www.youtube.com/channel/");
    let channelName = channelSplit[1];
    
    document.getElementById('channelTitle').innerHTML = channelName;
}