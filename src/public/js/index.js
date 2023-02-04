const socket = io();

socket.on('postNewProduct', (func) => {
  let data = func;

  let productos = data;

  const source = document.querySelector('.template').innerHTML;
  const template = Handlebars.compile(source);

  const html = template({ productos });

  console.log(html);

  document.querySelector('.container').innerHTML = html;
});
