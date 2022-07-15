

<script>
import timeApi from "@/api/time.js";
const timeApi = new TimesApi();
export default {
  data() {
    return {
      time: {},
      times: [],
    };
  },
  async created() {
    this.times = await timesApi.buscarTodosOsTimes();
  },
  methods: {
    async salvar() {
      if (this.time.id) {
        await timeApi.atualizarTime(this.time);
      } else {
        await timeApi.adicionarTime(this.time);
      }
    },
    async excluir(time) {
      await timeApi.excluirTime(time.id);
      this.time = await timesApi.buscarTodosOsTime();
    },
    editar(time) {
      Object.assign(this.time, time);
    },
  },
};
</script>

<template>
<div class="container">
  <div class="title">
    <h2>Gerenciamento de Time</h2>
  </div>
  <div class="form-input">
    <input type="text" v-model="time.nome" @keyup.enter="salvar">
    <button @click="salvar">Adicionar</button>
  </div>
  
</div>
</template>

<style>
.title {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.form-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.form-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.form-input button {
  margin-left: 1%;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(36, 95, 127);
  border-radius: 10px;
  background-color: rgb(36, 95, 127);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.list-times {
  display: flex;
  justify-content: center;
}

table {
  width: 50%;
  margin: 2% auto;
  border-collapse: collapse;
}

table tr th {
  border: 1px solid #ccc;
  padding: 10px;
  font-weight: bold;
}

table tr td {
  border: 1px solid #ccc;
  padding: 10px;
}

table tr:nth-child(odd) {
  background-color: #ccc;
}
</style>
