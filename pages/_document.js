import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"a
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <div id="custom-content">
            <section>
              <h1>Download YouTube Thumbnails Quickly and Easily</h1>
              <p>Need to download a YouTube thumbnail? Our website makes it easy! Just follow these simple steps:</p>
              <ol>
                <li>Copy the YouTube video URL.</li>
                <li>Paste the URL into the download box on our website.</li>
                <li>Choose the thumbnail size and format.</li>
                <li>Click the "Download" button.</li>
              </ol>
              <p>That's it! Your thumbnail will be downloaded to your computer in seconds.</p>
            </section>
            <section>
              <h2>Why Download YouTube Thumbnails?</h2>
              <p>
                There are many reasons why you might want to download a YouTube thumbnail. For example, you might want to use it on your own website or blog, or you might want to use it to create a custom thumbnail for a video that you are editing.
              </p>
            </section>
            <section>
              <h2>No Account Required</h2>
              <p>You don't need to create an account to use our website. Simply visit our website and start downloading thumbnails right away!</p>
            </section>
            <section>
              <h2>Get Started Today!</h2>
              <p>Download YouTube thumbnails quickly and easily with our website. Try it today!</p>
            </section>
            <section class="additional-text">
            <style>{`
            
            #custom-content h1, #custom-content h2 {
              text-align: center; /* Center headings within the #custom-content div */
            }
            #custom-content h1 {
              margin-bottom: 20px; /* Add spacing below the h1 heading */
            }
            .additional-text {
              margin-top: 20px; /* Add spacing above the additional text */
              color: white; /* Set text color to white */
            }
          `}</style>
              <p>
                YouTube thumbnail downloader, download YouTube thumbnails, YouTube thumbnails, free YouTube thumbnail downloader, easy YouTube thumbnail downloader, fast YouTube thumbnail downloader, high quality YouTube thumbnail downloader, SEO-friendly YouTube thumbnail downloader
              </p>
            </section>
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
