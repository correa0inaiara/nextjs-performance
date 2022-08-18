import { GetServerSideProps, GetServerSidePropsContext } from 'next'

// @flow 
import * as React from 'react';
type Props = {
    name: string;
};
export const ServerSideRenderPage = (props: Props) => {
    return (
        <div>
            {props.name}
        </div>
    );
};

export default ServerSideRenderPage;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    return {
        props: {
            name: 'full cycle'
        }
    }
}