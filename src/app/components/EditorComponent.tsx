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
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import Code from '@tiptap/extension-code'
import CodeBlock from '@tiptap/extension-code-block'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'

lowlight.registerLanguage('typescript', typescript)

const EditorComponent = () => {
  const editor = useEditor({
    extensions: [
      Code,
      CodeBlock,
      Image,
      Underline,
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Link.configure({
        openOnClick: true,
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
      <EditorContent editor={editor} className='prose prose-invert prose-p:m-1 prose-h1:mb-4 prose-h2:my-6 prose-h3:my-4' />
    </>
  )
}

export default EditorComponent
