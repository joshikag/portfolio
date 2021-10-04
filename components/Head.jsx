import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Joshika Ganne is an avid web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="joshika, joshika ganne, ganne, web developer, joshika web developer, joshika developer, mern stack, joshika portfolio"
      />
      <meta property="og:title" content="Joshika Ganne's Portfolio" />
      <meta
        property="og:description"
        content="A web developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Joshika Ganne',
};
