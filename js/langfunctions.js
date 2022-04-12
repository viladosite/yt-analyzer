// LANGUAGE OPTIONS

function changeLang(lang){
    let menu = document.getElementById('langOptions');
    let langName = document.getElementById('langName');
    let langFlag = document.getElementById('langFlag');

    menu.classList.toggle("none")
    langName.textContent = `${lang}`
    if (lang == 'pt-br'){
        document.documentElement.setAttribute("lang", 'pt-br');
        langFlag.classList.remove('fa-flag-usa')
        langFlag.classList.add('fa-flag')
    }
    if (lang == 'en-us'){
        document.documentElement.setAttribute("lang", 'en-us');
        langFlag.classList.remove('fa-flag')
        langFlag.classList.add('fa-flag-usa')
    }
}

function getLangTerm(slug){
    var lang = '';
    var term = slug;
    
    if (document.documentElement.lang === "en-us") { lang = 'en-us' }
    else if (document.documentElement.lang === "pt-br") { lang = 'pt-br' }
    
    var langData = fetch(`/translations/${lang}.json`).then(result => result.json());
    var translatedTerm = langData.term;

    return translatedTerm;

}