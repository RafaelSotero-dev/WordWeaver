import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Editor, BubbleMenu } from '@tiptap/react'
import { RxCode, RxFontBold, RxFontItalic } from 'react-icons/rx'

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
  )
}
