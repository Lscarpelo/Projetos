async function buscarPrevisao() {
    const cidade = document.getElementById("cidade").value;
    const apiKey = "d1126f754a1dde04245ba8a0fc2406ee";  // Substitua pela sua chave da OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (dados.cod === 200) {
            document.getElementById("resultado").innerHTML = `
                <h2>${dados.name}, ${dados.sys.country}</h2>
                <p>Temperatura: ${dados.main.temp}°C</p>
                <p>Clima: ${dados.weather[0].description}</p>
                <p>Umidade: ${dados.main.humidity}%</p>
                <p>Vento: ${dados.wind.speed} km/h</p>
            `;
        } else {
            document.getElementById("resultado").innerHTML = `<p>Cidade não encontrada.</p>`;
        }
    } catch (error) {
        document.getElementById("resultado").innerHTML = `<p>Erro ao buscar dados.</p>`;
    }
}
