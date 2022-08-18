// @flow 
import { Button, Typography, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useSWRConfig } from 'swr';
import { Form } from '../../components/Form';
import { http } from '../../utils/http';
type Props = {
    
};
export const UserNewPage = (props: Props) => {
    const {cache, mutate: mutateGlobal} = useSWRConfig()
    const router = useRouter()
    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        const nameField = document.getElementById('name') as HTMLInputElement
        const nameValue = nameField.value
        await http.post('names', {name: nameValue})
        router.push('/users')
        mutateGlobal('names')
        // names?_page=1&limit=5

        const patterns = /^names\?/g;
        const mutates = Array.from((cache as Map<any, any>).keys())
            .filter((key) => patterns.test(key))
            .map((key) => mutateGlobal(key, undefined, {revalidate: true}))
        await Promise.all(mutates)
        router.push('/users')
    }

    return (
        <div>
            <Typography variant="h4">
                Novo nome
            </Typography>
            <Form onSubmit={onSubmit}>
                <TextField
                    id="name"
                    label="Digite seu nome"
                    variant="outlined"
                />
                <Button
                    type="submit"
                    variant="contained"
                >Criar</Button>
            </Form>
        </div>
    );
};

export default UserNewPage;