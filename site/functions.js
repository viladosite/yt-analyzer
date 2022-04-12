// MENU FUNCTIONS

function toggleMenu(menuName){
    let menu = document.getElementById(menuName);
    menu.classList.toggle("none")
}


// SEARCH FUNCTIONS
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
                    <h2>${channel.name}</h2>
                    <br>
                    <h3>Creation Date:</h3>
                    <p>${channel.dateCreated}</p>
                    <h3>Total views:</h3>
                    <p>${channel.totalViews}</p>
                    <h3>Videos Count:</h3>
                    <p>${channel.videosQt}</p>
                    <h3>Subscriptions:</h3>
                    <p>${channel.subscriptions}</p>
                </div>
                <div id="overTabDetails">
                    <h3>Description:</h3>
                    <p>${channel.description}</p>
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