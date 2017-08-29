import Link from 'next/link';

const linkStyle = {
   marginRight: 15
}

const HeaderLayout = () => (
   <div>
      <Link href="/indexLayout">
         <a style={linkStyle}>Index</a>
      </Link>
      <Link href="/aboutLayout">
         <a style={linkStyle}>About</a>
      </Link>
   </div>
)

export default HeaderLayout;