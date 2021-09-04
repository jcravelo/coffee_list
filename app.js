Vue.createApp({
	data(){
		return{
			name : "Coffee App",
			bio: "We travel the world to souce the very best single origin coffe for you",
			coffees: ["Expresso","Cortado o macchiato","Americano","Café con leche","Capuchino","Mocca","Café irlandés","Frappé"]
		}
	}

})
.component("coffee",{
	template : "#coffe-template",
	props : {
		name : String
	}
	// props : ["name"]
})
.mount("#app")
