const downloadAudio = async (path, filename) => {
    const response = await fetch(path)


    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename you want
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    console.log(`${filename} se está descargando`);
}

const numeroDeCanciones = 30

for(let i=0; i<numeroDeCanciones; i++){
    if(i+1==4){
      downloadAudio(`./${i+1}.mp3`,i+1)
    } else{
    downloadAudio(`./${i+1}.m4a`,i+1)
    }
}
