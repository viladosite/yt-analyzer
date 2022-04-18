// LANG MENU FUNCTIONS
function langMenu(){
    let menu = document.getElementById('langOptions');
    menu.classList.toggle("none")
}




// TABS FUNCTIONS
// channelObj: json of channel to load on tabs
async function loadTabs(channelObj){
    let key = getKey();
    var playlists = await getPlaylistFromChannel(key, channelObj.id);
    var tabOverTemplate = `
        <div id="overTabTitle">
            <h2>About ${channelObj.name}'s channel</h2>
        </div>
        <div id="overTabContent">
            <div id="overTabBasic">
                <a href="https://www.youtube.com/channel/${channelObj.id}" target="_blank">
                    <img src="${channelObj.avatar}">
                    <h2>${channelObj.name}</h2>
                </a>
                <br>
                <h3>Creation Date:</h3>
                <p>${new Date(channelObj.dateCreated).toLocaleDateString('pt-BR')}</p>
                <h3>Total views:</h3>
                <p>${Number(channelObj.totalViews).toLocaleString('pt-BR')}</p>
                <h3>Videos Count:</h3>
                <p>${Number(channelObj.videosQt).toLocaleString('pt-BR')}</p>
                <h3>Subscriptions:</h3>
                <p>${Number(channelObj.subscriptions).toLocaleString('pt-BR')}</p>
            </div>
            <div id="overTabDetails">
                <h3>Description:</h3>
                <p>${channelObj.description}</p>
            </div>
            <div id="id="overTabNumbers"">
                <h3>Links:</h3>
                <p>${channelObj.link}</p>
                <h3>Average Video Time:</h3>
                <p>${channelObj.averageVideoTime}</p>
                <h3>Average Video Likes:</h3>
                <p>${channelObj.averageVideoLikes}</p>
                <h3>Average Video Comments:</h3>
                <p>${channelObj.averageVideoComments}</p>
            </div>
        </div>
    `;
    var tabPlaylistsTemplate = `
        <div>
            <p>ID: </p>
            <p>Published at </p>
            <p>Title: </p>
            <p>Description: </p>
            <p>Thumbnail: </p>
            <p>AverageVideoTime: </p>
            <p>AverageVideoLikes: </p>
            <p>AverageVideoComments: </p>
        </div>
    `;



    document.getElementById(`channelTitle`).textContent = ' - ' + channelObj.name;
    document.getElementById(`tab-overview-content`).innerHTML = tabOverTemplate;
    document.getElementById(`tab-playlists-content`).innerHTML = tabPlaylistsTemplate;
    document.getElementById(`tab-graphics-content`).innerHTML = "Coming soon: Graphics and Analysis";
    
    document.getElementById(`tab-overview`).classList.add('activeTab');
}

function tabChange(tabId){
    var getTabs = document.getElementById(`tabs`).children;
    var tabsArray = Array.prototype.slice.call(getTabs);
    document.getElementById(`tab-start-content`).classList.add('none');

    tabsArray.forEach(element => {
        if (element.id.includes(tabId)){
            document.getElementById(`${element.id}`).classList.add('activeTab');
            document.getElementById(`${element.id}-content`).classList.remove('none');
        } else {
            document.getElementById(`${element.id}`).classList.remove('activeTab');
            document.getElementById(`${element.id}-content`).classList.add('none');
        }
    });
}


// SEARCH FUNCTIONS
async function searchChannel(){
    var channelURL = document.getElementById('channelSelect').value;
    let key = getKey();
    var channel = [];

    if (channelURL == '' || channelURL == null){
        document.getElementById('tabContent').innerHTML = 'You need to provide a valid channel URL to search';
    } else {
        var id = getIdFromURL(channelURL);
        var channelData = await getChannelData(key, id);
        channel = setChannel(channelData)[0];
    }
    loadTabs(channel);
    tabChange('overview');
}


// DRAW ITEMS FUNCTIONS
function drawPlaylist(playlistObj){
    
/*     
    <div>
        <p>ID: </p>
        <p>Published at </p>
        <p>Title: </p>
        <p>Description: </p>
        <p>Thumbnail: </p>
        <p>AverageVideoTime: </p>
        <p>AverageVideoLikes: </p>
        <p>AverageVideoComments: </p>
    </div>
*/

}



// OBJECT SET FUNCTIONS
function setChannelObj(key, channelId){
    let rawChannel = getChannelData(key, channelId);
    let rawPlaylists = getPlaylistFromChannel(key, channelId);
    let rawVideos = '';


    
}