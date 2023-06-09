import { AboutInfo, AboutTitle } from './about/page';
import { Experience, ExperienceTitle } from './experience/page';
import SideBar from './sidebar/page';

export default function Home() {
  return (
    <>
      <head>
        <title>Resume</title>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <div className="flex">
          <SideBar />
          <>
            <div>
              <>
                <AboutTitle />
                <AboutInfo />
                <ExperienceTitle />
                <Experience />
              </>
            </div>
          </>
        </div>
      </body>
    </>
  );
}
