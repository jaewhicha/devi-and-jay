import Link from 'next/link'

export const Header = () => {
    return (
        <>
            <header id="masthead" className="s-header">

                <div className="s-header__branding">
                    <p className="site-title">
                        <a href="index.html" rel="home">Devi & Jay</a>
                    </p>
                </div>

                <div className="row s-header__navigation">

                <nav className="s-header__nav-wrap">
                        <h3 className="s-header__nav-heading">Navigate to</h3>
                        <ul className="s-header__nav">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/recipes">Recipes</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                </div>

                <div className="s-header__search">

                    <div className="s-header__search-inner">
                        <div className="row">

                            <form role="search" method="get" className="s-header__search-form" action="#">
                                <label>
                                    <span className="u-screen-reader-text">Search for:</span>
                                    <input type="search" className="s-header__search-field" placeholder="Search for..." value="" name="s" title="Search for:" />
                                </label>
                                <input type="submit" className="s-header__search-submit" readOnly value="Search" />
                            </form>

                            <a href="#0" title="Close Search" className="s-header__search-close">Close</a>

                        </div>
                    </div>

                </div>

                <a className="s-header__menu-toggle" href="#0"><span>Menu</span></a>
                <a className="s-header__search-trigger" href="#">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"></path>
                    </svg>
                </a>

            </header>
        </>
    )
}