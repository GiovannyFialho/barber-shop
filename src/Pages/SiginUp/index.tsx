import React, { useCallback, useRef } from 'react'
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'

import logoSvg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles'

const SiginUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback(async (data: object) => {
        try{
            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória')
            })

            await schema.validate(data, {
                abortEarly: false
            })
        } catch (err) {
            const errors = getValidationErrors(err)

            formRef.current?.setErrors(errors)
        }
    }, [])

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoSvg} alt="Barber Shop"/>

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça o seu cadastro</h1>
                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <a href="login">
                    <FiArrowLeft />
                    Voltar para Logon
                </a>
            </Content>
        </Container>
    )
}

export default SiginUp;