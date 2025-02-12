// React Imports

// Style Import
import "../styles/components/Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="Footer">
        <section className="links">
          <ul className="unorderedListFooter">
            <li className="listItemFooter">
              <a className="iconQuantum" href="/">
                <img src="/quantum.png" />
              </a>
            </li>
          </ul>
          <ul className="unorderedListFooter">
            <p className="title">Downloads</p>
            <li className="listItemFooter">
              <a href="/download" className="link" target="_blank">
                QuantumOS-x64
              </a>
            </li>
          </ul>
          <ul className="unorderedListFooter">
            <p className="title">GitHub</p>
            <li className="listItemFooter">
              <a
                href="https://github.com/QuantumOSgsi"
                className="link"
                target="_blank"
              >
                QuantumOS (Project Repo)
              </a>
            </li>
            <li className="listItemFooter">
              <a
                href="https://github.com/devaspepito"
                className="link"
                target="_blank"
              >
                devaspepito (Brayan Ocampo)
              </a>
            </li>
            <li className="listItemFooter">
              <a
                href="https://github.com/santilife"
                className="link"
                target="_blank"
              >
                santilife (Santiago Otalvaro)
              </a>
            </li>
            <li className="listItemFooter">
              <a
                href="https://github.com/valent100"
                className="link"
                target="_blank"
              >
                valent100 (Valentina Tobon)
              </a>
            </li>
          </ul>
          <ul className="unorderedListFooter">
            <p className="title">Contact</p>

            <li className="listItemFooter">
              <a
                href="mailto:contact.ocampo.info@gmail.com"
                className="link"
                target="_blank"
              >
                contact.ocampo.info@gmail.com
              </a>
            </li>

            <li className="listItemFooter">
              <a
                href="mailto:santiagootalvaro678@gmail.com"
                className="link"
                target="_blank"
              >
                santiagootalvaro678@gmail.com
              </a>
            </li>

            <li className="listItemFooter">
              <a
                href="mailto:valentobon021@gmail.com"
                className="link"
                target="_blank"
              >
                valentobon021@gmail.com
              </a>
            </li>
          </ul>
        </section>
        <hr />
        <section className="secondaryFooter">
          <div className="footerCopyright">&copy; QuantumOS</div>
          <div className="footerSocialMedia">
            <a href="https://instagram.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 256"
              >
                <path
                  fill="var(--color-30)"
                  d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
                />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank">
              <svg
                viewBox="0 0 256 180"
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                  fill="var(--color-30)"
                />
                <path
                  fill="var(--color-60)"
                  d="m102.421 128.06 66.328-38.418-66.328-38.418z"
                />
              </svg>
            </a>
            <a href="https://telegram.org" target="_blank">
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid"
              >
                <defs>
                  <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-30)" />
                    <stop offset="100%" stopColor="var(--color-30)" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#a)"
                  d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"
                />
                <path
                  fill="var(--color-60)"
                  d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"
                />
              </svg>
            </a>
          </div>
        </section>
      </footer>
    </>
  );
};
