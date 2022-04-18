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
    return fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=id,snippet,brandingSettings,contentDetails,statistics,topicDetails&maxResults=50&id=${channelId}&key=${userKey}`).then(result => result.json());
}

async function getPlaylistFromChannel(userKey, channelId){
    return fetch(`https://www.googleapis.com/youtube/v3/playlists?part=id,snippet,status&maxResults=50&channelId=${channelId}&key=${userKey}`).then(result => result.json());
}

async function getVideosFromPlaylist(userKey, playlistId){
    return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=id,snippet,contentDetails,status&maxResults=50&playlistId=${playlistId}&key=${userKey}`).then(result => result.json());
}




// MODEL FUNCTIONS

function getChannelModel(){
    return fetch('/channel').then(result => result.json());
}

function setChannel(channelObj){
    var channel = [];

    channel.push({
        id:channelObj.items[0].id,
        customUrl:channelObj.items[0].snippet.customUrl,
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

function setPlaylist(playlistObj){
    var playlist = [];

    playlist.push({
        id:playlistObj.items.id,
        publishedAt:playlistObj.items.snippet.publishedAt,
        title:playlistObj.items.snippet.title,
        description:playlistObj.items.snippet.description,
        thumbnail:playlistObj.items.snippet.thumbnails.default.url,
        averageVideoTime:"int",
        averageVideoLikes:"int",
        averageVideoComments:"int"
    })
}