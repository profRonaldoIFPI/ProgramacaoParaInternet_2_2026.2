import bcrypt from "bcrypt";

const senha = "12345678";



console.log(await bcrypt.hash(senha, 10));
console.log(await bcrypt.hash(senha, 12));
console.log(await bcrypt.hash(senha, 20));

