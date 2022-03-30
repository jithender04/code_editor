import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import 'ace-builds/src-noconflict/ext-language_tools';
import ReactResizeDetector from 'react-resize-detector';

const Aceeditor = (props) => {
  const { language, displayName, value, onChange } = props;
  const [width, setwidth] = useState(100);
  const [height, setheight] = useState(100);
  function handleChange(value) {
    onChange(value);
  }
  const images = {
    HTML: require('./icons/HTML.svg'),
    CSS: require('./icons/CSS.svg'),
    JS: require('./icons/JS.svg'),
  };
  function loadImage(imageName) {
    return images[imageName];
  }
  const onResize = (w, h) => {
    setwidth(w);
    setheight(h);
  };
  return (
    <div className={`editor-container`}>
      <div className='editor-title'>
        <img src={loadImage(displayName)} alt='icon' />
        <div>{displayName}</div>
      </div>
      <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
      <AceEditor
        mode={language}
        height={height}
        width={width}
        theme='tomorrow_night'
        onChange={handleChange}
        value={value}
        className='ace-editor-wrapper'
        fontSize={17}
        // maxLines={30}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          focus: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default Aceeditor;
