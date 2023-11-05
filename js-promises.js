console.log('Promises');
// fetch('video.json')
// .then(res => res.json())
// .then(data => console.log(data))
(async () => {
  const res = await fetch('video.json')
const data = await res.json()
console.log(data)
})()