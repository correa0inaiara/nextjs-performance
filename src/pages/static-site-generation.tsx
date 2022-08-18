import { GetStaticProps, GetStaticPropsContext } from 'next'

// @flow 
import * as React from 'react';
type Props = {
    name: string;
};
export const StaticSiteGenerationPage = (props: Props) => {
    return (
        <div>
            {props.name}
        </div>
    );
};

export default StaticSiteGenerationPage;

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
    return {
        props: {
            name: 'full cycle (static site generation)'
        }
    }
}