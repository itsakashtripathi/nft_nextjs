import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  render() {

    return (
      <Html>
        <Head >
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" /> */}

            <link rel="icon" href="/logos/favicon.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" ></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin ></link>
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
 
        </Head>
        <body>
          <Main />
          <NextScript>

          </NextScript>
        </body>
      </Html>
    )

  }
  
}

export default MyDocument;