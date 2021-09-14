import React, {
  useState,
  useEffect,
} from 'react';
import Editor from './Editor';
import Loader from './Loader';
import useLocalStorage from './useLocalStorage';

function App() {
  const [
    isloading,
    setisloading,
  ] = useState(true);
  const [html, setHtml] =
    useLocalStorage(
      'html',
      ''
    );
  const [css, setCss] =
    useLocalStorage(
      'css',
      ''
    );
  const [js, setJs] =
    useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] =
    useState('');

  useEffect(() => {
    const load = setTimeout(
      () => {
        setisloading(false);
      },
      3000
    );
    return () => {
      clearTimeout(load);
    };
  }, []);

  useEffect(() => {
    const timeout =
      setTimeout(() => {
        setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
      }, 250);

    return () =>
      clearTimeout(timeout);
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
        <>
          <div className='pane top-pane'>
            <Editor
              language='xml'
              displayName='HTML'
              value={html}
              onChange={
                setHtml
              }
            />
            <Editor
              language='css'
              displayName='CSS'
              value={css}
              onChange={
                setCss
              }
            />
            <Editor
              language='javascript'
              displayName='JS'
              value={js}
              onChange={setJs}
            />
          </div>
          <div className='pane'>
            <iframe
              srcDoc={srcDoc}
              title='output'
              sandbox='allow-scripts'
              frameBorder='0'
              width='100%'
              height='100%'
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
