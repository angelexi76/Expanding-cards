

//const panels = document.querySelector('.panel')
//const panels = document.getElementById('panel')
//const panels = document.getElementsByClassName('.panel')

/*esta mueve todas las imagenes*/ 
const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
    //console.log(panel)
    panel.addEventListener('click', () => {
        
        panel.classList.add('active')


    })

});

function removeActiveClasses(){
  panel.forEach(panel =>{
      panel.classList.remove('active')
  
    })

    
}