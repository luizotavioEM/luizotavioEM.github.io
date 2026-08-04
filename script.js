const entrar = document.getElementById("entrar");
const inicio = document.getElementById("inicio");
const conteudo = document.getElementById("conteudo");

entrar.addEventListener("click",()=>{

    inicio.style.display="none";

    conteudo.style.display="block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const abrir = document.getElementById("abrir");

abrir.addEventListener("click",()=>{

    abrir.innerHTML="❤️ Feliz Aniversário ❤️";

    abrir.style.background="#ff2c91";

    criarFogos();

});

function criarCoracao(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(criarCoracao,500);

const imagens=document.querySelectorAll(".fotos img");

imagens.forEach(img=>{

    img.addEventListener("click",()=>{

        const fundo=document.createElement("div");

        fundo.style.position="fixed";

        fundo.style.left="0";

        fundo.style.top="0";

        fundo.style.width="100%";

        fundo.style.height="100%";

        fundo.style.background="rgba(0,0,0,.9)";

        fundo.style.display="flex";

        fundo.style.justifyContent="center";

        fundo.style.alignItems="center";

        fundo.style.cursor="pointer";

        fundo.style.zIndex="9999";

        const foto=document.createElement("img");

        foto.src=img.src;

        foto.style.maxWidth="90%";

        foto.style.maxHeight="90%";

        foto.style.borderRadius="20px";

        foto.style.boxShadow="0 0 40px #000";

        fundo.appendChild(foto);

        document.body.appendChild(fundo);

        fundo.onclick=()=>{

            fundo.remove();

        }

    });

});

function criarFogos(){

    for(let i=0;i<120;i++){

        const p=document.createElement("div");

        p.style.position="fixed";

        p.style.left="50%";

        p.style.top="50%";

        p.style.width="8px";

        p.style.height="8px";

        p.style.borderRadius="50%";

        p.style.background=`hsl(${Math.random()*360},100%,60%)`;

        p.style.pointerEvents="none";

        p.style.zIndex="9999";

        const angulo=Math.random()*Math.PI*2;

        const distancia=150+Math.random()*250;

        p.animate([

            {
                transform:"translate(0,0)",
                opacity:1
            },
            {
                transform:`translate(${Math.cos(angulo)*distancia}px,${Math.sin(angulo)*distancia}px)`,

                opacity:0
            }

        ],{

            duration:1800,

            easing:"ease-out"

        });

        document.body.appendChild(p);

        setTimeout(()=>{

            p.remove();

        },1800);

    }

}
