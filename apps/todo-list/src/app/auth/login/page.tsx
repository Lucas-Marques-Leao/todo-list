'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import GoogleIcon from '../../../assets/svgs/GoogleIcon';
import Input from '../../../components/atoms/Input';

const loginSchema = z.object({
  name: z.string(),
  password: z.string(),
});

type LoginInputs = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  //* hooks
  const { data: session } = useSession();
  console.log(session);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver: zodResolver(loginSchema) });

  //* handlers
  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      // await signIn();
    } catch (err) {
      console.log(err);
    }
  });

  //* render
  // if (session) return redirect('/');

  return (
    <div className="p-10">
      <>
        <h2 className="text-2xl text-center">Logar na sua conta</h2>
      </>
      {/* {session && <p>Logado</p>} */}
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
        <div className="flex flex-col gap-5">
          <button
            disabled={errors.name && errors.password && true}
            className="relative self-center border border-blue-400 hover:bg-blue-500  transition-colors  bg-blue-700 rounded-full text-base text-white text-bold hover:text-gray-100 w-full p-1"
            type="submit"
          >
            Logar
          </button>
          <button
            type="button"
            title="Logar pelo Google"
            onClick={() => signIn('google')}
            className="self-center hover:bg-gray-300  transition-colors  bg-white rounded-md text-base text-white text-bold hover:text-gray-100 w-fit"
          >
            <GoogleIcon className="text-sm border border-transparent h-10 w-10 transition-all" />
          </button>
          <div className="flex flex-col gap-1 items-center justify-center border-t border-t-gray-600 pt-3">
            <Link
              href="/auth/recovery"
              className="text-xs text-blue-600 hover:text-blue-400 transition-colors"
            >
              Esqueceu a Senha?
            </Link>
            <Link
              href="/auth/register"
              className="text-xs text-blue-600 hover:text-blue-400 transition-colors"
            >
              Não tem uma conta? Criar!
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
