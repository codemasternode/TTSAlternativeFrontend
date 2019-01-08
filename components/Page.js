import "./global.css"
import Layout from './layouts/Layout'
import Head from './head'

export default class extends React.Component {
    render() {
        let { metas, navbar, footer } = this.props
        return (
            <React.Fragment>
                <Head title={metas.title} />
                <div className="page">
                    <Layout navbar={navbar} footer={footer}>
                        {this.props.children}
                    </Layout>
                </div>
            </React.Fragment>
        )
    }
}
