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
      
      
   
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Joshika Ganne',
};
