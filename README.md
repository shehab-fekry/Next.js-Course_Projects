## SSG and SSR and Client-Side Data Fetching
### Static Site Generation (SSG): =====> getStaticProps(context) {}, getStaticPaths() {}
#### features:
+ pre-render pages in build-time.
+ re-generate pages after deployment with (revalidate) property.
+ pr-render dynamic-pages, by pre-rendering the (few known-paths) and pre-render the rest (on the fly).

when to use:
+ pages that's need to be rendered instantly.
+ mainly serve home pages for (SEO) direct traffic and important-data pages. 
+ pages that's better to have pre-rendered with it's data.
