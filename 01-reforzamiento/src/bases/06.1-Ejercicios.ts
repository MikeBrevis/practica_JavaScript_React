//Desestructuracion de objetos: names, email, phone. Renombrar names = fullName, phone = contactPhone

interface FormData {
  names: string;
  surnames: string;
  birthdate: string;
  rut: string;
  phone: string;
  email: string;
  message: string;
}

const formData: FormData = {
  names: "Juan",
  surnames: "Pérez",
  birthdate: "1995-04-10",
  rut: "11.111.111-1",
  phone: "912345678",
  email: "juan@mail.com",
  message: "Necesito cotización"
};

const { names: fullName, email, phone: contactPhone } = formData
console.log(fullName, email, contactPhone)


//Procesar datos antes de enviarlos a backend

interface UserPayload {
  id: number;
  username: string;
  email: string;
  role: "admin" | "user";
  active: boolean;
}

const person: UserPayload = {
  id: 1256,
  username: "Pérez",
  email: "juan@mail.com",
  role: "admin",
  active: true,
};

const buildUserSummary = ({ username, email, role }: UserPayload) => {
  return `usuario: ${username} | email: ${email} | rol: ${role}`
};

const person1 = buildUserSummary(person)
console.log(person1)





