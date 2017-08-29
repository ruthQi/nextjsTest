/*通过fetch获取数据渲染页面*/
import Layout from '../components/Layout';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/postFetch/${show.id}`} href={`/postFetch?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)
//That's a static async function you can add into any page in your app. 
//Using that, we can fetch data and send them as props to our page.
//In this case, the message only printed on the server.
//That's because we render the page on the server.
//服务端即node端渲染数据
Index.getInitialProps = async function() {
   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
   const data = await res.json()
   //console.log(data)
   return {
      shows: data
   }
}

export default Index