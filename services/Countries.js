const axios = require('axios');

const countriesApi = axios.create({
    baseURL: "https://restcountries.com/v3.1/"
});

const methods = {
    getByAlphaCode: async (code) => {
        try {
            const response = await countriesApi.get(`alpha/${code}`);

            if(response.status !== 200){
                throw new Error("A requisição falhou!");
            }

            return response.data;

        } catch (err){
            console.log(err);
        }
    }
}
module.exports = methods;