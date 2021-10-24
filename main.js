const target = document.getElementById('target')
target.addEventListener('click',(e)=>{
  console.log(e);
  const test = document.getElementById('test');
  test.textContent = 'test'
  test.classList.add('red');
})