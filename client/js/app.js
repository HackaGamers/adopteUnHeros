const showHeros1 = document.getElementById("heros1")
const showHeros2 = document.getElementById('heros2')
const showHeros3 = document.getElementById('heros3')
const showHeros4 = document.getElementById('heros4')
const showHeros5 = document.getElementById('heros5')
const showHeros6 = document.getElementById('heros6')
const showHeros7 = document.getElementById('heros7')
const showHeros8 = document.getElementById('heros8')
const showHeros9 = document.getElementById('heros9')
const showHeros10 = document.getElementById('heros10')
const showHeros11 = document.getElementById('heros11')
const showHeros12 = document.getElementById('heros12')
const showHeros13 = document.getElementById('heros13')
const showHeros14 = document.getElementById('heros14')
const showHeros15 = document.getElementById('heros15')
const showHeros16 = document.getElementById('heros16')
const showHeros17 = document.getElementById('heros17')
const showHeros18 = document.getElementById('heros18')
const showHeros19 = document.getElementById('heros19')
const showHeros20 = document.getElementById('heros20')
const showHeros21 = document.getElementById('heros21')
const showHeros22 = document.getElementById('heros22')
const showHeros23 = document.getElementById('heros23')
const showHeros24 = document.getElementById('heros24')
const showHeros25 = document.getElementById('heros25')
const showHeros26 = document.getElementById('heros26')
const showHeros27 = document.getElementById('heros27')
const showHeros28 = document.getElementById('heros28')
const showHeros29 = document.getElementById('heros29')
const showHeros30 = document.getElementById('heros30')
const showHeros31 = document.getElementById('heros31')

const showDetailHero1 = document.getElementById('detailHero1')



const url = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json"

window.fetch(url)

.then((res) => {
	return res.json()
})
.then((res) => {


	showHeros1.innerHTML = `<img src="${res[0].images.sm}">`


	showHeros2.innerHTML = `<img class="myBtn" src="${res[1].images.sm}">`



	showHeros3.innerHTML = `<img id="myBtn" src="${res[2].images.sm}">`
	showHeros4.innerHTML = `<img id="myBtn" src="${res[3].images.sm}">`
	showHeros5.innerHTML = `<img id="myBtn" src="${res[4].images.sm}">`
	showHeros6.innerHTML = `<img id="myBtn" src="${res[5].images.sm}">`
	showHeros7.innerHTML = `<img id="myBtn" src="${res[6].images.sm}">`
	showHeros8.innerHTML = `<img id="myBtn" src="${res[7].images.sm}">`
	showHeros9.innerHTML = `<img id="myBtn" src="${res[8].images.sm}">`
	showHeros10.innerHTML = `<img id="myBtn" src="${res[9].images.sm}">`
	showHeros11.innerHTML = `<img id="myBtn" src="${res[10].images.sm}">`
	showHeros12.innerHTML = `<img id="myBtn" src="${res[11].images.sm}">`
	showHeros13.innerHTML = `<img id="myBtn" src="${res[12].images.sm}">`
	showHeros14.innerHTML = `<img id="myBtn" src="${res[13].images.sm}">`
	showHeros15.innerHTML = `<img id="myBtn" src="${res[14].images.sm}">`
	showHeros16.innerHTML = `<img id="myBtn" src="${res[15].images.sm}">`
	showHeros17.innerHTML = `<img id="myBtn" src="${res[16].images.sm}">`
	showHeros18.innerHTML = `<img id="myBtn" src="${res[17].images.sm}">`
	showHeros19.innerHTML = `<img id="myBtn" src="${res[18].images.sm}">`
	showHeros20.innerHTML = `<img id="myBtn" src="${res[19].images.sm}">`
	showHeros21.innerHTML = `<img id="myBtn" src="${res[20].images.sm}">`
	showHeros22.innerHTML = `<img id="myBtn" src="${res[21].images.sm}">`
	showHeros23.innerHTML = `<img id="myBtn" src="${res[22].images.sm}">`
	showHeros24.innerHTML = `<img id="myBtn" src="${res[23].images.sm}">`
	showHeros25.innerHTML = `<img id="myBtn" src="${res[24].images.sm}">`
	showHeros26.innerHTML = `<img id="myBtn" src="${res[25].images.sm}">`
	showHeros27.innerHTML = `<img id="myBtn" src="${res[26].images.sm}">`
	showHeros28.innerHTML = `<img id="myBtn" src="${res[27].images.sm}">`
	showHeros29.innerHTML = `<img id="myBtn" src="${res[28].images.sm}">`
	showHeros30.innerHTML = `<img id="myBtn" src="${res[29].images.sm}">`
	showHeros31.innerHTML = `<img id="myBtn" src="${res[30].images.sm}">`



showDetailHero1.innerHTML = `<div class="modal-content">
            <span class="close">&times;</span>
            <h2>${res.name}</h2>
            <img src="http://via.placeholder.com/480x640">
            <p> je m'appelle ${res.name} et je suis un  ${res.appearance.gender}.
Je suis un ${res.appearance.race}, je mesure ${res.appearance.height[1]}.
Je pèse ${res.appearance.weight[1]}. Je suis un peu gros mais confortable. 
J'ai les yeux ${res.appearance.eyeColor}, et les cheveux ${res.appearance.hairColor}. Mon travail est ${res.work.occupation}. J'ai fait ma première apparition dans  ${res.biography.firstAppearance}</p>
        </div>`



})

