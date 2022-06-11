import React from 'react';
import {
    Author,
    AuthorName,
    CardBody,
    CardHeader,
    Container,
    Date,
    Img,
    Line,
    Title,
} from './BlogCard.style';
import { SecondaryButton } from '../../../UI/SecondaryButton';

const BlogCard = ({ img, title }) => {
    return (
        <Container>
            <CardHeader>
                <Img src={img} />
                <Date>July 07 2020</Date>
            </CardHeader>
            <CardBody>
                <Author>
                    <Line />
                    <AuthorName>ADMIN</AuthorName>
                </Author>
                <Title>{title}</Title>
                <SecondaryButton style={{ margin: '1rem auto .5rem 0' }}>
                    Read More
                </SecondaryButton>
            </CardBody>
        </Container>
    );
};

export default BlogCard;
