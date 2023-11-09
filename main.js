const $portafolio = document.querySelector(".sec-portafolio-js");
const $modalImgPortafolio = document.querySelector('.img-modal-js')

$portafolio.addEventListener('click', (e)=>{
    //console.log(e.target.classList);
    if(e.target.classList.contains('img-btn-modal-js')){
//SRC

        let urlImg= e.target.attributes[0].nodeValue;
//add modal
        $modalImgPortafolio.src = urlImg;
    }
});
