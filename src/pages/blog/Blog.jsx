import React from 'react';
import { PageWrapperCalc } from '../../UI/PageWrapperCalc';
import AnimateWrapper from '../../UI/AnimateWrapper';
import { BlogCardContainer, Title } from './Blog.style';
import BlogCard from './blogCard/BlogCard';
import blogData from './blogData.json';
import { useAction } from '../../context/ContextWrapper';

const Blog = () => {
   const { isLoading } = useAction();

   return (
      <PageWrapperCalc>
         <AnimateWrapper isLoading={isLoading} delay='0s'>
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
