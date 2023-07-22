import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Editor, FloatingMenu } from '@tiptap/react'
import Image from 'next/image'

interface Props {
  editor: Editor
}

function getSlashInTextArea() {
  const textArr = document.querySelector('.ProseMirror')?.childNodes
  textArr?.forEach((item) => {
    if (item.textContent === '/') {
      item.textContent = ''
    }
  })
}

export function MenuFloating({ editor }: Props) {
  return (
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
          onClick={() => {
            editor.chain().focus().setParagraph().run()
            getSlashInTextArea()
          }}
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
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 1 }).run()
            getSlashInTextArea()
          }}
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
              <span className="text-xs text-zinc-400">large section title</span>
            </div>
          </div>
        </ToggleGroup.Item>

        <ToggleGroup.Item
          value="heading 2"
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 2 }).run()
            getSlashInTextArea()
          }}
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
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 3 }).run()
            getSlashInTextArea()
          }}
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
              <span className="text-xs text-zinc-400">Small section title</span>
            </div>
          </div>
        </ToggleGroup.Item>
        <hr className="border-zinc-500 m-1" />
        <span className="text-zinc-400 text-xs mt-1 pl-1">Media</span>
        <ToggleGroup.Item
          value="Image"
          onClick={() => {
            const url = window.prompt('URL')

            if (url) editor.chain().focus().setImage({ src: url }).run()
            getSlashInTextArea()
          }}
          data-active={editor.isActive('Image')}
        >
          <div className="flex items-center gap-2 h-fit p-1">
            <Image
              src="https://www.notion.so/images/blocks/image.33d80a98.png"
              alt="heading 3"
              width={40}
              height={40}
              className="rounded m-0"
            />
            <div className="flex flex-col items-start justify-center gap-1">
              <span className="text-md text-zinc-200">Image</span>
              <span className="text-xs text-zinc-400">
                Upload or embed with a link
              </span>
            </div>
          </div>
        </ToggleGroup.Item>

        <ToggleGroup.Item
          value="codeBlock"
          onClick={() => {
            const language = window.prompt('Language')

            if (language)
              editor
                .chain()
                .focus()
                .toggleCodeBlock({ language: language })
                .run()

            getSlashInTextArea()
          }}
          data-active={editor.isActive('codeBlock')}
        >
          <div className="flex items-center gap-2 h-fit p-1">
            <Image
              src="https://www.notion.so/images/blocks/code.a8b201f4.png"
              alt="codeBlock"
              width={40}
              height={40}
              className="rounded m-0"
            />
            <div className="flex flex-col items-start justify-center gap-1">
              <span className="text-md text-zinc-200">Code</span>
              <span className="text-xs text-zinc-400">
                Capture a code snippet
              </span>
            </div>
          </div>
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </FloatingMenu>
  )
}
