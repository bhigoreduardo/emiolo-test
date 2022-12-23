<template>
    <div class="search">
        <i class="close-times" @click="$emit('click:modelTimes')"><fa icon="times" /></i>

        <form class="search-form user" @submit="searchApi($event)">
            <span>Pesquisar por: {{ target }}</span>
            <InputFieldVue inputType="text" inputId="search" inputPlaceholder="Informe o número identificador" v-model="fieldTarget" />
            <InputSubmitVue inputValue="Pesquisar" />
        </form>

        <div class="search-result people" v-show="target==='people'">
            <p><span>Nome: </span>{{ person.nome }}</p>
            <p><span>Altura (cm): </span>{{ person.altura }}</p>
            <p><span>Peso (kg): </span>{{ person.peso }}</p>
            <p><span>Cor do cabelo: </span>{{ person.corCabelo }}</p>
            <p><span>Cor de pele: </span>{{ person.corPele }}</p>
            <p><span>Cor dos olhos: </span>{{ person.corOlhos }}</p>
            <p><span>Ano de nascimento: </span>{{ person.anoNasc }}</p>
            <p><span>Gênero: </span>{{ person.genero }}</p>
        </div>

        <div class="search-result planets" v-show="target==='planets'">
            <p><span>Nome: </span>{{ planet.nome }}</p>
            <p><span>Período de rotação: </span>{{ planet.rotacao }}</p>
            <p><span>Período de órbita: </span>{{ planet.orbita }}</p>
            <p><span>Diâmetro: </span>{{ planet.diametro }}</p>
            <p><span>Clima: </span>{{ planet.clima }}</p>
            <p><span>Gravidade: </span>{{ planet.gravidade }}</p>
            <p><span>Terreno: </span>{{ planet.terreno }}</p>
            <p><span>Água da superfície: </span>{{ planet.superficie }}</p>
            <p><span>Popupação: </span>{{ planet.populacao }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import InputFieldVue from './formComponents/InputField.vue';
import InputSubmitVue from './formComponents/InputSubmit.vue';

export default {
    name: 'SearchApiVue',
    components: {
        InputFieldVue,
        InputSubmitVue
    },
    props: ['target'],
    emists: ['click:modelTimes'],
    data() {
        return {
            apiUrlSWAPI: 'https://swapi.dev/api',
            fieldTarget: null,
            person: {},
            planet: {}
        }
    },
    methods: {
        async searchApi(event) {
            event.preventDefault();

            const url = `${this.apiUrlSWAPI}/${this.target}/${this.fieldTarget}`;

            if (this.target === 'people') {
                await axios.get(url)
                    .then(res => {
                        this.person = {
                            nome: res.data.name,
                            altura: res.data.height,
                            peso: res.data.mass,
                            corCabelo: res.data.hair_color,
                            corPele: res.data.skin_color,
                            corOlhos: res.data.eye_color,
                            anoNasc: res.data.birth_year,
                            genero: res.data.gender
                        }
                    })
                    .catch(error => console.log(error));
            }
            else if (this.target === 'planets') {
                await axios.get(url)
                    .then(res => {
                        this.planet = {
                            nome: res.data.name,
                            rotacao: res.data.rotation_period,
                            orbita: res.data.orbital_period,
                            diametro: res.data.diameter,
                            clima: res.data.climate,
                            gravidade: res.data.gravity,
                            terreno: res.data.terrain,
                            superficie: res.data.surface_water,
                            populacao: res.data.population
                        }
                    })
                    .catch(error => console.log(error));
            }
        }
    }
}
</script>

<style scoped>
.search {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 20px;

    width: 100%;
    max-width: 800px;
    padding: 50px;
    background-color: #fff;
    box-shadow: 0 2px 2px -2px rgba(31, 27, 45, 0.08),
        0 4px 12px rgba(31, 27, 45, 0.08),
        0 0 0 100vw rgba(0, 0, 0, 0.3);

    z-index: 2;
}

.close-times {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    transition: all .15s ease-in-out;
    font-size: 20px;
}

.close-times:hover {
    color: #e12717;
}

.search-form span{
    display: block;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: bold;
}
</style>
