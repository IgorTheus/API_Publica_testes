# Teste de 3 APIs publicas
Este projeto é uma API REST simples feita com Node.js, Express e Axios. A aplicação oferece três funcionalidades principais:

ViaCEP
`
https://viacep.com.br/
`

pokéAPI
`
https://pokeapi.co/
`

IpAPI
`
https://ipapi.com/
`

# AVISO

A IpAPI utiliza uma key propria, é necessario criar uma conta no site deles e usar sua key para funcionamento total do codigo.


# Funcionalidades
`/cep`: Retorna dados de um endereço a partir de um CEP brasileiro

`/pokemon`: Retorna informações detalhadas de um Pokémon

`/ip`: Retorna informações geográficas com base em um IP

# Dependências e clonar repositório

Clonar repositório:

`git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio`

Instalar Dependências:

`
npm install express axios cors
`

Iniciar servidor:

`
node server.js
`

O servidor sera iniciado em:

`
http://localhost:3000
`

# ViaCEP

API para consulta de CEP

Exemplo de input:

`
http://localhost:3000/cep/?cep=01001000
`

Exemplo de output:

<code>
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "unidade": "",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "estado": "São Paulo",
  "regiao": "Sudeste",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
</code>

# PokéAPI

API para consulta de informações de pokemon

Exemplo de input:

`
http://localhost:3000/pokemon/?name=pikachu
`

Exemplo de output:

<code>
{
  "name": "pikachu",
  "id": 25,
  "height": 4,
  "weight": 60,
  "types": [
    "electric"
  ]
}
</code>

# IpAPI

API para geolocalização por IP

Exemplo de input:

`
http://localhost:3000/ip/?ip=134.201.250.155
`

Exemplo de output:

<code>
{
  "ip": "134.201.250.155",
  "continent": "NA",
  "country": "United States",
  "region": "California",
  "city": "Huntington Beach"
}
</code>
