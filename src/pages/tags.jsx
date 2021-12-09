import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Container } from '../layouts';
import { Header, TagsBlock } from '../components';

const Tags = ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <Header title="Project Tags">
        Software Developer &ndash; Aeronautical Engineer
      </Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};
