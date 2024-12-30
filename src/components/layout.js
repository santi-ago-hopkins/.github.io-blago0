import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )

  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      {isRootPath && (
        <div className="planet-container" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '-30px' }}>
          {[1, 2, 3, 4, 5,6,7,8,9,10].map((index) => (
            <StaticImage
              key={index}
              src="../images/planet.png"
              alt={`Planet ${index}`}
              width={60}
              aspectRatio={1/1}
              formats={["auto", "webp", "avif"]}
              className="blog-banner"
            />
          ))}
        </div>
      )}
      <main>{children}</main>
      <hr />
      <footer>
        *by santiago hopkins w/ Gatsby*
      </footer>
    </div>
  )
  
}

export default Layout
