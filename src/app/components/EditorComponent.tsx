'use client'

import '../styles/styles.css'
import { useEditor, EditorContent } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from '../utils/initialContent'
import { lowlight } from 'lowlight'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/base16/dracula.css'
import Placeholder from '@tiptap/extension-placeholder'
import { Menu } from './Menu'
import { MenuFloating } from './MenuFloating'

lowlight.registerLanguage('typescript', typescript)

const EditorComponent = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'What’s the title?'
          }

          return 'Write something …'
        },
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
  })

  return (
    <>
      {editor && <Menu editor={editor} />}
      {editor && <MenuFloating editor={editor} />}
      <EditorContent editor={editor} className='prose prose-invert' />
    </>
  )
}

export default EditorComponent
