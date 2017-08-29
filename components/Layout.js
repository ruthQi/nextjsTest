
import HeaderLayout from './HeaderLayout';

const layoutStyle = {
   margin: 20,
   padding: 20,
   border: '1px solid #DDD'
}

const Layout = (props) => (
   <div style={layoutStyle}>
      <HeaderLayout />
      {props.children}
   </div>
)

export default Layout;