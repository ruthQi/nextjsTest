/*
next link API
client-side navigation
next/link does all the location.history handling for you.

<Link> supports any component that supports the onClick event. 
In case you don't provide an <a> tag, 
it will only add the onClick event handler and won't pass the href property.
*/
import Link from 'next/link';
const Index = ()=>(
   <div>
      {/*加在link上的style={{fontSize: 20}}没有任何样式，因为Link是一个更高阶的组件，只有href和相似的属性*/}
      <Link href="/about" >
         <a style={{fontSize: 20}}>About Page</a>
      </Link>
      <Link href="/about">
         <button>Go To About Page</button>
      </Link>
      <p>Hello Nextjs</p>
   </div>
)

export default Index;