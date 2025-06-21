test("nome do teste", callbackFunction);
function callbackFunction(){
}

test("nome do teste2", function(){
  console.log("Simplificando o teste");
});

test("nome do teste3", ()=>{
  console.log("utilizando arrow function para simplificar ainda mais");
});
test("espero que 1 seja 1",()=>{
  expected(1).toBE(1);
});

