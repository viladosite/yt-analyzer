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
    var channelURL = document.getElementById('channelSelect').value;
    if (channelURL == '' || channelURL == null){
        document.getElementById('tabContent').innerHTML = 'You need to provide a valid channel URL to search';
    } else {
        if (channelURL.includes('https://www.youtube.com/channel/')){
            var channelSplit = channelURL.split("https://www.youtube.com/channel/");
        }
        else if (channelURL.includes('https://www.youtube.com/c/')){
            var channelSplit = channelURL.split("https://www.youtube.com/c/");
        }

        var channelName = channelSplit[1];
        var templateAbout = `
        <div id="overAbout">
            About ${channelName} channel
            <br>
            <br>
            <br>
        </div>
        <div id="overBasicData">
            Visualizações Totais<br>
            Inscritos<br>
            Quantidade de séries/playlists<br>
            <br>
            MÉDIAS<br>
            [MÉDIA] Duração dos vídeos<br>
            [MÉDIA] Likes dos vídeos<br>
            [MÉDIA] Comentários nos vídeos<br>
            <br>
            CAMPEÕES<br>
            [TOP] Vídeo mais assistido<br>
            [TOP] Vídeo mais comentado<br>
            [TOP] Vídeo mais curtido<br>
        </div>
        `;

        document.getElementById('channelTitle').innerHTML = '- ' + channelName;
        document.getElementById('tabContent').innerHTML = templateAbout;
    }
}


function searchContent(){
/*     
    <div id="overAbout">
        About the channel
    </div>
    <div id="overBasicData">
        Visualizações Totais<br>
        Inscritos<br>
        Quantidade de séries/playlists<br>
        <br>
        MÉDIAS<br>
        [MÉDIA] Duração dos vídeos<br>
        [MÉDIA] Likes dos vídeos<br>
        [MÉDIA] Comentários nos vídeos<br>
        <br>
        CAMPEÕES<br>
        [TOP] Vídeo mais assistido<br>
        [TOP] Vídeo mais comentado<br>
        [TOP] Vídeo mais curtido<br>
        
    </div>
*/
}