//对应dynamic的链接页面
import Layout from '../components/Layout';

const Content = (props) => (
   <div>
      <h1>{props.url.query.title}</h1>
      <p>This is the Blog Content</p>
   </div>
   
)
//url prop is only exposed to the page's main component
//That's not exposed for other components used in the page.
//如果需要使用的话可以通过参数传递
export default (props) => (
   <Layout>
      <Content url={props.url}/>
   </Layout>
)