// MENU FUNCTIONS

function toggleMenu(menuName){
    let menu = document.getElementById(menuName);
    menu.classList.toggle("none")
}


// LANGUAGE OPTIONS

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
    var key = document.getElementById('ytKey').value;;
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



async function getChannelData(userKey, channelId){
    return fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=id,snippet,brandingSettings,contentDetails,statistics,topicDetails&id=${channelId}&key=${userKey}`).then(result => result.json());
}



// MODEL FUNCTIONS

function getChannelModel(){
    return fetch('/channel').then(result => result.json());
}

function setChannel(channelObj){
    var channel = [];

    channel.push({
        name:channelObj.items[0].snippet.title,
        description:channelObj.items[0].snippet.description,
        dateCreated:channelObj.items[0].snippet.publishedAt,
        totalViews:channelObj.items[0].statistics.viewCount,
        videosQt:channelObj.items[0].statistics.videoCount,
        subscriptions:channelObj.items[0].statistics.subscriberCount,
        links:["string", "string", "string"],
        avatar:channelObj.items[0].snippet.thumbnails.default.url,
        averageVideoTime:"int",
        averageVideoLikes:"int",
        averageVideoComments:"int"
    })
    
    return channel;
}



async function searchChannel(){
    var channelURL = document.getElementById('channelSelect').value;
    var key = getKey();
    var channel = [];

    if (channelURL == '' || channelURL == null || key == '' || key == null){
        document.getElementById('tabContent').innerHTML = 'You need to provide a valid Youtube Key and channel URL to search';
    } else {
        var id = getIdFromURL(channelURL);
        var channelData = await getChannelData(key, id);
        channel = setChannel(channelData)[0];

        var templateAbout = `
            <div id="overTabTitle">
                <h2>About ${channel.name}'s channel</h2>
            </div>
            <div id="overTabContent">
                <div id="overTabBasic">
                    <img src="${channel.avatar}">
                    <p>${channel.name}</p>
                </div>
                <div id="overTabDetails">
                    <h3>Description:</h3>
                    <p>${channel.description}</p>
                    <h3>Creation Date:</h3>
                    <p>${channel.dateCreated}</p>
                    <h3>Total views:</h3>
                    <p>${channel.totalViews}</p>
                    <h3>Videos Count:</h3>
                    <p>${channel.videosQt}</p>
                    <h3>Subscriptions:</h3>
                    <p>${channel.subscriptions}</p>
                </div>
                <div id="id="overTabNumbers"">
                    <h3>Links:</h3>
                    <p>${channel.link}</p>
                    <h3>Average Video Time:</h3>
                    <p>${channel.averageVideoTime}</p>
                    <h3>Average Video Likes:</h3>
                    <p>${channel.averageVideoLikes}</p>
                    <h3>Average Video Comments:</h3>
                    <p>${channel.averageVideoComments}</p>
                </div>
            </div>
        `;

        console.log(channel);
        document.getElementById('channelTitle').innerHTML = '- ' + channel.name;
        document.getElementById('tabContent').innerHTML = templateAbout;
    }
}


function searchContent(){

}

function getVideo(id){
    
}