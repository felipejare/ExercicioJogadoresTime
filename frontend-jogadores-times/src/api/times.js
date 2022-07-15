import axios from 'axios';
export default class TimesApi {
    async buscarTodosOsTimes() {
        const response = await axios.get("https://localhost:4000/times");
        return response.data;
    }

    async buscarTimes(id) {
        const response = await axios.post("https://localhost:4000/times/${id}");
        return response.data;
    }

    async adicionarTime(time) {
        const response = await axios.post("https://localhost:4000/times", time);
        return response.data;
    }

    async excluirTime(id) {
        const response = await axios.delete('https://localhost:4000/times/${id}')
        return response.data;
    }

    async atualizarTime(time) {
        const response = await axios.put(
            "http://localhost:4000/times/${time.id}", time,
        );
        return response.data
    }

}
