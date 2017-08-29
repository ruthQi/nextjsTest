/*动态改变页面内容*/
import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = (props) => (
   <li>
      <Link href={`/post?id=${props.title}`}>
         <a>{props.title}</a>
      </Link>
   </li>
)

const PostLinkNice = (props) => (
   <li>
      <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
         <a>{props.title}</a>
      </Link>
   </li>
)
export default () => (
   <Layout>
      <h1>My Blog</h1>
      <ul>
         <PostLink title="Hello Next.js"/>
         <PostLink title="Learn Next.js is awesome"/>
         <PostLink title="Deploy apps with Zeit"/>
         {/*这种链接点击浏览器的前进后退都好使，但是reload的时候回报404，因为这个路径本身不存在*/}
         <PostLinkNice id="hello-nextjs" title="Hello Next.js"/>
         <PostLinkNice id="learn-nextjs" title="Learn Next.js is awesome"/>
         <PostLinkNice id="deploy-nextjs" title="Deploy apps with Zeit"/>
      </ul>
   </Layout>
)