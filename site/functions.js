// LANG MENU FUNCTIONS

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

// GET DATA FUNCTIONS


function getKey(){
    var key = 'AIzaSyCrPAYBEoOGMNbzGyaVCGiF7U32XfHdO9I&=';
    return key;
}


function getIdFromURL(url){
    if (url.includes('https://www.youtube.com/channel/')){
        var channelId = url.split("https://www.youtube.com/channel/");
    }
    else if (url.includes('https://www.youtube.com/c/')){
        var channelId = url.split("https://www.youtube.com/c/");
    }
    return channelId;
}



async function getChannelData(channelId, userKey){
    return fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=id,snippet,brandingSettings,contentDetails,statistics,topicDetails&id=${channelId}&key=${userKey}`).then(result => result.json());
}



// MODEL FUNCTIONS

function getChannelModel(){
    return fetch('/channel').then(result => result.json());
}

function setChannel(channelObj){
    var rawChannel = channelObj;
    var channel = getChannelModel();

    
}



async function searchChannel(){
    var channelURL = document.getElementById('channelSelect').value;
    var key = getKey();

    if (channelURL == '' || channelURL == null){
        document.getElementById('tabContent').innerHTML = 'You need to provide a valid channel URL to search';
    } else {
        var id = getIdFromURL(channelURL);
        var channelData = await getChannelData(id, key);

        var templateAbout = `
            <div id="overAbout">
                About ${id} channel
                <br>
                <br>
                <br>
            </div>
            <div id="overBasicData">
                ${channelData}
            </div>
        `;

        document.getElementById('channelTitle').innerHTML = '- ' + id;
        document.getElementById('tabContent').innerHTML = templateAbout;
    }
}


function searchContent(){

}

function getVideo(id){
    
}