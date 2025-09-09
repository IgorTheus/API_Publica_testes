const express = require('express');
const cors = require("cors");
const axios = require('axios');
const app = express();
const PORT = 3000;
 
app.use(cors());
async function getCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await axios.get(url);
  return response.data;

}
 
async function getPokemon(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await axios.get(url);
  return response.data;
}

async function getGeoIp(ip) {
  const url = `http://api.ipapi.com/api/${ip}?access_key=(YOUR_KEY)`;
  const response = await axios.get(url);
  return response.data;
}

app.get('/ip', async (req, res) => {
  const { ip } = req.query;

  try {
        const data = await getGeoIp(ip);

        res.json({
            ip: data.ip,
            continent: data.continent_code,
            country: data.country_name,
            region: data.region_name,
            city: data.city
        });
    } catch (err) {
        console.log('deu erro')
    }
});

app.get('/cep', async (req, res) => {
  const { cep } = req.query;

  if (!cep) return res.status(400).json({ error: 'Informe um CEP' });
 
  try {
    const data = await getCep(cep);

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: 'Erro ao consultar CEP' });
  }
});
 
app.get('/pokemon', async (req, res) => {
  const { name } = req.query;

  if (!name) return res.status(400).json({ error: 'Informe o nome do Pokémon' });
 
  try {
    const data = await getPokemon(name.toLowerCase());

    res.json({
      name: data.name,                           
      id: data.id,                             
      height: data.height,                      
      weight: data.weight,                      
      types: data.types.map(t => t.type.name)   
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao consultar Pokémon' });
  }
});
 
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
