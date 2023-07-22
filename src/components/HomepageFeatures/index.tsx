import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
    title: string
    Svg: React.ComponentType<React.ComponentProps<'svg'>>
    description: JSX.Element
}

const FeatureList: FeatureItem[] = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily
                installed and used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: 'Modern Styling',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                This project uses the UI styles from <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/soft-design-system">Soft UI Design</a>, 
                a popular Design crafted and released for free by <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/3fKQZaL">Creative-Tim</a>. 
            </>
        ),
    },
    {
        title: 'Actively Supported',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                The codebase is constantly improved, updated and actively supported by <a target="_blank" rel="noopener noreferrer" href="https://appseed.us">AppSeed</a>{' '}
                via email and <a target="_blank" rel="noopener noreferrer" href="https://appseed.us/support/">Discord</a>. 
            </>
        ),
    },
]

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
