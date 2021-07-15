import { useRouter } from 'next/router'
import Link from 'next/link'

const Home = ({ foo }: { foo: string }) => (
  <>
    <h1>Home</h1>
    <p>Something wonderful goes here!</p>
  </>
);

export const getStaticProps = async () =>  {
  console.log('static site');

  return {
    props: {
      foo: 'bar'
    }
  }
}

export default Home