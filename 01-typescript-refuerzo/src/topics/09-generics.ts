export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Hola mundo");
const amINumber = whatsMyType<number>(10);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);
const amIObject = whatsMyType<{ id: number; name: string }>({
  id: 1,
  name: "John",
});

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
console.log(amIObject.id);
