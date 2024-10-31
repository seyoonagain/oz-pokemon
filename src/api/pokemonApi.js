import axios from 'axios';

export default class PokemonClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
    });
  }

  async #getName(id) {
    const response = await this.httpClient.get(`pokemon-species/${id}`);
    return response.data.names.find((item) => item.language.name == 'ko').name;
  }

  async #getDescription(id) {
    const response = await this.httpClient.get(`pokemon-species/${id}`);
    return response.data.flavor_text_entries.find(
      (item) => item.language.name === 'ko'
    ).flavor_text;
  }

  async #getImage(id, isBackImage = false) {
    const response = await this.httpClient.get(`pokemon-form/${id}`);
    return !isBackImage
      ? response.data.sprites.front_default
      : response.data.sprites.back_default;
  }

  async getPokemonInfo(id) {
    const [name, description, frontImage, backImage] = await Promise.all([
      this.#getName(id),
      this.#getDescription(id),
      this.#getImage(id),
      this.#getImage(id, true),
    ]);
    return { id, name, description, frontImage, backImage };
  }
}
