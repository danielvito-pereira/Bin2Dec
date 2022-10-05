  const binary = document.getElementById('binary').value;
  const btn = document.getElementById('btn')

console.log(binary);

btn.addEventListener('click', () => {
  if (binary != 0 || 1 ) {
    alert('Digite apenas 0 e 1');
  } 
});