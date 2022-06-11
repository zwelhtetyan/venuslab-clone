import React from 'react';
import { PageWrapperCalc } from '../../UI/PageWrapperCalc';
import { AnimateWrapperContainer as AnimateWrapper } from '../../UI/AnimateWrapper';
import { BlogCardContainer, Title } from './Blog.style';
import BlogCard from './blogCard/BlogCard';
import blogData from './blogData.json';

const Blog = () => {
    return (
        <PageWrapperCalc>
            <AnimateWrapper>
                <Title>
                    Sharing is a better way <br /> to grow the good impact…
                </Title>
            </AnimateWrapper>
            <BlogCardContainer>
                {blogData?.map((data) => (
                    <BlogCard {...data} key={data.img} />
                ))}
            </BlogCardContainer>
        </PageWrapperCalc>
    );
};

export default Blog;
