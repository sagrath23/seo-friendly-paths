import { useRouter } from 'next/router'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

const Post = ({ filters }: { filters: Array<{ key: string, value: unknown }> }) => (
  <>
    <h1>Posted filters:</h1>
    <ul>
      {filters.map(({ key, value }, index) => (
        <li key={`filter-${index}`}>
          {key}: {value}
        </li>
      ))}
    </ul>
  </>
)

export const getServerSideProps = async ({ params: { filter } }: { params: { filter: Array<string> } }) =>  {
  const filters = filter.map((filter) => {
    const [key, value] = filter.split('-');

    return { key, value };
  });
  
  return {
    props: {
      filters
    }
  };
};

export default Post;