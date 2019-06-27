//dom calling

const sidenMenu = document.querySelectorAll('.sidemenu-item')


for(i=0;i<sidenMenu.length;i++)
{
    
    sidenMenu[i].addEventListener('click',currentThis)
}

function currentThis(){
    for(i=0;i<sidenMenu.length;i++)
    {
        sidenMenu[i].classList.remove('active');
    }
    this.classList.add('active');

    document.getElementById('mainBoard').classList.add('current');
    $('#mainBoard').load(this.getAttribute('data-link'));

}