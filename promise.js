const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let promise1 = await promiseTheaterIXX();
    let promise2 = await promiseTheaterVGC();
    let hasil = (promise1).concat(promise2);
    let jumlahEmosi = 0;
    hasil.map((promise1) => promise1.hasil === emosi && (jumlahEmosi++));
    return jumlahEmosi;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};