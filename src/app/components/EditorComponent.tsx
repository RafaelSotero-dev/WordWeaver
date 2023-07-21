'use client'

import '../styles/styles.css'
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from '../utils/initialContent'
import { RxFontBold, RxFontItalic, RxCode } from 'react-icons/rx'
import { lowlight } from 'lowlight'
import typescript from 'highlight.js/lib/languages/typescript'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import 'highlight.js/styles/base16/dracula.css'
import Image from 'next/image'
import Placeholder from '@tiptap/extension-placeholder'

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
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex"
        >
          <ToggleGroup.Root className="flex items-center" type="single">
            <ToggleGroup.Item
              value="bold"
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
              className={`
              p-2
              text-zinc-200
              text-sm
              flex
              items-center
              gap-1.5
              font-medium
              leading-none
              hover:text-zinc-50
              hover:bg-zinc-400
              transition-colors
              data-[active=true]:text-orange-600`}
            >
              <RxFontBold className="w-4 h-4" />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="italic"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
              className={`
              p-2
              text-zinc-200
              text-sm
              flex
              items-center
              gap-1.5
              font-medium
              leading-none
              hover:text-zinc-50
              hover:bg-zinc-400
              transition-colors
              data-[active=true]:text-orange-600`}
            >
              <RxFontItalic className="w-4 h-4" />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="code"
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive('code')}
              className={`
              p-2
              text-zinc-200
              text-sm
              flex
              items-center
              gap-1.5
              font-medium
              leading-none
              hover:text-zinc-50
              hover:bg-zinc-400
              transition-colors
              data-[active=true]:text-orange-600`}
            >
              <RxCode className="w-4 h-4" />
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </BubbleMenu>
      )}
      {editor && (
        <FloatingMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          shouldShow={({ state }) => {
            const { $from } = state.selection
            const currentLineText = $from.nodeBefore?.textContent

            return currentLineText === '/'
          }}
          className="p-1 rounded-lg bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 overflow-hidden flex flex-col"
        >
          <ToggleGroup.Root type="single" className="flex flex-col p-0 w-fit">
            <ToggleGroup.Item
              value="paragraph"
              onClick={() => editor.chain().focus().setParagraph().run()}
              data-active={editor.isActive('paragraph')}
            >
              <div className="flex items-center gap-2 h-fit p-1">
                <Image
                  src="https://www.notion.so/images/blocks/text/en-US.png"
                  alt="Text"
                  width={40}
                  height={40}
                  className="rounded m-0"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm text-zinc-200">Text</span>
                  <span className="text-xs text-zinc-400">
                    Start writing with plain text
                  </span>
                </div>
              </div>
            </ToggleGroup.Item>

            <ToggleGroup.Item
              value="heading"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              data-active={editor.isActive('heading', { level: 1 })}
            >
              <div className="flex items-center gap-2 h-fit p-1">
                <Image
                  src="https://www.notion.so/images/blocks/header.57a7576a.png"
                  alt="heading 1"
                  width={40}
                  height={40}
                  className="rounded m-0"
                />
                <div className="flex flex-col items-start justify-center gap-1">
                  <span className="text-md text-zinc-200">heading 1</span>
                  <span className="text-xs text-zinc-400">
                    large section title
                  </span>
                </div>
              </div>
            </ToggleGroup.Item>

            <ToggleGroup.Item
              value="heading 2"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              data-active={editor.isActive('heading', { level: 2 })}
            >
              <div className="flex items-center gap-2 h-fit p-1">
                <Image
                  src="https://www.notion.so/images/blocks/subheader.9aab4769.png"
                  alt="heading 2"
                  width={40}
                  height={40}
                  className="rounded m-0"
                />
                <div className="flex flex-col items-start justify-center gap-1">
                  <span className="text-md text-zinc-200">heading 2</span>
                  <span className="text-xs text-zinc-400">
                    Medium section title
                  </span>
                </div>
              </div>
            </ToggleGroup.Item>

            <ToggleGroup.Item
              value="heading 3"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              data-active={editor.isActive('heading', { level: 3 })}
            >
              <div className="flex items-center gap-2 h-fit p-1">
                <Image
                  src="https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
                  alt="heading 3"
                  width={40}
                  height={40}
                  className="rounded m-0"
                />
                <div className="flex flex-col items-start justify-center gap-1">
                  <span className="text-md text-zinc-200">heading 3</span>
                  <span className="text-xs text-zinc-400">
                    Small section title
                  </span>
                </div>
              </div>
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </FloatingMenu>
      )}
      <EditorContent editor={editor} />
    </>
  )
}

export default EditorComponent
