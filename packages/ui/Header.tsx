export const Header = () => {
    return (
        <>
            <header id="masthead" className="s-header">

                <div className="s-header__branding">
                    <p className="site-title">
                        <a href="index.html" rel="home">Spurgeon.</a>
                    </p>
                </div>

                <div className="row s-header__navigation">

                    <nav className="s-header__nav-wrap">

                        <h3 className="s-header__nav-heading">Navigate to</h3>

                        <ul className="s-header__nav">
                            <li className="current-menu-item"><a href="index.html" title="">Home</a></li>
                            <li className="has-children">
                                <a href="#0" title="" className="">Categories</a>
                                <ul className="sub-menu">
                                    <li><a href="category.html">Design</a></li>
                                    <li><a href="category.html">Lifestyle</a></li>
                                    <li><a href="category.html">Inspiration</a></li>
                                    <li><a href="category.html">Work</a></li>
                                    <li><a href="category.html">Health</a></li>
                                    <li><a href="category.html">Photography</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="#0" title="" className="">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="single-standard.html">Standard Post</a></li>
                                    <li><a href="single-video.html">Video Post</a></li>
                                    <li><a href="single-audio.html">Audio Post</a></li>
                                </ul>
                            </li>
                            <li><a href="styles.html" title="">Styles</a></li>
                            <li><a href="about.html" title="">About</a></li>
                            <li><a href="contact.html" title="">Contact</a></li>
                        </ul>

                    </nav>

                </div>

                <div className="s-header__search">

                    <div className="s-header__search-inner">
                        <div className="row">

                            <form role="search" method="get" className="s-header__search-form" action="#">
                                <label>
                                    <span className="u-screen-reader-text">Search for:</span>
                                    <input type="search" className="s-header__search-field" placeholder="Search for..." readOnly name="s" title="Search for:" autoComplete="off" />
                                </label>
                                <input type="submit" className="s-header__search-submit" readOnly defaultValue="Search" />
                            </form>

                            <a href="#0" title="Close Search" className="s-header__search-close">Close</a>

                        </div>
                    </div>

                </div>

                <a className="s-header__menu-toggle" href="#0"><span>Menu</span></a>
                <a className="s-header__search-trigger" href="#">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"></path>
                    </svg>
                </a>

            </header>
        </>
    )
}