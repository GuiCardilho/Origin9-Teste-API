import { faker } from "@faker-js/faker";

export const generateUsers = () => ({
    _id: faker.string.uuid(),
    nome: faker.person.fullName(),
    data_nascimento: faker.date.birthdate().toLocaleDateString("pt-BR"),
    cpf: `${faker.number.int({ min: 100, max: 999 })}.${faker.number.int({
        min: 100,
        max: 999,
    })}.${faker.number.int({ min: 100, max: 999 })}-${faker.number.int({
        min: 10,
        max: 99,
    })}`,
    endereco: faker.location.streetAddress({ useFullAddress: true }),
    status: faker.helpers.arrayElement(["Ativo", "Inativo"]),
    createdAt: faker.date.anytime(),
    __v: 0,
});
