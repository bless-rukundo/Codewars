function promiseHelloWorld() {
  const mypromise = new Promise((resolve)=>{
    resolve("Hello World!")
  });
  mypromise.then((result)=>{
  console.log(result)
})
}
promiseHelloWorld();