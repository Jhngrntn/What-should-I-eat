
var meal = [
	'pasta/noodles',
	'with rice',
	'soup',
	'salad',
	'tacos',
	'sandwich',
	'bowl',
	'casserole',
	'with veggies',
	'open face',
	'pizza',
	'on a stick'
]

var protean = [
	'chicken',
	'shrimp',
	'salmon',
	'trout',
	'tuna',
	'mahi-mahi',
	'bean',
	'lobster',
	'crab',
	'turkey'
]

var style = [
	'grilled',
	'stir-fry',
	'brazed',
	'fried',
	'blackened',
	'baked',
	'sauteed',
	'maranera',
	'peanut',
	'cajun',
	'southern',
	'jerk',
	'spicy',
	'Baja',
	'marsala',
	'curry',
	'terriaki'
]
function makeMeal() {
	var randomNo1 = Math.floor(Math.random() * (meal.length));
	var randomNo2 = Math.floor(Math.random() * (protean.length));
	var randomNo3 = Math.floor(Math.random() * (style.length));
	document.getElementById('display').innerHTML = style[randomNo3] + ' ' + protean[randomNo2] + ' ' + meal[randomNo1];
}