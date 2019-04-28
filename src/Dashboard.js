import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Title } from 'react-admin';

const styles = {
    card: {
        maxWidth: 1200,
        paddingTop: '1%',
        paddingBottom: '1%',
        paddingLeft: '1%',
        paddingRight: '1%',
    },
    media: {
        height: 575,
    },
};
export default () => (
    <Card style={styles.card} raised={true}>
        <Title title="DVD Rental Practice Application" />
        <CardMedia style={styles.media} image={require('./images/blockbuster.png')}/>
    </Card>
);
