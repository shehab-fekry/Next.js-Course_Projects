## SSG and SSR and Client-Side Data Fetching
### Static Site Generation (SSG) =====> getStaticProps(context) {}, getStaticPaths() {}
#### features:
+ pre-render pages in build-time.
+ re-generate pages after deployment with (revalidate) property.
+ pr-render dynamic-pages, by pre-rendering the (few known-paths) and pre-render the rest (on the fly).

#### when to use:
+ pages that's need to be rendered instantly.
+ mainly serve home pages for (SEO) direct traffic and important-data pages. 
+ pages that's better to have pre-rendered with it's data.

<hr>

### Server Side Rendering (SSR): =====> getServerSideProps(context) {}
#### features:
+ doesn't pre-render pages in build-time.
+ pre-render pages after deployment (on the fly) with each request sent to the server.

#### when to use:
+ if page data mostly depend on requests.
+ if the page have user-specific or post-login data (Ex: user-profile or dashboard).
+ with dynamic pages, that doesn't provide (few known-paths) due to it's multi-params [...slugs], and 
  page data isn't important anyways.

<hr>

### Client Side Fetching =====> useEffect(), componentDidMount()
#### features:
+ data-fetching starts after the page reaches the frontend already.
+ no data exist in the DOM initial mount (bad for SEO).
+ shows the user a loading-effects while data is being fetched.

#### when to use:
+ if page data change frequently (Ex: stock market).
+ if any external API data is needed. 
