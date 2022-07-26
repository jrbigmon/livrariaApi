const axios = require('axios');

const countriesApi = axios.create({
    baseURL: "https://restcountries.com/v3.1/"
});

const methods = {
    getByAlphaCode: async (code) => {
        try {
            const response = await countriesApi.get(`alpha/${code}`);

            return response.data;

        } catch (err){
            err.message = new Error("Código do pais não econtrado!")
            console.log(err.message)
        }
    }
}
module.exports = methods;