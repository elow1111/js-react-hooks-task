import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
  const editorRef = useRef(null);

  useEffect(() => {
    const editorInstance = new Editor({
      el: editorRef.current,
      hideModeSwitch: true,
    });

    editorInstance.addHook('change', () => {
      const content = editorInstance.getMarkdown();
      onContentChange(content);
    });

    return () => {
      editorInstance.destroy();
    };
  }, [onContentChange]);

  return (
    <div>
      <div ref={editorRef} />
    </div>
  );
  // END
};

export default MarkdownEditor;
