import React from 'react';

const GlobalNotFound = () => {
  return (
    <html lang="en">
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
          fontFamily: 'system-ui, sans-serif',
          background: '#0f0f0f',
          color: '#f5f5f5',
        }}>
          <div style={{ fontSize: '6rem', marginBottom: '0.5rem' }}>🕵️‍♂️</div>
          <h1 style={{ fontSize: '4rem', margin: 0, fontWeight: 800 }}>404</h1>
          <h2 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>
            This page pulled a disappearing act.
          </h2>
          <p style={{ maxWidth: 420, color: '#a3a3a3', marginTop: '1rem', lineHeight: 1.6 }}>
            We checked under the couch, behind the server, and inside the
            database. Still nothing. Either it never existed, or it's really
            good at hide and seek.
          </p>

          <a
            href="/"
            style={{
              marginTop: '2rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '999px',
              background: '#f5f5f5',
              color: '#0f0f0f',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Take me somewhere real →
          </a>
        </div>
      </body>
    </html>
  );
};

export default GlobalNotFound;