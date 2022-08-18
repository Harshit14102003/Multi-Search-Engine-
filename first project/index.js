document.querySelector('.searchTerm').addEventListener('keyup',event =>{
const ip=event.target.value
let myArray=ip.split(" ")
let foo=myArray[0].toLowerCase()
let result=myArray.join(" ")
let myWord=myArray[0].toLowerCase()
let cut=myArray.splice(1)
let to_be_searched=cut.join(" ")
if(myWord!=='google' && myWord!=='youtube' && myWord!=='docs' && myWord!=='slides' && myWord!=='sheets' &&myWord!=='github' && myWord!=="spotify"){
    myWord='google'
}
console.log(myWord)
console.log(foo)
if(event.key==='Enter'){
    if(myWord==='youtube'){
        window.location = `https://www.youtube.com/results?q=${to_be_searched}`;
    }
    if(myWord==='docs'){
        window.location = `https://docs.google.com/document/?q=${to_be_searched}`
    }
    if(myWord==='google' && foo==='google'){
        window.location=`https://www.google.com/search?q=${to_be_searched}`
    }
    if(myWord==='google' && foo!=='google'){
         window.location=`https://www.google.com/search?q=${result}`
    }
    if(myWord==='slides'){
        window.location=`https://docs.google.com/presentation/u/0/?tgif=d&q=${to_be_searched}`
   }
   if(myWord==='sheets'){
    window.location=`https://docs.google.com/spreadsheets/u/0/?tgif=d&q=${to_be_searched}`
}
if(myWord==='github'){
    window.location=`https://github.com/search?q=${to_be_searched}`
}
if(myWord==='spotify'){
    window.location=`https://open.spotify.com/search/${to_be_searched}`
}
}
})