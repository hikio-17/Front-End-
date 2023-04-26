// console.log('Selamat datang');
// setTimeout(() => {
//     console.log('Terimakasih, silahkan datang kembali');
// }, 5000);
// console.log('Ada yang bisa dibantu?');

// use callback to get value asynchronous
// const getCake = (callback) => {
//     let cake = null;
//     console.log('Sedang membuat cake, silahkan tunggu...');

//     setTimeout(() => {
//         cake = 'kue sudah siap';
//         callback(cake);
//     }, 3000);
// }
// console.log(getCake((cake) => console.log(cake)));

const executorFunction = (resolve, reject) => {
    const isCoffeMakerReady = false;

    if (isCoffeMakerReady) {
        resolve('Kopi berhasil dibuat');
    } else {
        reject('Kopi tidak bisa dibuat');
    }
}

const makeCoffe = new Promise(executorFunction);

const handleSuccse = ((resolve) => console.log(resolve));
const handleRejected = ((reject) => console.log(reject))

makeCoffe
    .then(handleSuccse)
    .catch(handleRejected);

