//对应fetch的链接页面
/*
从/fetch页面点击链接进入此页面，console.log是打印在浏览器端
如果在当前页面刷新reload,则打印在服务器node端

Here we can only see the message on the browser console.
That's because we navigated to the post page via the client side. 
Then fetching data from the client side is the best way to do it.

If you just visit a post page directly (eg:- http://localhost:3000/p/975) 
you'll be able to see the message printed on the server but not in the client.
*/
import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post;
