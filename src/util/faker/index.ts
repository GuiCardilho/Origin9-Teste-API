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

export const generateAdm = () => ({
    nome: faker.person.fullName(),
    cargo: faker.helpers.arrayElement(["Gerente", "Supervisor", "Coordenador"]),
    salario: faker.number.int({ min: 2000, max: 10000 }),
    status: faker.helpers.arrayElement(["Ativo", "Inativo"]),
});

export const generateCompany = () => ({
    empresa: faker.company.name(),
    cnpj: `${faker.number.int({ min: 10, max: 99 })}.${faker.number.int({
        min: 100,
        max: 999,
    })}.${faker.number.int({
        min: 100,
        max: 999,
    })}/0001-${faker.number.int({ min: 10, max: 99 })}`,
    status: faker.helpers.arrayElement(["Ativo", "Inativo"]),
});

export const generateProducts = () => ({
    nome: faker.commerce.productName(),
    categoria: faker.commerce.department(),
    preco: faker.commerce.price(),
    validade: faker.date.future().toLocaleDateString("pt-BR"),
});
export const generateCategory = () => ({
    nome: faker.commerce.productMaterial(),
    quantidade: faker.number.int({ min: 1, max: 100 }),
});

export const generateCoupon = () => ({
    nome: faker.word.words(),
    produto: faker.commerce.productName(),
    categoria: faker.commerce.department(),
    vl_total: faker.number.int({ min: 10, max: 100 }),
    desconto: faker.number.int({ min: 1, max: 10 }),
    vl_desconto: function () {
        const valorComDesconto =
            this.vl_total - this.vl_total * (this.desconto / 100);
        return valorComDesconto.toFixed(2);
    },
    validade: faker.date.future().toLocaleDateString("pt-BR"),
});
