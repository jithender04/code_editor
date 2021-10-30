import React, { useState, useEffect } from 'react';
import Aceeditor from './Aceeditor';
import Loader from './Loader';
import useLocalStorage from './useLocalStorage';
import Split from 'react-split';

function App() {
  const [isloading, setisloading] = useState(true);
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const load = setTimeout(() => {
      setisloading(false);
    }, 4000);
    return () => {
      clearTimeout(load);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {isloading ? (
        <Loader />
      ) : (
        <Split direction='vertical' gutterSize={4} style={{ height: `100vh` }}>
          <Split className='split top' minSize={100} gutterSize={4}>
            <Aceeditor
              language='html'
              displayName='HTML'
              value={html}
              onChange={setHtml}
            />
            <Aceeditor
              language='css'
              displayName='CSS'
              value={css}
              onChange={setCss}
            />
            <Aceeditor
              language='javascript'
              displayName='JS'
              value={js}
              onChange={setJs}
            />
          </Split>
          <div>
            <iframe
              srcDoc={srcDoc}
              title='output'
              sandbox='allow-scripts'
              frameBorder='0'
              width='100%'
              height='100%'
              style={{ backgroundColor: '#3A3E4B' }}
            />
          </div>
        </Split>
      )}
    </div>
  );
}

export default App;
