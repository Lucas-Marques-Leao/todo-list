import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // private readonly users: User[] = [];
  // findAllUsers(): User[] {
  //   return this.users;
  // }
  // findUserById(id: string): User {
  //   const user = this.users.find((u) => u.id === id);
  //   if (!user) {
  //     // Lide com o caso em que o usuário não é encontrado
  //     throw new Error(`Usuário com o ID ${id} não encontrado.`);
  //   }
  //   return user;
  // }
  // createUser(createUserDto: CreateUserDto): User {
  //   // Gere um ID único (você pode usar uma biblioteca como 'uuid' para isso)
  //   const id = Math.random().toString(36).substring(7);
  //   const newUser = { id, ...createUserDto };
  //   this.users.push(newUser);
  //   return newUser;
  // }
  // updateUser(id: string, updateUserDto: CreateUserDto): User {
  //   const userIndex = this.users.findIndex((u) => u.id === id);
  //   if (userIndex === -1) {
  //     // Lide com o caso em que o usuário não é encontrado
  //     throw new Error(`Usuário com o ID ${id} não encontrado.`);
  //   }
  //   const updatedUser = { id, ...updateUserDto };
  //   this.users[userIndex] = updatedUser;
  //   return updatedUser;
  // }
  // deleteUser(id: string): User {
  //   const userIndex = this.users.findIndex((u) => u.id === id);
  //   if (userIndex === -1) {
  //     // Lide com o caso em que o usuário não é encontrado
  //     throw new Error(`Usuário com o ID ${id} não encontrado.`);
  //   }
  //   const deletedUser = this.users.splice(userIndex, 1)[0];
  //   return deletedUser;
  // }
}
