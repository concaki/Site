function fetchAndDisplayDataGuaiba() {
  const url1 = "https://ows.snirh.gov.br/ords/servicos/hidro/mapa/87444000";
  const url2 = "https://ows.snirh.gov.br/ords/servicos/hidro/estacao/24h/87444000";

  Promise.all([
    fetch(url1).then((response) => response.json()),
    fetch(url2).then((response) => response.json())
  ])
    .then(([data1, data2]) => {
      // Processa o JSON response 1
      const rioInfo1 = data1.items[0];
      const nivelUltFormatted = (parseFloat(rioInfo1.nivel_ult) / 100).toFixed(
        2
      ); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      document.getElementById(
        "chuvaguaiba"
      ).textContent = ` Chuva: ${rioInfo1.chuva_ult} mm`;
      document.getElementById(
        "atualguaiba"
      ).textContent = ` Nivel Atual: ${nivelUltFormatted} m`;

      // Processa o JSON response 2
      const rioInfo2 = data2.items[2];
      const nivelFormatted = (parseFloat(rioInfo2.nivel) / 100).toFixed(2); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      const dataFormatted = rioInfo2.data.replace("T", " ").replace("Z", "");
      document.getElementById(
        "anteriorguaiba"
      ).textContent = ` Leitura Anterior: ${nivelFormatted} m`;
      document.getElementById(
        "dataguaiba"
      ).textContent = ` Data e Hora: ${dataFormatted}`;

      // Mostra a div inicial
      document.getElementById("nivelRios").classList.add("active");
    })
    .catch((error) => console.error("Erro ao buscar dados da API:", error));
}

function fetchAndDisplayDataSinos() {
  const url1 = "https://ows.snirh.gov.br/ords/servicos/hidro/mapa/87382000";
  const url2 = "https://ows.snirh.gov.br/ords/servicos/hidro/estacao/24h/87382000";

  Promise.all([
    fetch(url1).then((response) => response.json()),
    fetch(url2).then((response) => response.json())
  ])
    .then(([data1, data2]) => {
      // Processa o JSON response 1
      const rioInfo1 = data1.items[0];
      const nivelUltFormatted = (parseFloat(rioInfo1.nivel_ult) / 100).toFixed(
        2
      ); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      document.getElementById(
        "chuvasinos"
      ).textContent = ` Chuva: ${rioInfo1.chuva_ult} mm`;
      document.getElementById(
        "atualsinos"
      ).textContent = ` Nivel Atual: ${nivelUltFormatted} m`;

      // Processa o JSON response 2
      const rioInfo2 = data2.items[2];
      const nivelFormatted = (parseFloat(rioInfo2.nivel) / 100).toFixed(2); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      const dataFormatted = rioInfo2.data.replace("T", " ").replace("Z", "");
      document.getElementById(
        "anteriorsinos"
      ).textContent = ` Leitura Anterior: ${nivelFormatted} m`;
      document.getElementById(
        "datasinos"
      ).textContent = ` Data e Hora: ${dataFormatted}`;

      // Mostra a div inicial
      document.getElementById("nivelRios").classList.add("active");
    })
    .catch((error) => console.error("Erro ao buscar dados da API:", error));
}

function fetchAndDisplayDataTaquari() {
  const url1 = "https://ows.snirh.gov.br/ords/servicos/hidro/mapa/86510000";
  const url2 = "https://ows.snirh.gov.br/ords/servicos/hidro/estacao/24h/86510000";

  Promise.all([
    fetch(url1).then((response) => response.json()),
    fetch(url2).then((response) => response.json())
  ])
    .then(([data1, data2]) => {
      // Processa o JSON response 1
      const rioInfo1 = data1.items[0];
      const nivelUltFormatted = (parseFloat(rioInfo1.nivel_ult) / 100).toFixed(
        2
      ); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      document.getElementById(
        "chuvataquari"
      ).textContent = ` Chuva: ${rioInfo1.chuva_ult} mm`;
      document.getElementById(
        "atualtaquari"
      ).textContent = ` Nivel Atual: ${nivelUltFormatted} m`;

      // Processa o JSON response 2
      const rioInfo2 = data2.items[2];
      const nivelFormatted = (parseFloat(rioInfo2.nivel) / 100).toFixed(2); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      const dataFormatted = rioInfo2.data.replace("T", " ").replace("Z", "");
      document.getElementById(
        "anteriortaquari"
      ).textContent = ` Leitura Anterior: ${nivelFormatted} m`;
      document.getElementById(
        "datataquari"
      ).textContent = ` Data e Hora: ${dataFormatted}`;

      // Mostra a div inicial
      document.getElementById("nivelRios").classList.add("active");
    })
    .catch((error) => console.error("Erro ao buscar dados da API:", error));
}

