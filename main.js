const target = document.getElementById('target')
target.addEventListener('click',()=>{
  const test = document.getElementById('test');
  test.textContent = 'test'
  test.classList.add('red');
})