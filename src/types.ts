const x: number = 30;

const y: string = "50";

const res: string = x + y;

type ning = string & number;

type Person = {
  age: number;
  name: string;
  birthDate: Date;
  isMarried?: boolean;
};

type PersonExtended = Person & {
  lastName: string;
};

type PersonShortened = Omit<Person, "age">;

type PersonPartial = Partial<Person>;

// const personSample: Pick<Person, "birthDate"> = {
//   name: "Jhon",
//   birthDate: new Date("1992-07-22"),
// };

interface PersonInterface {
  age: number;
  name: string;
  birthDate: Date;
  isMarried?: boolean;
}

interface PersonInterfaceExtended extends PersonInterface {
  lastName: string;
}

interface PersonInterfaceExtended extends Omit<PersonInterface, "age"> {}

const personIntfSample: PersonInterfaceExtended = {
  age: 21,
  name: "Jhon",
  birthDate: new Date("1992-07-22"),
  lastName: "Doe",
};

enum UserRole {
  ADMIN = "Admin",
  CLIENT = "Client",
  SUPER_ADMIN = "SuperAdmin",
}

interface Client {
  userName: string;
  password: string;
  role: UserRole;
}

const clientSample: Client = {
  userName: "client",
  password: "1234",
  role: "Loquesea" as UserRole,
};

interface args {
  arg1?: string;
  arg2: number;
}

type MyFunction = (arg: args) => string;

const functionSample: MyFunction = (args: args) => {
  const { arg1 = 'someval', arg2 } = args;
  return arg1 + arg2;
};

const NOSEHACE: unknown = new Date('12');