fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

let dt = new Date();

document.getElementById("time").innerHTML = dt.toLocaleTimeString();


fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=ottawa&units=metric")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById("temp").textContent = data.main.temp
        document.getElementById("city").textContent = data.name

    })


//https://css-tricks.com/perfect-full-page-background-image/#awesome-easy-progressive-css3-way)
