  let binary = document.getElementById('binary').value;
  const btn = document.getElementById('btn')



function binaryToDecimal(binary) {
  let t = binary;
  let decimal_v=0;
  let = base = 1;
  while (t) {
    let ult_num = t % 10;
    t = Math.floor(temp / 10);
  
    decimal_v+= ult_num * base;
    base = base *2 ;
  
  } 
  document.getElementById("output").innerHTML = decimal_v;
  console.log(decimal_v);
}


btn.addEventListener('click', () => {

  console.log(binaryToDecimal())
  
});


/*A ideia é extrair os dígitos de um determinado número binário a partir do dígito mais à direita e manter uma variável dec_value. No momento de extrair dígitos do número binário, multiplique o dígito com a base adequada (Potência de 2) e adicione-o à variável dec_value. No final, a variável dec_value armazenará o número decimal necessário.
Por exemplo: 
se o número binário for 111. 
dec_value = 1 * (2 ^ 2) + 1 * (2 ^ 1) + 1 * (2 ^ 0) = 7

O diagrama abaixo explica como converter (1010) em valor decimal equivalente: */