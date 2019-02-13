import React, {Component} from 'react'
import Link from 'next/link'
import Head from '../../components/head'
import Nav from '../../components/nav'

export default class Home extends Component {
  componentDidMount() {
    console.log('Home: component did mount')
  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <Nav />
    
        <div className="hero">
          <h1 className="title">Home Site</h1>
          <p className="description">
          <Link href="/test"><a>Test</a></Link>
          </p>
        </div>
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
        `}</style>
      </div>
    );
  }
}
