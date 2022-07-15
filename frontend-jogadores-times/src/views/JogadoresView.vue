<script>
export default {
  data() {
    return {
      jogadores: [],
      jogador: {},
      times: [],
    };
  },
  async created(){
    await this.buscarTodosOsJogadores();
    await this.buscarTodosOsTimes();
  },
  methods: {
    async buscarTodosOsTimes(){
      const times = await axios.get("https//localhost:4000/times");
      this.times = times.data;
    },
    async buscarTodosOsJogadores(){
      const resposta = await axios.get("http://localhost:4000/jogadores")
    }
}
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Jogadores</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="jogador.nome" placeholder="Nome do Jogador"/>
      <select v-model="jogador.timeId">
        <option v-for="time in times" :key="time.id" :value="time.id">
          {{time.nome}}
        </option>
      </select>
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-jogadores">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jogadores in jogadores" :key="jogadores.id">
            <td>{{ jogadores.id }}</td>
            <td>{{ jogadores.nome }}</td>
            <td>{{ jogadores.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
