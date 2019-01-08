class Layout extends React.Component {
    render() {
        const Navbar = this.props.navbar
        const Footer = this.props.footer
        return (
            <React.Fragment>
                <Navbar />
                <div className="content">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout