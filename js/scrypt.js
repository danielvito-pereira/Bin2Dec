  let binary = document.getElementById('binary');
  const btn = document.getElementById('btn')
  const output = document.querySelector("#output");
  const error = document.querySelector("#error-msg");
  

function convertBinarioForDecimal() {
  const regEx = /^[0-1]+$/;

  if(binary.value.match(regEx)) {
    const binarys = binary.value.split('').reverse();
    let decNo = 0;
    binarys.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);

    output.value = decNo.toString();
    output.style.cursor = 'text';
  } else {
    error.style.display = 'block';
}

btn.addEventListener('click', () => {
  error.style.display = 'none';

  convertBinarioForDecimal();
  console.log(  convertBinarioForDecimal())
});
}


