import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Editor, BubbleMenu } from '@tiptap/react'
import {
  RxCode,
  RxFontBold,
  RxFontItalic,
  RxLink1,
  RxStrikethrough,
  RxTextAlignCenter,
  RxTextAlignLeft,
  RxTextAlignRight,
  RxUnderline,
} from 'react-icons/rx'

interface Props {
  editor: Editor
}

export function Menu({ editor }: Props) {
  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex"
    >
      <ToggleGroup.Root className="flex items-center" type="single">

      <ToggleGroup.Item
          value="left"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          data-active={editor.isActive({ textAlign: 'left' })}
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
          <RxTextAlignLeft className="w-4 h-4" />
        </ToggleGroup.Item>

        <ToggleGroup.Item
          value="center"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          data-active={editor.isActive({ textAlign: 'center' })}
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
          <RxTextAlignCenter className="w-4 h-4" />
        </ToggleGroup.Item>

        <ToggleGroup.Item
          value="right"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          data-active={editor.isActive({ textAlign: 'right' })}
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
          <RxTextAlignRight className="w-4 h-4" />
        </ToggleGroup.Item>

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
          value="underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          data-active={editor.isActive('underline')}
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
          <RxUnderline className="w-4 h-4" />
        </ToggleGroup.Item>

        <ToggleGroup.Item
          value="strike"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          data-active={editor.isActive('strike')}
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
          <RxStrikethrough className="w-4 h-4" />
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

        <ToggleGroup.Item
          value="link"
          onClick={() => {
            const previousUrl = editor.getAttributes('link').href
            const url = window.prompt('URL', previousUrl)

            if (url === null) {
              return
            }

            if (url === '') {
              editor.chain().focus().extendMarkRange('link').unsetLink().run()

              return
            }

            editor
              .chain()
              .focus()
              .toggleLink({
                href: url,
              })
              .run()
          }}
          data-active={editor.isActive('link')}
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
          <RxLink1 className="w-4 h-4" />
          <span className="border-b border-b-zinc-300">Link</span>
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </BubbleMenu>
  )
}
