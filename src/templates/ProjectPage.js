import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'

import rehypeReact from "rehype-react"

// import ScrollReveal from 'scrollreveal'

import AnimateLoad from '../components/AnimateLoad'
import Tag from '../components/Tag'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import LinksList from '../components/LinksList'
import ReadingProgressBar from '../components/ReadingProgressBar'

import { formatDate } from '../components/utils.js'

import { RightArrow, LeftArrow } from '../components/icons.js'

class ResultsBanner extends React.Component {
  static defaultProps = {
    data: {},
  }

  render() {
    const dataObj = JSON.parse(this.props.data);

    return (
      <div 
        className="nl7 nr7 mv6 pa6 bg-near-white flex flex-row-ns flex-column justify-around tl-ns tc"
      >
        {
          Object.keys(dataObj).map ( i => (
            <div className="mv0-ns mv3">
              <div className="f1 fw1 mt0">
                {dataObj[i]}
              </div>
              <div className="f7 gray ttu mb0 tracked">
                {i}
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

class ProjectPage extends React.Component {
  // componentDidMount() {
  //   if (typeof window !== `undefined`) {
  //     window.sr = ScrollReveal({
  //       // reset: false,
  //       scale: 1,
  //       // mobile: true,
  //       // // delay: 200,
  //       // viewFactor: 0.3,
  //       duration: 1200,
  //       distance: '30px',
  //       easing: 'ease-in-out',
  //     });

  //     window.sr.reveal('div', { duration: 700 }, 500);
  //   }
  // }

  render() {
    const post = this.props.data.markdownRemark
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const readingTime = post.fields.readingTime; 

    const defaultMargins = 'mh0 mh0-m mh6-ns mw7';
    // const imageMargins = 'mv6 mh0';
    const imageMargins = `${defaultMargins} mv6 `;
    const baseType = 'f4-ns f5 dark-gray lh-copy center';

    let dateStart = formatDate(post.frontmatter.date, 'MMMM YYYY');
    let dateEnd = formatDate(post.frontmatter.date2, 'MMMM YYYY');
    if (dateEnd && dateEnd === dateStart) {
      dateEnd = null;
    }

    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        h1: props => (
          <h1 className={`f1 tracked-tight fw1 near-black mt6 mb5 ${defaultMargins}`}>
            {props.children}
          </h1>
        ), 
        h2: props => (
          <h2 className={`f2 near-black fw6 mt5 mb3 ${defaultMargins}`}>
            {props.children}
          </h2> 
        ),
        h3: props => (
          <h3 className={`f3 near-black fw5 mt4 mb3 ${defaultMargins}`}>
            {props.children}
          </h3>
        ),
        p: props => (
          <p className={`mt0 ${defaultMargins}`}>
            {props.children
          }</p>
        ),
        blockquote: props => (
          <div className={`mt0 ml5 mv5 f3 fw6`} style={{textIndent: '-.5em'}}>
            {props.children}
          </div>
        ),
        ul: props => (
          <ul className={`${defaultMargins}`}>
            {props.children}
          </ul>
        ),
        a: props => (
          <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pretty-link"
          >
            {props.children}
          </a>
        ), 
        hr: props => (
          <hr className="mv6 bt-0 bb b--black-10" />
        ),
        figure: props => (
          <figure className={imageMargins}>{props.children}</figure>
        ),
        figcaption: props => (
          <figcaption className="mt4 fw6 f6 dark-gray tc">{props.children}</figcaption>
        ),
        "video-container": props => (
          <div className={imageMargins}> 
            {props.children}
          </div>
        ),
        "results-banner": ResultsBanner,
        "links-list": props => {
          let arrayObj = JSON.parse(props.items);
          let items = arrayObj.map( i => i);
          
          return (
            <p className={`mt0 ${defaultMargins}`}>
              <LinksList items={items} rows/>
            </p>
          )
        }
      },
    }).Compiler;
    
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title}`}
        />

        <ReadingProgressBar/>

        {/* Cover image */}
        <div className="flex flex-row-ns flex-column mb4">
          <div className="w-100">
            { 
              post.frontmatter.cover ?
                <img className="w-100 " alt="" src={post.frontmatter.cover.publicURL} />
                :
                <div className="w-100 h5 pv7 bg-silver"></div>
            }
          </div>
        </div>

        {/* Heading */}
        <div className="flex flex-row-ns flex-column mt5 mb6">
          <div className="w-30-ns"> 
            <h1 className="f1 mt0 fw9 mb3 dark-gray lh-solid">
              {post.frontmatter.title}
            </h1>
            <div className={`f6 gray`}>
              {readingTime.text}
            </div>
          </div>

          <div className="w-10-ns">
          </div>

          <div className="w-60-ns">
            {
              post.frontmatter.description &&
              <div className="mb4 dark-gray">
                <h2 className="f7 fw6 ttu mv1">
                  <span className="">
                    Description
                  </span>
                </h2>
                <div className='f3 dark-gray lh-title'>
                  {post.frontmatter.description}
                </div>
              </div>
            }

            {
              post.frontmatter.tags &&
              <div className="mv4 dark-gray">
                <h2 className="f7 fw6 ttu mv1">
                    <span className="">
                      Tags
                    </span>
                </h2>
                <div className="mv2">
                  {post.frontmatter.tags.map(tag => (
                    <Tag size="big">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            }

            {
              <div className="mv4 dark-gray">
                <h2 className="f7 fw6 ttu mv1">
                  <span className="">
                    Date
                  </span>
                </h2>
                <div className="f5">
                  {dateStart}
                  {dateEnd &&
                    ` – ${dateEnd}`
                  }
                </div>
              </div>
            }

            {
              post.frontmatter.team &&
              <div className='mv4 dark-gray'>
                <h2 className="f7 fw6 ttu mv1">
                  <span className="">
                    Team
                  </span>
                </h2>
                <span className="f5">
                  { post.frontmatter.team }
                </span>
              </div>
            }
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-column">
          <div className={baseType}>
            { renderAst(post.htmlAst) }
          </div>
        </div> 
        
        {/* Footer */}
        <div className="flex flex-column bg-near-white mt6 nl6 nr6 ph6 pb6">
          <div className="w-100 tc f2 mv6">
            <h2>Other projects</h2>
          </div>

          <div className="flex flex-row-ns flex-column justify-between mt4">
            <div className="w-40-ns w-100">
              {
                previous && 
                <div>
                  <div className="f7 tl mb4 ttu fw6 gray db-ns dn">
                    {LeftArrow} Previous
                  </div>
                  <ProjectCard node={previous} />
                </div>
              }
            </div> 

            <div className="w-10-ns mv0-ns mv3"></div>

            <div className="w-40-ns w-100">
              {
                next &&
                <div>
                  <div className="f7 tr mb4 ttu fw6 gray db-ns dn">
                    Next {RightArrow}
                  </div>
                  <ProjectCard node={next} />
                </div>
              }
            </div>
          </div>

          <div className="w-100 tc mt6">
            <Link to="/#projects" className="ba br1 dim f4 fw6 link orange pa3">
              View all projects
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AnimateLoad(ProjectPage)
// export default ProjectPage

export const pageQuery = graphql`
         query BlogPostBySlug($slug: String!) {
           markdownRemark(fields: { slug: { eq: $slug } }) {
             id
             excerpt
             htmlAst
             frontmatter {
               title
               description
               date
               date2
               tags
               team
               cover {
                 publicURL
               }
             }
             fields {
               readingTime {
                 text
               }
             }
           }
         }
       `