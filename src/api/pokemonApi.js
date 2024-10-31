import axios from 'axios';

export default class PokemonClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
    });
  }

  async #getName(id) {
    return await this.httpClient
      .get(`pokemon-species/${id}`)
      .then((res) => res.data.names.find((item) => item.language.name == 'ko'))
      .then((res) => res.name);
  }

  async #getDescription(id) {
    return await this.httpClient
      .get(`pokemon-species/${id}`)
      .then((res) =>
        res.data.flavor_text_entries.find((item) => item.language.name === 'ko')
      )
      .then((res) => res.flavor_text);
  }

  async #getFrontImage(id) {
    return await this.httpClient
      .get(`pokemon-form/${id}`)
      .then((res) => res.data.sprites)
      .then((res) => res.front_default);
  }

  async #getBackImage(id) {
    return await this.httpClient
      .get(`pokemon-form/${id}`)
      .then((res) => res.data.sprites)
      .then((res) => res.back_default);
  }

  async getPokemonInfo(id) {
    const name = await this.#getName(id);
    const description = await this.#getDescription(id);
    const frontImage = await this.#getFrontImage(id);
    const backImage = await this.#getBackImage(id);
    return { id, name, description, frontImage, backImage };
  }
}