function fetchAndDisplayDataCai() {
  const url1 = "https://ows.snirh.gov.br/ords/servicos/hidro/mapa/87270000";
  const url2 = "https://ows.snirh.gov.br/ords/servicos/hidro/estacao/24h/87270000";

  Promise.all([
    fetch(url1).then((response) => response.json()),
    fetch(url2).then((response) => response.json())
  ])
    .then(([data1, data2]) => {
      // Processa o JSON response 1
      const rioInfo1 = data1.items[0];
      const nivelUltFormatted = (parseFloat(rioInfo1.nivel_ult) / 100).toFixed(
        2
      ); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      document.getElementById(
        "chuvacai"
      ).textContent = ` Chuva: ${rioInfo1.chuva_ult} mm`;
      document.getElementById(
        "atualcai"
      ).textContent = ` Nivel Atual: ${nivelUltFormatted} m`;

      // Processa o JSON response 2
      const rioInfo2 = data2.items[2];
      const nivelFormatted = (parseFloat(rioInfo2.nivel) / 100).toFixed(2); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      const dataFormatted = rioInfo2.data.replace("T", " ").replace("Z", "");
      document.getElementById(
        "anteriorcai"
      ).textContent = ` Leitura Anterior: ${nivelFormatted} m`;
      document.getElementById(
        "datacai"
      ).textContent = ` Data e Hora: ${dataFormatted}`;

      // Mostra a div inicial
      document.getElementById("nivelRios").classList.add("active");
    })
    .catch((error) => console.error("Erro ao buscar dados da API:", error));
}

function fetchAndDisplayDataJacui() {
  const url1 = "https://ows.snirh.gov.br/ords/servicos/hidro/mapa/85400000";
  const url2 = "https://ows.snirh.gov.br/ords/servicos/hidro/estacao/24h/85400000";

  Promise.all([
    fetch(url1).then((response) => response.json()),
    fetch(url2).then((response) => response.json())
  ])
    .then(([data1, data2]) => {
      // Processa o JSON response 1
      const rioInfo1 = data1.items[0];
      const nivelUltFormatted = (parseFloat(rioInfo1.nivel_ult) / 100).toFixed(
        2
      ); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      document.getElementById(
        "chuvajacui"
      ).textContent = ` Chuva: ${rioInfo1.chuva_ult} mm`;
      document.getElementById(
        "atualjacui"
      ).textContent = ` Nivel Atual: ${nivelUltFormatted} m`;

      // Processa o JSON response 2
      const rioInfo2 = data2.items[2];
      const nivelFormatted = (parseFloat(rioInfo2.nivel) / 100).toFixed(2); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      const dataFormatted = rioInfo2.data.replace("T", " ").replace("Z", "");
      document.getElementById(
        "anteriorjacui"
      ).textContent = ` Leitura Anterior: ${nivelFormatted} m`;
      document.getElementById(
        "datajacui"
      ).textContent = ` Data e Hora: ${dataFormatted}`;

      // Mostra a div inicial
      document.getElementById("nivelRios").classList.add("active");
    })
    .catch((error) => console.error("Erro ao buscar dados da API:", error));
}

function fetchAndDisplayDataLagoaDosPatos() {
  const url1 = "https://ows.snirh.gov.br/ords/servicos/hidro/mapa/87955000";
  const url2 = "https://ows.snirh.gov.br/ords/servicos/hidro/estacao/24h/87955000";

  Promise.all([
    fetch(url1).then((response) => response.json()),
    fetch(url2).then((response) => response.json())
  ])
    .then(([data1, data2]) => {
      // Processa o JSON response 1
      const rioInfo1 = data1.items[0];
      const nivelUltFormatted = (parseFloat(rioInfo1.nivel_ult) / 100).toFixed(
        2
      ); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      document.getElementById(
        "chuvalagoadospatos"
      ).textContent = ` Chuva: ${rioInfo1.chuva_ult} mm`;
      document.getElementById(
        "atuallagoadospatos"
      ).textContent = ` Nivel Atual: ${nivelUltFormatted} m`;

      // Processa o JSON response 2
      const rioInfo2 = data2.items[2];
      const nivelFormatted = (parseFloat(rioInfo2.nivel) / 100).toFixed(2); // Ajustando a unidade de cm para m e formatando para 2 casas decimais
      const dataFormatted = rioInfo2.data.replace("T", " ").replace("Z", "");
      document.getElementById(
        "anteriorlagoadospatos"
      ).textContent = ` Leitura Anterior: ${nivelFormatted} m`;
      document.getElementById(
        "datalagoadospatos"
      ).textContent = ` Data e Hora: ${dataFormatted}`;

      // Mostra a div inicial
      document.getElementById("nivelRios").classList.add("active");
    })
    .catch((error) => console.error("Erro ao buscar dados da API:", error));
}

function carregarImagemDoRadarMeteorologico() {
  const url = "https://radar-poa-13561874921.us-east1.run.app/api/images"; // Substitua pela URL correta

  fetch(url)
    .then(res => res.json())
    .then(json => {
      const imagem = json[0].image;
      document.getElementById("imagemDoRadar").src = imagem;
    })
    .catch(err => {
      console.error("Erro ao carregar a imagem do radar:", err);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchAndDisplayDataGuaiba();
  fetchAndDisplayDataSinos();
  fetchAndDisplayDataTaquari();
  fetchAndDisplayDataCai();
  fetchAndDisplayDataJacui();
  fetchAndDisplayDataLagoaDosPatos();
  carregarImagemDoRadarMeteorologico();

});