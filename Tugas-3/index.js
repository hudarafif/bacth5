const searchButton = document.querySelector("#button")
const inputKeyword = document.querySelector(".input.keyword")


const url = "https://covid-193.p.rapidapi.com/statistics"
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23f0a5e01amsha395c4325d81974p1da7ecjsnedababe694e6',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

searchButton.addEventListener("click",function() {
    fetch("https://covid-193.p.rapidapi.com/statisticshttps://covid-193.p.rapidapi.com/statistics?country="+
            inputKeyword.value)
    .then((result) => result.json())
    .then(
        (response) =>
            function() {
                let result = document.querySelector(".result")

                result.innerHTML = <div></div>
            }
        )
})


// button di kasi function
// bikin function buat hit ke api nya rapidapi pake fetch, string di taro di url nya
// data yg di dapet di render ke halaman web