const tabId = [] 
for (let i = 0; i<= 50; i++) {
		tabId[i] = i+1
}
	
console.log(tabId)


 const profileHero = document.getElementById('heros')


		fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/234.json')
		.then(res => res.json())


		.then(resJson => {
			
			profileHero.innerHTML =`<div class="profile">
			<p> je m'appelle ${resJson.name} et je suis un  ${resJson.appearance.gender}.
			Je suis un ${resJson.appearance.race}, je mesure ${resJson.appearance.height[1]}.
			Je pèse ${resJson.appearance.weight[1]}. Je suis un peu gros mais confortable. 
			J'ai les yeux ${resJson.appearance.eyeColor}, et les cheveux ${resJson.appearance.hairColor}. Mon travail est 	${resJson.work.occupation}. J'ai fait ma première apparition dans  ${resJson.biography.firstAppearance};
			Voici ma photo :p </p>
			<img src = "${resJson.images.sm}"></div>`

		})