const x = document.getElementById('x');
const btn = document.getElementById('btn');
const char = document.getElementById('char');

btn.addEventListener('click', myfun)

async function myfun() {
    await fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(data => {
            x.innerHTML = `"${data.quote}"`;
            char.innerHTML = `"${data.character}"`;
        })

}
//API used:AnimeChan
//Tutorial referred:https://www.youtube.com/watch?v=aUPeASfr944&ab_channel=DeepakKumar