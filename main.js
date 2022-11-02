'use strict';

/* Fonction active link */

const activeLink = function () {
    const links = document.querySelectorAll('.link');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            for (let j = 0; j < links.length; j++) {
                if (links[j].classList.contains('active-link')) {
                    links[j].classList.remove('active-link');
                    links[i].classList.add('active-link')
                }
            }
        })
    }
}
activeLink();

/* Fonction Slide */

const slide = function () {
    const next = document.querySelector('.fa-square-caret-right');
    const previous = document.querySelector('.fa-square-caret-left');
    const img = document.querySelector('.img-slide');
    const slideText = document.querySelector('.slide-text-1');
    const titre = document.querySelector('.slide-text-1-titre');
    const content = document.querySelector('.slide-text-1-content');
    console.log(titre.textContent);
    let compteur = 1;
    /* Changement text slide */

    const nextFunc = function () {
        compteur += 1;
        if (compteur > 3) {
            compteur = 1;
        };
        img.id = `img-slide-${compteur}`;
        if (compteur === 2) {
            titre.textContent = 'Arrêter de brûler notre terre :';
            content.innerHTML = 'La terre est notre maison à tous. protegeant la. Il faut faire des reboisements.'
        } else if (compteur === 1) {
            titre.textContent = 'Le feu de brousse est une danger :';
            content.innerHTML = 'Le réchauffement et la secheresse est dûe aux feux de brousse. Il faut lutter contre ce problème.'
        } else if (compteur === 3) {
            titre.textContent = 'Les solutions pour lutter contre les feux de brousses :';
            content.innerHTML = 'La partage rapide des informations grâce aux NTEC présente une solution. Les téchnologies apportent beaucoup de solution.'
        }
    };
    const prevFunc = function () {
        compteur -= 1;
        if (compteur < 1) {
            compteur = 3;
        };
        img.id = `img-slide-${compteur}`;
        if (compteur === 2) {
            titre.textContent = 'Arrêter de brûler notre terre.';
            content.innerHTML = 'La terre est notre maison à tous, protegeant la. Il faut faire des reboisements.'
        } else if (compteur === 1) {
            titre.textContent = 'Le feu de brousse est une danger :';
            content.innerHTML = 'Le réchauffement et la secheresse est dûe aux feux de brousse. Il faut lutter contre ce problème.'
        } else if (compteur === 3) {
            titre.textContent = 'Les solutions pour lutter contre les feux de brousses :';
            content.innerHTML = 'La partage rapide des informations grâce aux NTEC présente une solution. Les téchnologies apportent beaucoup de solution.'
        }
    }
    const blurEffect = function () {
        if (img.classList.contains('img-blur')) {
            img.classList.add('img-blur-1');
            img.classList.remove('img-blur')
        } else if (img.classList.contains('img-blur-1')) {
            img.classList.add('img-blur');
            img.classList.remove('img-blur-1');
        }
    }
    const textAnim = function () {
        if (slideText.classList.contains('slide-text-1')) {
            slideText.classList.remove('slide-text-1');
            slideText.classList.add('slide-text-2');
        } else {
            slideText.classList.remove('slide-text-2');
            slideText.classList.add('slide-text-1');
        }
    }
    next.addEventListener('click',nextFunc);
    previous.addEventListener('click',prevFunc);
    next.addEventListener('click',blurEffect);
    previous.addEventListener('click',blurEffect);
    next.addEventListener('click',textAnim);
    previous.addEventListener('click',textAnim);

}
slide();

/* Fonction menu deroulant */

const menuDeroulant = function () {
    const btnDeroulant = document.querySelector('.fa-bars');
    const menu = document.querySelector('.menu-deroulant-hid');
    console.log(menu.classList.contains('menu-deroulant-content'));
    btnDeroulant.addEventListener('click',function () {
        if (menu.classList.contains('menu-deroulant-content')) {
            menu.classList.add('menu-deroulant-content-active');
            menu.classList.remove('menu-deroulant-content')
        } else {
            menu.classList.remove('menu-deroulant-content-active');
            menu.classList.add('menu-deroulant-content')
        }
    }) 
}
menuDeroulant();

/* Fonction smooth scroll */

const smooth = function () {
    const btnScroll = document.querySelector('.btn-scroll');
    const feuBrousse = document.querySelector('.btn-contact-1'); 
    const feuBrousseCont = document.querySelector('#bushfire-id');
    const accueil = document.querySelector('.accueil');
    const article = document.querySelector('.article');
    const blog = document.querySelector('.blog');
    const propos = document.querySelector('.propos');
    const accueilCont = document.querySelector('#accueil-id');
    const articleCont = document.querySelector('#article-id');
    const blogCont = document.querySelector('#blog-id');
    const propoCont = document.querySelector('#propos-id');
    const accueil1 = document.querySelector('.accueil1');
    const article1 = document.querySelector('.article1');
    const blog1 = document.querySelector('.blog1');
    const propos1 = document.querySelector('.propos1');
    accueil.addEventListener('click', function () {
        accueilCont.scrollIntoView({behavior:"smooth"})
    })
    btnScroll.addEventListener('click',function () {
        accueilCont.scrollIntoView({behavior:"smooth"})
    })
    article.addEventListener('click', function () {
        articleCont.scrollIntoView({behavior:"smooth"})
    })
    blog.addEventListener('click',function () {
        blogCont.scrollIntoView({behavior:"smooth"})
    })
    propos.addEventListener('click', function () {
        propoCont.scrollIntoView({behavior:"smooth"})
    })
    article1.addEventListener('click', function () {
        articleCont.scrollIntoView({behavior:"smooth"})
    })
    blog1.addEventListener('click',function () {
        blogCont.scrollIntoView({behavior:"smooth"})
    })
    propos1.addEventListener('click', function () {
        propoCont.scrollIntoView({behavior:"smooth"})
    })
    feuBrousse.addEventListener('click',function () {
        feuBrousseCont.scrollIntoView({behavior:"smooth"})
    })
}
smooth()