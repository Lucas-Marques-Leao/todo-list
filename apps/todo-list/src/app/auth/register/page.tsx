'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Input from '../../../components/atoms/Input';
import { redirect } from 'next/navigation';

const registerValidationSchema = z.object({
  name: z.string().min(1, { message: 'Este campo é obrigatório!' }),
  password: z
    .string()
    .min(8, { message: 'Sua senha deve ter ao menos 8 caracteres' }),
});
type RegisterInputs = z.infer<typeof registerValidationSchema>;

const Register: React.FC = () => {
  //* Hooks
  const { data: session } = useSession();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(registerValidationSchema),
  });

  //* Handlers
  const onSubmit = handleSubmit((data) => console.log(data));

  //* Render
  // if (session) return redirect('/');
  return (
    <div className="border border-blue-800 rounded-md p-10">
      <>
        <h2 className="text-2xl text-center">Crie sua conta</h2>
      </>

      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <Input>
            <Input.Input
              {...register('name', { required: true })}
              className="border border-blue-800 w-full px-1"
              label="Nome"
              labelClassName="flex justify-start align-center text-lg text-bold"
              placeholder="Seu nome"
              error={errors.name && 'Este campo é obrigatório!'}
            />
          </Input>
          <Input>
            <Input.Input
              {...register('password', { required: true })}
              type="password"
              className="border border-blue-800 w-full px-1"
              label="Senha"
              labelClassName="flex justify-start align-center text-lg text-bold"
              error={errors.password && errors.password.message}
            ></Input.Input>
          </Input>
        </div>
        <div className="flex flex-col gap-10">
          <button
            disabled={errors.name && errors.password && true}
            className="relative self-center border border-blue-400 hover:bg-blue-500  transition-colors  bg-blue-700 rounded-full text-base text-white text-bold hover:text-gray-100 w-full p-1"
            type="submit"
          >
            Criar conta
          </button>
          <div className="flex flex-col gap-1 items-center justify-center border-t border-t-gray-600 pt-4">
            <Link
              href="/auth/recovery"
              className="text-xs text-blue-600 hover:text-blue-400 transition-colors"
            >
              Esqueceu a Senha?
            </Link>
            <Link
              href="/auth/login"
              className="text-xs text-blue-600 hover:text-blue-400 transition-colors"
            >
              Já tem uma conta? {''}Entrar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
