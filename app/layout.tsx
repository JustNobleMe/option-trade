import React from 'react';
import MainNav from '../components/main-nav';
import Working from '../components/working';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <div>
          {/* <Working /> */}


          <MainNav />
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;
