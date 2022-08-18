import { GetStaticProps, GetStaticPropsContext } from 'next'

// @flow 
import * as React from 'react';
type Props = {
    name: string;
    date: string;
};
export const IncrementalGenerationPage = (props: Props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.date}</p>
        </div>
    );
};

export default IncrementalGenerationPage;

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
    return {
        props: {
            name: 'full cycle',
            date: new Date().toISOString(),
        },
        revalidate: 10, // 10s que a página vai ficar gerada (cache da página)
    }
}