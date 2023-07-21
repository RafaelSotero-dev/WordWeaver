import EditorComponent from './components/EditorComponent'

export default function Home() {
  return (
    <main className="min-h-screen flex items-start justify-center lg:p-8 bg-gradient-to-bl from-rose-900 via-amber-800 to-rose-400">
      <section
        className={`
        max-sm:w-full
        max-sm:min-h-screen
        sm:w-full
        sm:min-h-screen
        sm:flex
        sm:items-center
        sm:pl-8
        min-[720px]:pl-16
        min-[840px]:pl-32
        lg:pl-0
        lg:max-w-[60.249rem]
        lg:min-h-[calc(100vh-4rem)]
        lg:items-start
        lg:grid
        lg:grid-cols-[230px_1fr]
        lg:rounded
        bg-zinc-800
        shadow-zinc-800
        shadow-sm
        overflow-hidden
        `}
      >
        <aside className="p-4 bg-zinc-900 border-r border-zinc-900 max-sm:hidden sm:hidden lg:flex lg:h-full items-start">
          <div className="flex items-center gap-2 group w-fit">
            <button className="w-3 h-3 border-none bg-zinc-600 group-hover:bg-red-400 rounded-[100%]" />
            <button className="w-3 h-3 border-none bg-zinc-600 group-hover:bg-yellow-400 rounded-[100%]" />
            <button className="w-3 h-3 border-none bg-zinc-600 group-hover:bg-emerald-400 rounded-[100%]" />
          </div>
        </aside>

        <div className="p-8 prose prose-invert">
          <EditorComponent />
        </div>
      </section>
    </main>
  )
}
