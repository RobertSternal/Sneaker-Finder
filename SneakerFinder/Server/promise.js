// te 2 fn sa takie same
async function a() {
  return "xd";
}

function b() {
  return new Promise((r) => r("xd"));
}

a().then(); // async funkcja rozw. jak promise
const data = await b(); // vice versa
