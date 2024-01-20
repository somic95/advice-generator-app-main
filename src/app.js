const fetAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    document.getElementById('title').innerHTML = `advice #${data.slip.id}`
    document.getElementById('advice').innerHTML = `"${data.slip.advice}"`
}

fetAdvice();