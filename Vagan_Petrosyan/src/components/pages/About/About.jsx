import React from 'react';
import Layout from "../../Layout";
import {useHistory} from 'react-router-dom';

const About = () => {
    const  history = useHistory();
    return (
        <Layout>
            <h1>About Page</h1>
            <button type="button" onClick={() => history.goBack()}>go back</button>
        </Layout>
    );
};

export default About;