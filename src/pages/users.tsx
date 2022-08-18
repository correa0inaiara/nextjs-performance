import { Typography } from '@mui/material';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

type Props = {
    
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 300 }
]

const limit = 5

export const UsersPage = (props: Props) => {

    const [data, setData] = useState({
        data: [],
        total: 0
    })
    const [page, setPage] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:8000/names?_page=${page}&_limit=${limit}`)
        .then(res => {
            console.log(res)
            setData({
                data: res.data,
                total: +res.headers['x-total-count']
            })
        })
    }, [page])

    return (
        <div style={{height: 400}}>
            <Typography variant="h4">
                Otimizar Front-end com React.js
            </Typography>
            <DataGrid
                columns={columns}
                pageSize={limit}
                rows={data.data}
                rowCount={data.total}
                onPageChange={(page) => setPage(page)}
                paginationMode="server"
            />
        </div>
    );
};

export default UsersPage;