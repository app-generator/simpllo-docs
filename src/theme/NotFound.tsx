import React, { useEffect } from 'react'
import Translate, { translate } from '@docusaurus/Translate'
import { PageMetadata } from '@docusaurus/theme-common'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import { useLocation } from '@docusaurus/router'
import emailjs from '@emailjs/browser'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function NotFound() {
    const { siteConfig } = useDocusaurusContext()
    const location = useLocation()

    const serverId = siteConfig.customFields.EMAILJS_SERVER_ID as string
    const templateId = siteConfig.customFields.EMAILJS_TEMPLATE_ID as string
    const publicKey = siteConfig.customFields.EMAILJS_PUBLIC_KEY as string

    useEffect(() => {
        if (!serverId || !templateId || !publicKey) return

        async function emailJS() {
            emailjs
                .send(
                    serverId,
                    templateId,
                    {
                        url:
                            'https://docusaurus-soft-design.onrender.com' +
                            location.pathname,
                    },
                    publicKey
                )
                .then(
                    function (response) {
                        console.log('SUCCESS!', response.status, response.text)
                    },
                    function (error) {
                        console.log('FAILED...', error)
                    }
                )
        }

        emailJS()
    }, [])

    return (
        <>
            <PageMetadata
                title={translate({
                    id: 'theme.NotFound.title',
                    message: 'Page Not Found',
                })}
            />
            <Layout>
                <main className="container margin-vert--xl">
                    <div className="row">
                        <div className="col col--6 col--offset-3">
                            <h1 className="hero__title">
                                <Translate
                                    id="theme.NotFound.title"
                                    description="The title of the 404 page"
                                >
                                    Page Not Found
                                </Translate>
                            </h1>
                            <div>
                                <Translate
                                    id="theme.NotFound.p1"
                                    description="The first paragraph of the 404 page"
                                >
                                    Sorry but the page you were looking for
                                    could not be found.
                                </Translate>
                            </div>
                            <div>
                                <div className="py-4 md:mr-20 justify-center ">
                                    <Link
                                        className="bg-white  no-underline hover:no-underline rounded-md text-black px-4 py-2   "
                                        to="/"
                                    >
                                        Back to Home Page
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}
